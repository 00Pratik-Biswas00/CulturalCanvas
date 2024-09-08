import React from "react";
import upImg from "../../assets/Heritage/up.png";
import { dummyData } from "../../utils/constants";

{
  /*  let shadowClass;
             let borderClass;

             if (index % 3 === 0) {
               shadowClass = "shadow-custom-orange ";
               borderClass = "border-highlight";
             } else if (index % 3 === 1) {
               shadowClass = "shadow-custom-blue";
               borderClass = "border-secondary_text dark:border-background1";
             } else if (index % 3 === 2) {
               shadowClass = "shadow-custom-green";
               borderClass = "border-highlight_hover ";
             } */
}

const SingleStateCulture = () => {
  const { SingleState } = dummyData;

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      {dummyData.SingleState.stateHistory.map((content, ind) => (
        <div key={ind} className="flex flex-col gap-5 mb-10">
          <h1 className="font-extrabold text-[50px] text-center">
            Immerse Yourself in {content.stateName}'s Traditions
          </h1>
          <div className="flex items-center justify-center gap-10">
            <img
              src={content.stateImg}
              alt={content.stateName}
              className="w-[500px] h-[500px]"
            />
            <div className="border-2 font-bold font-ubuntu px-5 py-2 relative flex items-center justify-center rounded-xl">
              <p className="text-xl leading-9">{content.stateHistory}</p>
            </div>
          </div>
        </div>
      ))}

      {dummyData.SingleState.languageModel.map((content, ind) => (
        <div key={ind} className="flex flex-col items-start gap-5 mb-10">
          <h1 className="font-extrabold text-[40px] font-playfair text-center">
            {content.heading}
          </h1>
          <div className="flex items-center justify-center gap-10">
            <img
              src={content.image}
              alt="Language & Architecture"
              className="w-[400px] h-[225px]"
            />
            <div className="border-2 font-bold font-ubuntu px-5 py-2 relative flex items-center justify-center rounded-xl">
              <p className="text-xl leading-9">{content.courseHistory}</p>
            </div>
          </div>
        </div>
      ))}

      {dummyData.SingleState.cuisineModel.map((content, ind) => (
        <div key={ind} className="flex flex-col items-start gap-5 mb-10">
          <h1 className="font-extrabold text-[40px] font-playfair text-center">
            {content.heading}
          </h1>
          <div className="flex items-center justify-center gap-10">
            <img
              src={content.image}
              alt="Cuisine"
              className="w-[400px] h-[225px]"
            />
            <div className="border-2 font-bold font-ubuntu px-5 py-2 relative flex items-center justify-center rounded-xl">
              <p className="text-xl leading-9">{content.cuisineDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SingleStateCulture;
