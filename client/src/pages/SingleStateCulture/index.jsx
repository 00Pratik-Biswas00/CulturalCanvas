import React, { useEffect } from "react";
import tajImg from "../../assets/culture/stateCultureBg.png";
import { IoIosLink } from "react-icons/io";
import i18next from "i18next";
import { dummyData } from "../../utils/constants";
import MyButton3 from "../../components/Buttons/MyButton3";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Speaker from "../../components/Settings/Speaker";
import { useInView } from "react-intersection-observer";

// const SingleStateCulture = ({
//   stateName,
//   greetingImg,
//   greetingName,
//   stateImg,
//   stateHistory,
//   stateHistoryVideo,
//   cuisineDetails,
//   cuisineCourse,
//   clothingImg,
//   clothingDetails,
//   languageImg,
//   languageDetails,
//   languageCourse,
//   artsDetails,
//   artsCourse,
// }) => {
//   const { t } = useTranslation();
//   const commonStaticNames = t("CommonStaticInfo", { returnObjects: true });
//   const currentLanguage = i18next.language;

//   const { SingleState } = dummyData;
//   const navigate = useNavigate();

//   return (
//     <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text duration-300">
//       <div
//         style={{ backgroundImage: `url(${tajImg})` }}
//         className="relative bg-center bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center "
//       >
//         <div className="flex gap-16 items-center justify-center">
//           {/* {stateName.map((word, wordIndex) => (
//             <div
//               key={wordIndex}
//               className="flex relative z-20 gap-5 justify-center items-center h-[35vh] text-dark_primary_text"
//             >
//               {word.split("").map((letter, letterIndex) => (
//                 <h1
//                   key={letterIndex}
//                   className={`text-7xl bg-black px-2 pb-2 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase ${
//                     letterIndex % 2 === 0 ? "rotate-6" : "-rotate-6"
//                   }`}
//                 >
//                   {letter}
//                 </h1>
//               ))}
//             </div>
//           ))} */}

//           {currentLanguage === "en" ? (
//             stateName.map((word, wordIndex) => (
//               <div
//                 key={wordIndex}
//                 className="flex relative z-20 gap-5 justify-center items-center h-[35vh] text-dark_primary_text"
//               >
//                 {word.split("").map((letter, letterIndex) => (
//                   <h1
//                     key={letterIndex}
//                     className={`text-7xl bg-black px-2 pb-2 mb-5 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase ${
//                       letterIndex % 2 === 0 ? "rotate-6" : "-rotate-6"
//                     }`}
//                   >
//                     {letter}
//                   </h1>
//                 ))}
//               </div>
//             ))
//           ) : (
//             <div className="flex relative z-20 gap-5 justify-center items-center h-[35vh] text-dark_primary_text">
//               <h1 className="text-7xl bg-black px-5 pb-4 mb-5 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase">
//                 {stateName.join(" ")}
//               </h1>
//             </div>
//           )}
//         </div>

//         {/* SVG Curve */}
//         <svg
//           className="w-full "
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1440 300"
//         >
//           <path
//             className=" fill-current text-[#fff] dark:text-dark_background1"
//             d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,96C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//           ></path>
//         </svg>

//         {/* Greeting */}

//         <div className=" absolute flex flex-col items-center justify-center px-5 py-2  gap-5 border border-b-0 border-dark_background1 dark:border-background1 bg-background1 dark:bg-dark_background1 rounded-xl mt-40 ">
//           <h1 className=" font-playfair text-3xl font-extrabold">
//             {commonStaticNames.ourGreeting}
//           </h1>
//           <img src={greetingImg} className="w-80 rounded-xl" />

//           <MyButton3
//             classDesign={
//               "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
//             }
//             buttonName={`${greetingName}`}
//             onClick={() => {
//               navigate(`/culture-tradition/greetings`);
//             }}
//             buttonIcon={<IoIosLink />}
//           />
//         </div>
//       </div>

//       {/* History */}
//       <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
//         <div className="flex flex-col items-center justify-center gap-4">
//           <h1 className=" font-extrabold text-5xl  ">
//             {commonStaticNames.briefHistory}
//           </h1>
//           <p className=" opacity-70 text-lg">
//             {" "}
//             {commonStaticNames.briefHistoryPara}{" "}
//           </p>
//         </div>

//         <div className="relative flex gap-5 items-center ">
//           <img
//             src={stateImg}
//             alt="state image"
//             className="  w-72 h-72 object-cover "
//           />

