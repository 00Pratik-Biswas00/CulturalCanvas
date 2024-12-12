import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import travelling from "../../assets/explorePlaces/exploreDiversity.png";
import trip from "../../assets/explorePlaces/createTripPoster.png";
import money from "../../assets/explorePlaces/predictPoster.png";
import story from "../../assets/explorePlaces/story.png";
import rag from "../../assets/explorePlaces/summary.png";
import nearAttraction from "../../assets/explorePlaces/nearAt.png";
import { switchLoginModalOpen } from "../../redux/slices/loginModalOpenSlice";
import MyButton3 from "../../components/Buttons/MyButton3";

const ExploreDiversity = () => {
  const user = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateTripRedirect = () => {
    if (user) {
      navigate("create-trip");
    } else {
      dispatch(switchLoginModalOpen(true));
    }
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 pb-10 px-16 duration-300">
      <div className="flex flex-col items-center justify-center gap-3">
        <img src={travelling} className=" h-[60%] w-[60%] " />

        <h1 className="text-5xl tracking-wider font-extrabold font-gallient pt-7 pb-14 text-center ">
          Explore Rich Cultural Heritages and Traditions of India
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className={` p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5`}
          >
            <div className="flex flex-col">
              <img src={trip} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-3xl font-extrabold text-center uppercase">
              Want personalized travel plans?{" "}
            </h2>
            <p className=" text-center">
              Tired of generic travel itineraries? Let us curate a personalized
              travel experience just for you. From exploring hidden gems to
              indulging in local cuisine, we've got you covered.
              <br />
              <br />
              <b>
                <em>Your dream vacation, personalized.</em>
              </b>
            </p>

            <MyButton3
              classDesign={
                "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
              }
              onClick={() => {
                if (user) {
                  navigate("create-trip");
                } else {
                  dispatch(switchLoginModalOpen(true));
                }
              }}
              buttonName={"Create Trip"}
              buttonIcon={<FaPlus />}
            />
          </div>

          <div
            className={` p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5 `}
          >
            <div className="flex flex-col">
              <img src={story} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-3xl font-extrabold text-center uppercase">
              Image To Story Telling{" "}
            </h2>
            <p className=" text-center">
              Transform your images into captivating stories. Our AI-powered
              tool can analyze your photos, identify key moments, and generate
              engaging narratives. <br /> <br />{" "}
              <em>
                <b>Your photos, your stories.</b>
              </em>
            </p>

            <MyButton3
              classDesign={
                "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
              }
              onClick={() => {
                navigate(`story-telling`);
              }}
              buttonName={"Story Telling"}
              buttonIcon={<RiMoneyRupeeCircleFill />}
            />
          </div>

          <div
            className={` p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5 `}
          >
            <div className="flex flex-col">
              <img src={money} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-3xl font-extrabold text-center uppercase">
              No idea how much it will cost?{" "}
            </h2>
            <p className=" text-center">
              Planning a heritage tour in India can be exciting, but the cost
              can sometimes be a mystery. With our easy-to-use tool, you can
              quickly estimate the potential expenses for your trip. <br />{" "}
              <br />{" "}
              <em>
                <b>
                  Get started now and plan your dream Indian heritage tour with
                  confidence!
                </b>
              </em>
            </p>

            <MyButton3
              classDesign={
                "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
              }
              onClick={() => {
                navigate(`predict-budget`);
              }}
              buttonName={"Predict Budget"}
              buttonIcon={<RiMoneyRupeeCircleFill />}
            />
          </div>

          {/* <div
            className={` p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5 `}
          >
            <div className="flex flex-col">
              <img
                src={nearAttraction}
                alt=".."
                className="w-full h-full rounded-md"
              />
            </div>
            <h2 className="text-3xl font-extrabold text-center uppercase">
              Want to know what is near to you?{" "}
            </h2>
            <p className=" text-center">
              Discover the world around you with our location-based search. Find
              nearby restaurants, shops, and attractions. <br /> <br />{" "}
              <em>
                <b>Your local guide, always at your fingertips.</b>
              </em>
            </p>

            <MyButton3
              classDesign={
                "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
              }
              onClick={() => {
                navigate(`nearest-attractions`);
              }}
              buttonName={"Nearest Attractions"}
              buttonIcon={<RiMoneyRupeeCircleFill />}
            />
          </div> */}

          <div
            className={` p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5 `}
          >
            <div className="flex flex-col">
              <img src={rag} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-3xl font-extrabold text-center uppercase">
              RAG Manual Summary{" "}
            </h2>
            <p className=" text-center">
              Simplify your manual reading experience with our RAG summaries. We
              condense complex manuals into easy-to-understand summaries. <br />{" "}
              <br />{" "}
              <em>
                <b>Your manual, simplified.</b>
              </em>
            </p>

            <MyButton3
              classDesign={
                "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
              }
              onClick={() => {
                navigate(`rag-manual-summary`);
              }}
              buttonName={"RAG Manual Summary"}
              buttonIcon={<RiMoneyRupeeCircleFill />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreDiversity;
