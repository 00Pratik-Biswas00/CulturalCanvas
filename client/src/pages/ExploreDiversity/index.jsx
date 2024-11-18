import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import travelling from "../../assets/explorePlaces/exploreDiversity.png";
import trip from "../../assets/explorePlaces/createTripPoster.png";
import money from "../../assets/explorePlaces/predictPoster.png";
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
            className={` p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5 `}
          >
            <div className="flex flex-col">
              <img src={money} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-3xl font-extrabold text-center uppercase">
              No idea how much it will cost?{" "}
            </h2>
            <p className="">
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

          {/* 2 */}

          <div
            className={` p-5 rounded-lg flex flex-col items-center shadow-lg shadow-gray-400 gap-5`}
          >
            <div className="flex flex-col">
              <img src={trip} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-3xl font-extrabold text-center uppercase">
              Want personalized travel plans?{" "}
            </h2>
            <p className="">
              Planning a heritage tour in India can be overwhelming, but with
              our user-friendly tool, you can effortlessly create a customized
              itinerary tailored to your specific interests and budget.
              <br />
              <br />
              <b>
                <em>
                  Embark on a journey of discovery with a personalized itinerary
                  designed just for you.
                </em>
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
        </div>
      </div>
    </section>
  );
};

export default ExploreDiversity;
