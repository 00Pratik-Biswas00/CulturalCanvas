import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import travelling from "../../assets/explorePlaces/travel.jpg";
import trip from "../../assets/explorePlaces/createTrip.jpg";
import money from "../../assets/explorePlaces/paisa.jpg";
import { switchLoginModalOpen } from "../../redux/slices/loginModalOpenSlice";
import MyButtons3 from "../../components/Buttons/MyButtons3";

const ExploreDiversity = () => {
  const user = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePredictionRedirect = () => {
    navigate("predict-budget");
  };
  const handleCreateTripRedirect = () => {
    if (user) {
      navigate("create-trip");
    } else {
      dispatch(switchLoginModalOpen(true));
    }
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <div className="flex flex-col items-center justify-center gap-3 py-3">
        <img src={travelling} className="h-[25rem]" />

        <h1 className="text-5xl tracking-wider font-extrabold font-gallient py-5 text-center ">
          Explore Rich Cultural Heritages and Traditions of India
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className={`backdrop-blur-lg bg-opacity-80 p-5 rounded-lg flex flex-col items-center shadow-custom-orange gap-5`}
          >
            <div className="flex flex-col">
              <img src={money} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-2xl tracking-wider font-bold text-center font-montserrat uppercase">
              No idea how much it will cost?{" "}
            </h2>
            <p className="">
              Planning a heritage tour in India can be exciting, but the cost
              can sometimes be a mystery. With our easy-to-use tool, you can
              quickly estimate the potential expenses for your trip. Simply
              enter your preferred source and destination, along with the
              duration of your stay. Our algorithm will provide you with a
              personalized cost estimate, taking into account factors such as
              transportation, accommodation, food, and attractions. <br />{" "}
              <b>
                Get started now and plan your dream Indian heritage tour with
                confidence!
              </b>
            </p>

            <MyButtons3
              buttonLink={handlePredictionRedirect}
              buttonName={"Predict Amount"}
              buttonIcon={<RiMoneyRupeeCircleFill />}
            />
          </div>

          {/* 2 */}

          <div
            className={`backdrop-blur-lg bg-opacity-80 p-5 rounded-lg flex flex-col items-center shadow-custom-orange gap-5`}
          >
            <div className="flex flex-col">
              <img src={trip} alt=".." className="w-full h-full rounded-md" />
            </div>
            <h2 className="text-2xl tracking-wider font-bold text-center font-montserrat uppercase">
              Want to make your own travel plans?{" "}
            </h2>
            <p className="">
              Planning a heritage tour in India can be overwhelming, but with
              our user-friendly tool, you can effortlessly create a customized
              itinerary tailored to your specific interests and budget. Simply
              input your desired destinations, the duration of your trip, and
              your preferred budget range. Our intelligent algorithm will
              generate a comprehensive plan, complete with carefully selected
              accommodations, transportation options, and must-see attractions.
              <br />{" "}
              <b>
                Embark on a journey of discovery with a personalized itinerary
                designed just for you.
              </b>
            </p>

            <MyButtons3
              buttonLink={handleCreateTripRedirect}
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
