import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img1 from "../../assets/store/dhokra.png";
import img2 from "../../assets/store/dhokra2.png";
import img3 from "../../assets/store/dhokra3.png";
import ReactPlayer from "react-player";
import car1 from "../../assets/store/a.mp4";
import MyButton2 from "../../components/Buttons/MyButton2";
import MyButton4 from "../../components/Buttons/MyButton4";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql/product";

import { use } from "react";
import pbImg from "../../assets/store/pb.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "../../style_swiper.css";
import { EffectCube, Pagination } from "swiper/modules";
import { RiExternalLinkLine } from "react-icons/ri";

const arrayName = [
  {
    image: img2,
  },
  {
    image: img1,
  },

  {
    image: img3,
  },
];

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id },
  });
  useEffect(() => {
    if (data) {
      setProduct(data.getProduct);
    }
  }, [data]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(product);
  return (
    <div>
      <div className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-4 px-16 duration-300 min-h-screen">
        {/* Product Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-4 mb-6">
          <h1 className="text-5xl font-gallient font-bold py-3">
            {product?.name}
          </h1>
          <p className=" font-pangaia">✨Category: {product?.category}</p>
        </div>

        {/* Product Image and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* <div className=" flex flex-col items-center justify-center">
            {product?.image ? (
              <img
                src={product?.image?.url}
                alt={product?.name}
                className="rounded-2xl duration-700 hover:shadow-xl w-[35rem] h-[35rem] "
              />
            ) : (
              <div className="bg-gray-200 rounded-lg shadow-lg h-64 flex items-center justify-center">
                <p className="">No Image Available</p>
              </div>
            )}
          </div> */}

          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            speed={500}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            {arrayName.map((content, index) => (
              <SwiperSlide key={index}>
                <div
                  // key={index}
                  style={{ backgroundImage: `url(${content.image})` }}
                  className="w-[100%] h-[100%] bg-cover bg-center bg-no-repeat relative flex justify-end items-end "
                >
                  <div className="absolute inset-0  opacity-50 rounded-[20px]"></div>
                  {/* <img src={content.sImg} /> */}
                  {/* <a
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    className=" bg-dark_secondary_text hover:bg-black  opacity-40 px-5 py-2 rounded-3xl text-xl mr-2 mb-2 "
                  >
                    <span className="text-dark_primary_text font-extrabold flex  items-center justify-center gap-2">
                      {" "}
                      {content.sName} <RiExternalLinkLine />
                    </span>
                  </a> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col ">
            <label className=" text-lg font-montserrat mb-3">
              Product Description:{" "}
            </label>
            <p className=" font-playfair  mb-4">{product?.description}</p>

            <label className=" text-lg font-montserrat mb-3">
              Cultural significance:{" "}
            </label>
            <p className=" font-playfair ">{product?.uniqueFeature}</p>
            {product?.materialDetails?.length > 0 && (
              <div className="">
                <h2 className="text-xl font-bold my-3 font-playfair">
                  Material Details
                </h2>
                <ul className="space-y-2">
                  {product?.materialDetails.map((material, index) => (
                    <li key={index} className=" flex items-start gap-1 p-1">
                      <h3 className=" font-bold">{material.name}: </h3>
                      <p className=" capitalize"> {material.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="bg-background1 dark:bg-dark_background1 py-7 px-16 flex flex-col items-center justify-center w-full h-full ">
          <h1 className="font-bold font-gallient text-5xl tracking-wider pt-2 pb-6">
            Behind the story of Khadi Kurti
          </h1>
          <div className="flex flex-col items-center justify-center w-full h-full m-auto">
            <ReactPlayer
              url={product?.video?.Location}
              width="85%"
              height="85%"
              playing={false}
              controls
              // config={{
              //   file: {
              //     attributes: { controlsList: "nodownload" },
              //   },
              // }}
            />
          </div>
        </div>

        {/* Material Details */}

        <div className=" flex flex-col items-center justify-center gap-5">
          <div className="grid grid-cols-3 gap-5">
            <p className=" font-bold font-pangaia rounded-xl text-xl p-5 border bg-background2 flex items-center justify-center ">
              Quantity: {product?.quantity}
            </p>
            <p className=" font-bold font-pangaia rounded-xl text-xl p-5 border bg-background2 flex items-center justify-center">
              City: {product?.city || "Raipur"}
            </p>
            <p className="font-bold font-pangaia rounded-xl text-xl p-5 border bg-background2 flex items-center justify-center">
              Price: ${product?.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <MyButton4
              classDesign={
                "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 "
              }
              buttonName={"Buy Now"}
            />

            <sapn className="text-lg font-semibold">or</sapn>

            <MyButton4
              classDesign={
                "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 "
              }
              buttonName={"Buy Physically (Contact Seller)"}
            />
          </div>
        </div>

        {/* Reviews */}
        {product?.reviews?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 font-playfair">Reviews</h2>
            <ul className="space-y-6">
              {product?.reviews.map((review, index) => (
                <div className="p-4 border rounded-lg shadow hover:shadow-xl transition flex items-center gap-5  ">
                  <img
                    src={img1}
                    className=" rounded-full w-20 h-20 border shadow-xl "
                  />
                  <li key={index} className="">
                    <p className="">{review.review}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm ">
                        Rating: {review.rating}/5
                      </span>
                      <span className="text-sm text-gray-400">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}

        {/* Seller Details */}
        {product?.seller && (
          <div className="mt-8 border-t pt-4">
            <h2 className="text-lg font-bold mb-2 font-playfair">
              Seller's Information
            </h2>
            <div className="p-4 border rounded-lg shadow hover:shadow-xl transition flex items-start gap-5  ">
              <img
                src={pbImg}
                className=" rounded-full w-20 h-20 border shadow-xl "
              />
              <div className="flex flex-col gap-2">
                <p className="font-montserrat text-xl">Pratik Biswas</p>
                <div className=" flex w-full gap-5">
                  <p className=" font-playfair w-[75%]">
                    I'm Pratik Biswas, a B.Tech. (CSE-AIML) student, thrives on
                    solving problems through code. Passionate about frontend and
                    backend development (actively learning backend!), I love
                    collaborating with friends to brainstorm ideas and build
                    projects. Currently exploring integrating machine learning
                    models into web apps and creating AI-powered human-centric
                    platforms. Beyond tech, I find creative expression through
                    sketching and content writing and enjoy sharing knowledge
                    through teaching.
                  </p>
                  <ReactPlayer
                    url={car1}
                    width="40%"
                    height="40%"
                    playing={false}
                    controls
                    // config={{
                    //   file: {
                    //     attributes: { controlsList: "nodownload" },
                    //   },
                    // }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;

// Sample product data for testing
const sampleProducts = [
  {
    name: "Khadi Kurti",
    description: "A beautifully handcrafted vase with intricate designs.",
    uniqueFeature: "Made from eco-friendly materials.",
    materialDetails: [
      { name: "Clay", description: "High-quality natural clay." },
      { name: "Paint", description: "Non-toxic and durable paint." },
    ],
    image: img1,
    price: 49.99,
    category: "Handicrafts",
    quantity: 10,
    city: "Kolkata",
    seller: "601c5f2b8e621e23d8d12345",
    reviews: [
      {
        reviewer: "601c5f2b8e621e23d8d54321",
        review: "Amazing craftsmanship!",
        rating: 5,
        createdAt: "2023-12-01T12:00:00Z",
      },
      {
        reviewer: "601c5f2b8e621e23d8d67890",
        review: "Good value for money.",
        rating: 4,
        createdAt: "2023-12-02T14:00:00Z",
      },
    ],
  },
];

// Usage example in a parent component
// <SingleProduct products={sampleProducts} />
