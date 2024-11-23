// import React, { useState } from "react";
// import { dummyData } from "../../utils/constants";
// import { useNavigate } from "react-router-dom";
// import LoadMoreButton from "../../components/LoadMore/LoadMoreButton";

// const StateCultures = () => {
//   const { StateCulturesData } = dummyData;
//   const navigate = useNavigate();

//   const [visibleCount, setVisibleCount] = useState(6);
//   const isAllDisplayed = visibleCount >= StateCulturesData.length;

//   const openSingleState = () => {
//     navigate(`/culture-tradition/single-state`);
//   };

//   return (
//     <div>
//       <h1 className="text-6xl tracking-wider font-extrabold font-gallient pt-3 text-center ">
//         India's Cultural Odyssey: State-Wise🗺️
//       </h1>
//       <div className="text-primary_text dark:text-dark_primary_text flex flex-col py-8  ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 gap-y-14">
//           {dummyData.StateCulturesData.slice(0, visibleCount).map(
//             (content, index) => {
//               let shadowClass;
//               let borderClass;

//               if (index % 3 === 0) {
//                 shadowClass = "shadow-custom-orange ";
//                 borderClass = "border-highlight";
//               } else if (index % 3 === 1) {
//                 shadowClass = "shadow-custom-blue";
//                 borderClass = "border-secondary_text dark:border-background1";
//               } else if (index % 3 === 2) {
//                 shadowClass = "shadow-custom-green";
//                 borderClass = "border-highlight_hover ";
//               }

//               return (
//                 <div
//                   className={`backdrop-blur-lg bg-opacity-80  rounded-lg flex flex-col items-center gap-1`}
//                 >
//                   <button
//                     onClick={() => {
//                       navigate(`${content.individualPage}`);
//                     }}
//                     className="flex items-center justify-center "
//                   >
//                     <img
//                       src={content.stateImg}
//                       className="w-full h-full duration-500 transition-transform hover:scale-105 transform-cpu  "
//                     />
//                   </button>

//                   <div
//                     className={` ${borderClass} ${shadowClass} border-x-2 border-t-2 font-bold font-ubuntu px-5 py-2 relative flex items-center justify-center rounded-xl -bottom-5 `}
//                   >
//                     <p className="text-xl text-center">{content.stateName}</p>
//                   </div>
//                 </div>
//               );
//             }
//           )}
//         </div>

//         <div className="flex justify-center pt-20">
//           <LoadMoreButton
//             visibleCount={visibleCount}
//             isAllDisplayed={isAllDisplayed}
//             onClick={() =>
//               setVisibleCount((prev) => {
//                 if (prev + 6 >= dummyData.StateCulturesData.length) {
//                   return prev === dummyData.StateCulturesData.length
//                     ? 6
//                     : dummyData.StateCulturesData.length;
//                 }
//                 return prev + 6;
//               })
//             }
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StateCultures;

import React, { useState } from "react";
import { dummyData } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import LoadMoreButton from "../../components/LoadMore/LoadMoreButton";
import { useTranslation } from "react-i18next";

const StateCultures = () => {
  const { t } = useTranslation();
  const stateContent = t("StateCulturesData", { returnObjects: true });

  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] = useState(6);
  const isAllDisplayed = visibleCount >= stateContent.AllStatesName.length;

  return (
    <div>
      <h1 className="text-6xl tracking-wider font-extrabold font-gallient pt-3 text-center ">
        {stateContent.stateHeading}
      </h1>
      <div className="text-primary_text dark:text-dark_primary_text flex flex-col py-8  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 gap-y-14">
          {stateContent.AllStatesName.slice(0, visibleCount).map(
            (content, index) => {
              let shadowClass;
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
              }

              return (
                <div
                  className={`backdrop-blur-lg bg-opacity-80  rounded-lg flex flex-col items-center gap-1`}
                >
                  <button
                    onClick={() => {
                      navigate(`${content.individualPage}`);
                    }}
                    className="flex items-center justify-center "
                  >
                    <img
                      src={content.stateImg}
                      className="w-full h-full duration-500 transition-transform hover:scale-105 transform-cpu  "
                    />
                  </button>

                  <div
                    className={` ${borderClass} ${shadowClass} border-x-2 border-t-2 font-bold font-ubuntu px-5 py-2 relative flex items-center justify-center rounded-xl -bottom-5 `}
                  >
                    <p className="text-xl text-center">{content.stateName}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="flex justify-center pt-20">
          <LoadMoreButton
            visibleCount={visibleCount}
            isAllDisplayed={isAllDisplayed}
            onClick={() =>
              setVisibleCount((prev) => {
                if (prev + 6 >= dummyData.StateCulturesData.length) {
                  return prev === dummyData.StateCulturesData.length
                    ? 6
                    : dummyData.StateCulturesData.length;
                }
                return prev + 6;
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StateCultures;