//           <div className=" flex flex-col gap-3">
//             <div className=" relative">
//               {" "}
//               <p className="text-justify text-lg">{stateHistory}</p>
//               <Speaker webData={stateHistory} />
//             </div>
//             <div className="flex flex-col items-start justify-center">
//               <a
//                 className="bg-highlight hover:bg-highlight_dark duration-500 px-3 py-1 rounded-xl font-bold"
//                 href={stateHistoryVideo}
//                 target="_blank"
//               >
//                 {commonStaticNames.buttonWantToKnowMore} 🔗
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Cuisines */}
//       <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
//         <div className="flex flex-col items-center justify-center gap-4">
//           <h1 className=" font-extrabold text-5xl  ">
//             {commonStaticNames.cuisines}
//           </h1>
//           <p className=" opacity-70 text-lg">
//             {" "}
//             {commonStaticNames.cuisinesPara}{" "}
//           </p>
//         </div>

//         <div className="grid grid-cols-4 gap-5">
//           {cuisineDetails.map((content, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center gap-2"
//             >
//               <img src={content.cuisineImage} className="w-80 rounded-xl" />
//               <p className=" text-xl font-montserrat">{content.cuisineName}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-center gap-10">
//           <MyButton3
//             classDesign={
//               "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
//             }
//             buttonName={commonStaticNames.buttonWantToKnowMore}
//             onClick={() => {
//               navigate(`/culture-tradition/cuisines`);
//             }}
//             buttonIcon={<IoIosLink />}
//           />
//           <MyButton3
//             classDesign={
//               "before:bg-highlight bg-highlight_dark text-dark_primary_text "
//             }
//             buttonName={commonStaticNames.buttonWantToCook}
//             onClick={() => {
//               navigate(`${cuisineCourse}`);
//             }}
//             buttonIcon={<IoIosLink />}
//           />
//         </div>
//       </div>

//       {/* Clothing */}
//       <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
//         <div className="flex flex-col items-center justify-center gap-4">
//           <h1 className=" font-extrabold text-5xl  ">
//             {commonStaticNames.clothings}
//           </h1>
//           <p className=" opacity-70 text-lg">
//             {" "}
//             {commonStaticNames.clothingPara}{" "}
//           </p>
//         </div>

//         <div className="relative flex gap-5 items-center">
//           <div className=" flex flex-col gap-3 relative">
//             <p className="text-justify text-lg"> {clothingDetails} </p>
//             <Speaker webData={clothingDetails} />
//           </div>

//           <img
//             src={clothingImg}
//             alt="West Bengal"
//             className=" w-64 h-64 object-cover "
//           />
//         </div>
//       </div>

//       {/* Language */}
//       <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
//         <div className="flex flex-col items-center justify-center gap-4">
//           <h1 className=" font-extrabold text-5xl  ">
//             {commonStaticNames.languages}
//           </h1>
//           <p className=" opacity-70 text-lg">
//             {" "}
//             {commonStaticNames.languagesPara}{" "}
//           </p>
//         </div>

//         <div className="relative flex gap-5 items-center">
//           <img
//             src={languageImg}
//             alt="West Bengal"
//             className=" w-64 h-64 object-cover "
//           />

//           <div className=" flex flex-col gap-3 relative">
//             <p className="text-justify text-lg"> {languageDetails} </p>
//             <Speaker webData={languageDetails} />
//           </div>
//         </div>

//         <div className="flex items-center justify-center gap-10">
//           <MyButton3
//             classDesign={
//               "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
//             }
//             buttonName={commonStaticNames.buttonWantToKnowMore}
//             onClick={() => {
//               navigate(`/culture-tradition/languages`);
//             }}
//             buttonIcon={<IoIosLink />}
//           />
//           <MyButton3
//             classDesign={
//               "before:bg-highlight bg-highlight_dark text-dark_primary_text "
//             }
//             buttonName={commonStaticNames.buttonWantToCook}
//             onClick={() => {
//               navigate(`${languageCourse}`);
//             }}
//             buttonIcon={<IoIosLink />}
//           />
//         </div>
//       </div>

//       {/* arts and crafts */}
//       <div className="flex flex-col items-center justify-center px-16 py-10 gap-10">
//         <div className="flex flex-col items-center justify-center gap-4">
//           <h1 className=" font-extrabold text-5xl  ">
//             {commonStaticNames.artsCrafts}
//           </h1>
//           <p className=" opacity-70 text-lg">
//             {" "}
//             {commonStaticNames.artsCraftsPara}
//           </p>
//         </div>

