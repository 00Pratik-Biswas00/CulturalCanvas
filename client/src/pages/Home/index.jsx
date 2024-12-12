import { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import MyButton1 from "../../components/Buttons/MyButton1";
import HomePageBlob from "../../components/Blobs/HomePageBlob";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Speaker from "../../components/Settings/Speaker";
import vid1 from "../../assets/store/a.mp4";
const Home = () => {
  const { t } = useTranslation();
  const homeContent = t("HomeData", { returnObjects: true });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [flippedCard, setFlippedCard] = useState(null);

  const [selectedOption, setSelectedOption] = useState("tourist_spots");
  const [userLocation, setUserLocation] = useState(null);
  const [nearestAttractions, setNearestAttraction] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const [sortOption, setSortOption] = useState("distance"); // Default sort by distance
  const [ratingFilter, setRatingFilter] = useState(0); // Default no filter

  const options = ["tourist_spots", "restaurants", "hotels", "hospitals"];

  const handleFlip = (index) => {
    setFlippedCard(index);
  };

  const handleUnflip = () => {
    setFlippedCard(null);
  };

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const updateVisibleCount = () => {
    let count;
    if (window.innerWidth >= 1280) {
      count = 6;
    } else if (window.innerWidth >= 768) {
      count = 4;
    } else {
      count = 2;
    }
    setVisibleCount(count);
    setInitialVisibleCount(count);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const fetchNearestAttractions = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/find-attractions",
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          attraction: selectedOption,
        }
      );

      const nearest = response.data.attractions;

      setNearestAttraction(nearest || []);
    } catch (error) {
      console.error("Error fetching nearest attractions:", error);
    }
  };

  const fetchRecommendations = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/recommend-products",
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
        }
      );
      setRecommendations(response.data.recommendations || []);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  const SortandFilterAttraction = async () => {
    const sortedAndFilteredAttractions = nearestAttractions
      .filter((attraction) => attraction.rating >= ratingFilter)
      .sort((a, b) => {
        if (sortOption === "distance") {
          return a.distance - b.distance;
        } else if (sortOption === "rating") {
          return b.rating - a.rating;
        }
        return 0;
      });

    setNearestAttraction(sortedAndFilteredAttractions.slice(0, 8));
  };

  // Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  // Fetch recommendations from the backend when user location is available
  useEffect(() => {
    if (userLocation) {
      fetchNearestAttractions();
    }
  }, [userLocation, selectedOption]);

  useEffect(() => {
    if (userLocation) {
      fetchRecommendations();
    }
  }, [userLocation]);

  useEffect(() => {
    if (nearestAttractions) {
      SortandFilterAttraction();
    }
  }, [sortOption, ratingFilter]);

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center bg-contain bg-no-repeat bg-center">
      <div className="w-full flex flex-col items-center justify-center gap-20 py-5">
        {homeContent.MulHome.HeriHome.map((content, ind) => (
          <div className="backdrop-blur-lg relative flex flex-col gap-10  lg:justify-between px-5 lg:py-5">
            <div
              key={ind}
              className={`relative flex flex-col lg:flex-row  lg:justify-between px-5   `}>
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col z-10 items-start justify-center gap-5 w-[200%] ">
                  <div className=" text-4xl xl:text-5xl font-extrabold  ">
                    {content.headingName}
                  </div>
                  <div className="flex flex-col gap-2  relative">
                    {/* <p className="  font-lato">{content.para}</p> */}
                    {Array.isArray(content.featuringData) &&
                      content.featuringData.length > 0 && (
                        <div>
                          <div className="flex flex-wrap gap-x-20 gap-y-2">
                            {content.featuringData.map((con, i) => (
                              <div key={i} className="flex gap-1 items-center">
                                <span className="text-2xl font-bold">
                                  {con.featureName}
                                </span>{" "}
                                <IoCheckmarkDoneCircle className="text-highlight_hover w-8 h-8" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* <Speaker webData={content.para} /> */}
                  </div>

                  <MyButton1
                    classDesign={
                      "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                    }
                    buttonLink={content.buttonLink}
                    buttonName={homeContent.homeButtonName}
                  />
                </div>
                <div
                  className=" absolute   flex items-center justify-center opacity-20 dark:opacity-70
                
                w-[18rem] md:w-[28rem] xl:w-[20rem]  
                bottom-[3rem] md:bottom-[20rem] lg:-bottom-5 xl:-bottom-30  
                md:left-72 lg:left-52  
                ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#148938"
                      d="M38.6,-63.5C45.2,-62.9,42.5,-43,40.4,-29.1C38.3,-15.3,36.8,-7.7,41.1,2.5C45.4,12.6,55.5,25.3,57.8,39.4C60.1,53.5,54.4,69,43.5,75.7C32.6,82.4,16.3,80.3,5.9,70C-4.5,59.8,-8.9,41.5,-21.6,35.8C-34.3,30.1,-55.2,37,-64.9,33.2C-74.7,29.3,-73.2,14.6,-71.2,1.2C-69.2,-12.3,-66.6,-24.6,-61,-35.6C-55.4,-46.6,-46.7,-56.3,-36.1,-54.5C-25.4,-52.8,-12.7,-39.6,1.6,-42.4C16,-45.2,31.9,-64.1,38.6,-63.5Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div
                  className=" absolute flex items-center justify-center opacity-50 dark:opacity-100
                
                w-[15rem] 
                md:right-[28rem] lg:right-[18rem] xl:right-[23rem] 2xl:right-[28rem]  
                -top-5 
                ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#f49738"
                      d="M35.1,-58.2C48.6,-53.1,64.6,-49.8,75.6,-40.4C86.7,-31,92.9,-15.5,86.4,-3.8C79.9,8,60.7,16,52.1,29.8C43.6,43.6,45.7,63.15,38.8,72.7C31.9,82.1,15.9,81.5,5.7,71.6C-4.5,61.7,-9,42.5,-16.5,33.4C-24.1,24.3,-34.7,25.2,-47.4,21.3C-60.1,17.4,-74.9,8.7,-77.4,-1.4C-79.8,-11.5,-69.8,-23,-57.8,-28.2C-45.8,-33.3,-31.9,-32.2,-21.9,-39.3C-11.9,-46.3,-6,-61.7,2.4,-65.9C10.9,-70.2,21.7,-63.3,35.1,-58.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <HomePageBlob diffImages={content.image} />
              </>
            </div>
            <div className=" flex flex-col items-start">
              <h1 className="text-4xl font-extrabold mb-6 text-center ">
                {content.nRHead}
              </h1>
              <div className="flex flex-col gap-5 items-center justify-center ">
                {/* <select
                  className="px-3 gap-x-2 py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight"
                  select
                  value={selectedOption}
                  onChange={handleChange}>
                  <option value="tourist_spots">{content.op1}</option>
                  <option value="restaurants">{content.op2}</option>
                  <option value="hotels">{content.op3}</option>
                  <option value="hospitals">{content.op4}</option>
                  
                </select> */}

                <div className="grid grid-cols-4 gap-4">
                  {options.map((option, index) => (
                    <div
                      key={option}
                      className={`p-4 rounded-lg shadow-md cursor-pointer ${
                        selectedOption === option
                          ? "bg-highlight text-white"
                          : "bg-dark_primary_text text-primary_text"
                      } hover:shadow-lg`}
                      onClick={() => setSelectedOption(option)}>
                      <h3 className="text-center capitalize font-bold">
                        {content[`op${index + 1}`]}{" "}
                        {/* Dynamically fetch option labels */}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mb-5">
              {/* Sorting Dropdown */}
              <select
                className="border p-2 rounded-md"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}>
                <option value="distance">Sort by Distance</option>
                <option value="rating">Sort by Rating</option>
              </select>

              {/* Rating Filter */}
              <div className="flex items-center">
                <label className="mr-2">Min Rating:</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(parseFloat(e.target.value))}
                  className="border p-2 rounded-md w-20"
                />
              </div>
            </div>

            <div className=" grid grid-cols-4 gap-5">
              {nearestAttractions.map((attraction) => (
                <div
                  className="p-4 gap-x-2 w-80 h-96 relative flex flex-col items-start justify-between rounded-xl shadow-custom-black dark:shadow-custom-white blogCards"
                  key={attraction.name}>
                  {/* Attraction Image */}
                  <img
                    src={attraction.photo_url}
                    alt={attraction.name}
                    className="w-full h-40 object-cover rounded-xl mb-3"
                  />

                  {/* Attraction Details */}
                  <div className="w-full">
                    <h3 className="text-xl capitalize font-playfair">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {attraction.address}
                    </p>
                    <p className="mt-1">
                      <b>{content.dist}</b> {attraction.distance.toFixed(2)} km
                    </p>
                    <p className="text-yellow-500 font-bold">
                      Rating: {attraction.rating} ★
                    </p>
                  </div>

                  {/* Map Link Button */}
                  <a
                    href={attraction.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 bg-slate-500 hover:bg-slate-600 text-white p-2 rounded-md flex items-center justify-center w-full">
                    <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                    View on Map
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {homeContent.MulHome.StoreHome.map((content, ind) => (
          <div className="backdrop-blur-lg  relative flex flex-col gap-10  lg:justify-between px-5  lg:py-20">
            <div
              key={ind}
              className={`relative flex flex-col lg:flex-row  lg:justify-between px-5  w-full  `}>
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col z-10 items-start justify-center gap-5 w-[200%]">
                  <div className=" text-4xl xl:text-5xl font-extrabold  ">
                    {content.headingName}
                  </div>
                  <div className="flex flex-col gap-2  relative">
                    {/* <p className="  font-lato">{content.para}</p> */}
                    {Array.isArray(content.featuringData) &&
                      content.featuringData.length > 0 && (
                        <div>
                          <div className="flex flex-wrap gap-x-20 gap-y-2">
                            {content.featuringData.map((con, i) => (
                              <div key={i} className="flex gap-1 items-center">
                                <span className="text-2xl font-bold">
                                  {con.featureName}
                                </span>{" "}
                                <IoCheckmarkDoneCircle className="text-highlight_hover w-8 h-8" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>

                  <MyButton1
                    classDesign={
                      "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                    }
                    buttonLink={content.buttonLink}
                    buttonName={homeContent.homeButtonName}
                  />
                </div>
                <div
                  className=" absolute   flex items-center justify-center opacity-20 dark:opacity-70
                
                w-[18rem] md:w-[28rem] xl:w-[20rem] 
                bottom-[3rem] md:bottom-[20rem] lg:-bottom-5 xl:-bottom-30  
                md:left-72 lg:left-52  
                ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#148938"
                      d="M38.6,-63.5C45.2,-62.9,42.5,-43,40.4,-29.1C38.3,-15.3,36.8,-7.7,41.1,2.5C45.4,12.6,55.5,25.3,57.8,39.4C60.1,53.5,54.4,69,43.5,75.7C32.6,82.4,16.3,80.3,5.9,70C-4.5,59.8,-8.9,41.5,-21.6,35.8C-34.3,30.1,-55.2,37,-64.9,33.2C-74.7,29.3,-73.2,14.6,-71.2,1.2C-69.2,-12.3,-66.6,-24.6,-61,-35.6C-55.4,-46.6,-46.7,-56.3,-36.1,-54.5C-25.4,-52.8,-12.7,-39.6,1.6,-42.4C16,-45.2,31.9,-64.1,38.6,-63.5Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div
                  className=" absolute flex items-center justify-center opacity-50 dark:opacity-100
                
                w-[15rem] 
                md:right-[28rem] lg:right-[18rem] xl:right-[23rem] 2xl:right-[28rem]  
                -top-5 
                ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#f49738"
                      d="M35.1,-58.2C48.6,-53.1,64.6,-49.8,75.6,-40.4C86.7,-31,92.9,-15.5,86.4,-3.8C79.9,8,60.7,16,52.1,29.8C43.6,43.6,45.7,63.15,38.8,72.7C31.9,82.1,15.9,81.5,5.7,71.6C-4.5,61.7,-9,42.5,-16.5,33.4C-24.1,24.3,-34.7,25.2,-47.4,21.3C-60.1,17.4,-74.9,8.7,-77.4,-1.4C-79.8,-11.5,-69.8,-23,-57.8,-28.2C-45.8,-33.3,-31.9,-32.2,-21.9,-39.3C-11.9,-46.3,-6,-61.7,2.4,-65.9C10.9,-70.2,21.7,-63.3,35.1,-58.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <HomePageBlob diffImages={content.image} />
              </>
            </div>

            {recommendations && (
              <div className="flex flex-col gap-5 relative items-center justify-center py-5 ">
                <h1 className=" font-bold font-pangaia text-2xl">
                  {content.proText}{" "}
                </h1>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:gap-12 gap-8 sm:gap-10 pt-5">
                  {recommendations
                    .slice(0, visibleCount)
                    .map((product, index) => (
                      <div
                        key={index}
                        className={`relative rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-lg cursor-pointer ${
                          flippedCard === index ? "rotate-y-180" : ""
                        } transition-transform duration-700`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}>
                        {flippedCard !== index ? (
                          <div className="flex flex-col gap-5 items-center justify-center p-3">
                            {hoveredCard === index ? (
                              <video
                                // src={product.video.url}
                                src={vid1}
                                autoPlay
                                loop
                                className="w-full h-full"
                              />
                            ) : (
                              <img
                                src={product.image.url}
                                alt={product.name}
                                className="w-[20rem] h-[20rem]"
                              />
                            )}

                            <button
                              onClick={() => handleFlip(index)}
                              className={`relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926] `}>
                              <span className="relative text-base text-dark_primary_text">
                                NEXT
                              </span>
                              <div className="flex items-center -space-x-3 translate-x-3">
                                <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                            </button>
                          </div>
                        ) : (
                          <div className="back absolute inset-0 flex flex-col justify-center items-center bg-background2 rounded-lg">
                            <div className="containerx">
                              <div className="boxx">
                                <h2 className="namex">{product.name}</h2>
                                <a
                                  href="/virtual-store/6759c6385204dcbaadf3fc09"
                                  className="buyx">
                                  Buy
                                </a>
                                <div className="circlex"></div>
                                <img
                                  src={product.image.url}
                                  alt="Product"
                                  className="productx w-52 h-52"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}

        {homeContent.MulHome.Home.map((content, ind) => (
          <div
            key={ind}
            className={`backdrop-blur-lg relative flex flex-col lg:flex-row  lg:justify-between px-5 sm:px-16 lg:py-20   `}>
            {ind % 2 === 0 ? (
              <>
                {/* Text on the left, image on the right */}
                <div className="flex flex-col z-10 items-start justify-center gap-5 w-[200%] ">
                  <div className=" text-4xl xl:text-5xl font-extrabold  ">
                    {content.headingName}
                  </div>
                  <div className="flex flex-col gap-2  relative">
                    {/* <p className="  font-lato">{content.para}</p> */}
                    {Array.isArray(content.featuringData) &&
                      content.featuringData.length > 0 && (
                        <div>
                          <div className="flex flex-wrap gap-x-20 gap-y-2">
                            {content.featuringData.map((con, i) => (
                              <div key={i} className="flex gap-1 items-center">
                                <span className="text-2xl font-bold">
                                  {con.featureName}
                                </span>{" "}
                                <IoCheckmarkDoneCircle className="text-highlight_hover w-8 h-8" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* <Speaker webData={content.para} /> */}
                  </div>

                  <MyButton1
                    classDesign={
                      "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                    }
                    buttonLink={content.buttonLink}
                    buttonName={homeContent.homeButtonName}
                  />
                </div>
                <div
                  className=" absolute   flex items-center justify-center opacity-20 dark:opacity-70
                
                w-[18rem] md:w-[28rem] xl:w-[23rem]   
                bottom-[3rem] md:bottom-[20rem] lg:-bottom-5 xl:-bottom-2 2xl:-bottom-5 
                md:left-72 lg:left-52  
                ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#148938"
                      d="M38.6,-63.5C45.2,-62.9,42.5,-43,40.4,-29.1C38.3,-15.3,36.8,-7.7,41.1,2.5C45.4,12.6,55.5,25.3,57.8,39.4C60.1,53.5,54.4,69,43.5,75.7C32.6,82.4,16.3,80.3,5.9,70C-4.5,59.8,-8.9,41.5,-21.6,35.8C-34.3,30.1,-55.2,37,-64.9,33.2C-74.7,29.3,-73.2,14.6,-71.2,1.2C-69.2,-12.3,-66.6,-24.6,-61,-35.6C-55.4,-46.6,-46.7,-56.3,-36.1,-54.5C-25.4,-52.8,-12.7,-39.6,1.6,-42.4C16,-45.2,31.9,-64.1,38.6,-63.5Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div
                  className=" absolute flex items-center justify-center opacity-50 dark:opacity-100
                
                w-[15rem] 
                md:right-[28rem] lg:right-[18rem] xl:right-[23rem] 2xl:right-[30rem]  
                -top-5 
                ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#f49738"
                      d="M35.1,-58.2C48.6,-53.1,64.6,-49.8,75.6,-40.4C86.7,-31,92.9,-15.5,86.4,-3.8C79.9,8,60.7,16,52.1,29.8C43.6,43.6,45.7,63.15,38.8,72.7C31.9,82.1,15.9,81.5,5.7,71.6C-4.5,61.7,-9,42.5,-16.5,33.4C-24.1,24.3,-34.7,25.2,-47.4,21.3C-60.1,17.4,-74.9,8.7,-77.4,-1.4C-79.8,-11.5,-69.8,-23,-57.8,-28.2C-45.8,-33.3,-31.9,-32.2,-21.9,-39.3C-11.9,-46.3,-6,-61.7,2.4,-65.9C10.9,-70.2,21.7,-63.3,35.1,-58.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <HomePageBlob diffImages={content.image} />
              </>
            ) : (
              <>
                <HomePageBlob diffImages={content.image} />

                <div
                  className=" absolute flex items-center justify-center opacity-20  dark:opacity-70  
                  w-[20rem] sm:w-[28rem]  xl:w-[20rem]
                 right-10 sm:right-[20rem] lg:right-20  
                 bottom-24 sm:bottom-[20rem] lg:bottom-[1rem] xl:bottom-[1rem]
 ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#f49738"
                      d="M29.3,-44.7C40.9,-44.1,55.2,-42.1,62,-34.4C68.8,-26.7,68.2,-13.4,69.6,0.8C71,15,74.5,30,69.4,40.7C64.3,51.4,50.7,57.8,37.7,66.6C24.7,75.4,12.4,86.7,-1,88.5C-14.4,90.3,-28.9,82.6,-34,69.3C-39.1,55.9,-34.8,36.8,-43.8,24.3C-52.7,11.8,-74.8,5.9,-74.6,0.1C-74.4,-5.7,-51.9,-11.3,-42.2,-22.5C-32.5,-33.7,-35.7,-50.5,-30.8,-55C-25.9,-59.4,-12.9,-51.6,-2,-48.1C8.9,-44.6,17.8,-45.3,29.3,-44.7Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div
                  className="absolute  flex items-center justify-center opacity-50 dark:opacity-100
                
                 w-[15rem]  
                 md:left-[28rem] lg:left-[18rem] xl:left-[23rem] 2xl:left-[30rem]
                
                 -top-10
                 ">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#148938"
                      d="M27.4,-39.2C39.9,-40.2,57.4,-41.8,67,-35.3C76.6,-28.8,78.3,-14.4,70.9,-4.3C63.6,5.9,47.2,11.8,37.3,17.8C27.4,23.8,24.1,29.9,19,43.2C13.8,56.4,6.9,76.9,-0.6,77.9C-8.2,79,-16.3,60.7,-28.6,51.6C-40.9,42.5,-57.4,42.5,-66.3,35.5C-75.3,28.4,-76.7,14.2,-74.5,1.3C-72.3,-11.7,-66.5,-23.3,-60.1,-34.8C-53.6,-46.2,-46.6,-57.4,-36.5,-57.7C-26.4,-58,-13.2,-47.4,-2.9,-42.4C7.5,-37.4,14.9,-38.1,27.4,-39.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </div>

                <div className=" order-1 lg:order-2 flex flex-col z-10 items-end justify-center gap-5 w-[200%] ">
                  <div className=" text-4xl xl:text-5xl font-extrabold text-right  ">
                    {content.headingName}
                  </div>
                  <div className="flex flex-col gap-2  relative">
                    {Array.isArray(content.featuringData) &&
                      content.featuringData.length > 0 && (
                        <div>
                          <div className="flex  justify-end flex-wrap gap-x-20 gap-y-2">
                            {content.featuringData.map((con, i) => (
                              <div key={i} className="flex gap-1 items-center">
                                <span className="text-2xl font-bold">
                                  {con.featureName}
                                </span>{" "}
                                <IoCheckmarkDoneCircle className="text-highlight_hover w-8 h-8" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>
                  <MyButton1
                    classDesign={
                      "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                    }
                    buttonLink={content.buttonLink}
                    buttonName={homeContent.homeButtonName}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* <div>
        <h1 className="text-6xl font-extrabold mb-6 text-center ">
          Welcome You Here!
        </h1>
        <p className=" text-center mb-6 ">
          A warm welcome to our city! Discover the heart of India's central
          highlands. Explore ancient temples, lush landscapes, and bustling
          markets. Indulge in delectable local cuisine and experience the warmth
          of our people. Have a memorable stay!
        </p>
        <div className="flex flex-col gap-5 items-center justify-center ">
          <label
            htmlFor="attraction"
            className="font-bold font-pangaia text-2xl"
          >
            Select Attraction Type
          </label>
          <select
            className="px-3 gap-x-2 py-2 border  border-primary_text dark:border-dark_primary_text  dark:bg-shadow bg-dark_primary_text rounded-lg  focus:outline-none focus:border focus:border-highlight"
            select
            value={selectedOption}
            onChange={handleChange}
          >
            <option value="tourist_spots">Tourist Spots</option>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="hospitals">Hospitals</option>
            <option value="police_stations">Police Stations</option>
            {/* ))} 
          </select>
        </div>
      </div>
      {nearestAttractions && (
        <div className="flex flex-col gap-5 relative items-center justify-center py-5 ">
          <h1 className=" font-bold font-pangaia text-2xl">
            Nearest Attractions{" "}
          </h1>
          <div className="p-4 grid grid-cols-4 gap-9 text-lg ">
            {nearestAttractions.map((attraction) => (
              <div
                className="p-4 gap-x-5 relative flex items-center justify-between rounded-xl  shadow-custom-black  dark:shadow-custom-white   blogCards "
                key={attraction.name}
              >
                <div>
                  <h3 className=" text-xl capitalize font-playfair">
                    {attraction.name}
                  </h3>
                  <p>
                    <b> Distance:</b> {attraction.distance.toFixed(2)} km
                  </p>
                </div>

                <a href={attraction.link} target="_blank" rel="noreferrer">
                  <FaMapMarkerAlt className=" w-7 h-7" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Home;