//         <div className="grid grid-cols-4 gap-5">
//           {artsDetails.map((content, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center gap-2"
//             >
//               <img src={content.cuisineImage} className="w-80 rounded-xl" />
//               <p className=" text-xl font-montserrat">{content.cuisineName}</p>
//             </div>
//           ))}
//         </div>

//         <div className="flex items-center justify-center gap-10">
//           <MyButton3
//             classDesign={
//               "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
//             }
//             buttonName={commonStaticNames.buttonWantToKnowMore}
//             onClick={() => {
//               navigate(`/culture-tradition/cuisines`);
//             }}
//             buttonIcon={<IoIosLink />}
//           />
//           <MyButton3
//             classDesign={
//               "before:bg-highlight bg-highlight_dark text-dark_primary_text "
//             }
//             buttonName={commonStaticNames.buttonWantToCook}
//             onClick={() => {
//               navigate(`${artsCourse}`);
//             }}
//             buttonIcon={<IoIosLink />}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

const SingleStateCulture = ({
  stateName,
  greetingImg,
  greetingName,
  stateImg,
  stateHistory,
  stateHistoryVideo,
  cuisineDetails,
  cuisineCourse,
  clothingImg,
  clothingDetails,
  languageImg,
  languageDetails,
  languageCourse,
  artsDetails,
  artsCourse,
}) => {
  const { t } = useTranslation();
  const commonStaticNames = t("CommonStaticInfo", { returnObjects: true });
  const currentLanguage = i18next.language;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text duration-300"
    >
      <motion.div
        variants={fadeInUp}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${stateImg})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="absolute inset-0 border-[20px] border-white opacity-20"></div>
        <div className="flex gap-16 items-center justify-center z-10">
          {currentLanguage === "en" ? (
            stateName.map((word, wordIndex) => (
              <motion.div
                key={wordIndex}
                className="flex relative z-20 gap-5 justify-center items-center text-dark_primary_text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: wordIndex * 0.2 }}
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.h1
                    key={letterIndex}
                    className={`text-7xl bg-black bg-opacity-70 px-2 pb-2 mb-5 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase `}
                    initial={{ rotate: letterIndex % 2 === 0 ? -10 : 10 }}
                    // animate={{ rotate: 0 }}
                    transition={{ duration: 0.5, delay: letterIndex * 0.1 }}
                  >
                    {letter}
                  </motion.h1>
                ))}
              </motion.div>
            ))
          ) : (
            <motion.div
              className="flex relative z-20 gap-5 justify-center items-center text-dark_primary_text"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-7xl bg-black bg-opacity-70 px-5 pb-4 mb-5 rounded-xl font-extrabold text-dark_primary_text font-pangaia uppercase">
                {stateName.join(" ")}
              </h1>
            </motion.div>
          )}
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-background1 dark:from-dark_background1 to-transparent"></div>
        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </motion.div>

      {/* Greeting */}
      <ScrollAnimationSection>
        <div className="flex flex-col items-center justify-center px-5 py-10 gap-5 bg-background1 dark:bg-dark_background1 rounded-xl -mt-20 shadow-2xl mx-auto max-w-2xl">
          <h1 className="font-playfair text-3xl font-extrabold">
            {commonStaticNames.ourGreeting}
          </h1>
          <motion.img
            src={greetingImg}
            className="w-full max-w-md rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <MyButton3
            classDesign="before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text hover:scale-105 transition-transform duration-300"
            buttonName={`${greetingName}`}
            onClick={() => navigate(`/culture-tradition/greetings`)}
            buttonIcon={<IoIosLink />}
          />
        </div>
      </ScrollAnimationSection>

      {/* History */}
      <ScrollAnimationSection>
        <div className="flex flex-col items-center justify-center px-16 py-20 gap-10 bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-extrabold text-5xl">
              {commonStaticNames.briefHistory}
            </h1>
            <p className="opacity-70 text-lg text-center max-w-2xl">
              {commonStaticNames.briefHistoryPara}
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row gap-20 items-center">
            <motion.img
              src={stateImg}
              alt="state image"
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex flex-col gap-5 max-w-2xl">
              <div className="relative">
                <p className="text-justify text-lg leading-relaxed">
                  {stateHistory}
                </p>
                <Speaker webData={stateHistory} />
              </div>
              <div className="flex items-center justify-center">
                <a
                  className="bg-highlight hover:bg-highlight_dark duration-500 px-5 py-2 rounded-3xl font-bold text-center hover:scale-105 transition-transform"
                  href={stateHistoryVideo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {commonStaticNames.buttonWantToKnowMore} 🔗
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimationSection>

      {/* Cuisines */}
      <ScrollAnimationSection>
        <div className="flex flex-col items-center justify-center px-16 py-20 gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-extrabold text-5xl">
              {commonStaticNames.cuisines}
            </h1>
            <p className="opacity-70 text-lg text-center max-w-2xl">
              {commonStaticNames.cuisinesPara}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cuisineDetails.map((content, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={content.cuisineImage}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-xl font-montserrat font-semibold text-center">
                  {content.cuisineName}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-10 mt-10">
            <MyButton3
              classDesign="before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text hover:scale-105 transition-transform duration-300"
              buttonName={commonStaticNames.buttonWantToKnowMore}
              onClick={() => navigate(`/culture-tradition/cuisines`)}
              buttonIcon={<IoIosLink />}
            />
            <MyButton3
              classDesign="before:bg-highlight bg-highlight_dark text-dark_primary_text hover:scale-105 transition-transform duration-300"
              buttonName={commonStaticNames.buttonWantToCook}
              onClick={() => navigate(`${cuisineCourse}`)}
              buttonIcon={<IoIosLink />}
            />
          </div>
        </div>
      </ScrollAnimationSection>

      {/* Clothing */}
      <ScrollAnimationSection>
        <div className="flex flex-col items-center justify-center px-16 py-20 gap-10 bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-extrabold text-5xl">
              {commonStaticNames.clothings}
            </h1>
            <p className="opacity-70 text-lg text-center max-w-2xl">
              {commonStaticNames.clothingPara}
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row gap-10 items-center">
            <div className="flex flex-col gap-3 relative max-w-2xl">
              <p className="text-justify text-lg leading-relaxed">
                {clothingDetails}
              </p>
              <Speaker webData={clothingDetails} />
            </div>

            <motion.img
              src={clothingImg}
              alt="Traditional Clothing"
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </ScrollAnimationSection>

      {/* Language */}
      <ScrollAnimationSection>
        <div className="flex flex-col items-center justify-center px-16 py-20 gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-extrabold text-5xl">
              {commonStaticNames.languages}
            </h1>
            <p className="opacity-70 text-lg text-center max-w-2xl">
              {commonStaticNames.languagesPara}
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row gap-20 items-center">
            <motion.img
              src={languageImg}
              alt="Language"
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            <div className="flex flex-col gap-3 relative max-w-2xl">
              <p className="text-justify text-lg leading-relaxed">
                {languageDetails}
              </p>
              <Speaker webData={languageDetails} />
            </div>
          </div>

          <div className="flex items-center justify-center gap-10 mt-10">
            <MyButton3
              classDesign="before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text hover:scale-105 transition-transform duration-300"
              buttonName={commonStaticNames.buttonWantToKnowMore}
              onClick={() => navigate(`/culture-tradition/languages`)}
              buttonIcon={<IoIosLink />}
            />
            <MyButton3
              classDesign="before:bg-highlight bg-highlight_dark text-dark_primary_text hover:scale-105 transition-transform duration-300"
              buttonName={commonStaticNames.buttonWantToLearn}
              onClick={() => navigate(`${languageCourse}`)}
              buttonIcon={<IoIosLink />}
            />
          </div>
        </div>
      </ScrollAnimationSection>

      {/* Arts and Crafts */}
      <ScrollAnimationSection>
        <div className="flex flex-col items-center justify-center px-16 py-20 gap-10 bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="font-extrabold text-5xl">
              {commonStaticNames.artsCrafts}
            </h1>
            <p className="opacity-70 text-lg text-center max-w-2xl">
              {commonStaticNames.artsCraftsPara}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {artsDetails.map((content, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center gap-3 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={content.artImage}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-xl font-montserrat font-semibold text-center">
                  {content.artName}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-10 mt-10">
            <MyButton3
              classDesign="before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text hover:scale-105 transition-transform duration-300"
              buttonName={commonStaticNames.buttonWantToKnowMore}
              onClick={() => navigate(`/culture-tradition/arts-crafts`)}
              buttonIcon={<IoIosLink />}
            />
            <MyButton3
              classDesign="before:bg-highlight bg-highlight_dark text-dark_primary_text hover:scale-105 transition-transform duration-300"
              buttonName={commonStaticNames.buttonWantToLearn}
              onClick={() => navigate(`${artsCourse}`)}
              buttonIcon={<IoIosLink />}
            />
          </div>
        </div>
      </ScrollAnimationSection>
    </motion.section>
  );
};

const ScrollAnimationSection = ({ children }) => {
  const { ref, controls } = useScrollAnimation();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default SingleStateCulture;
