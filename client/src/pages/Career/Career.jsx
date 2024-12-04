import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/career/vlogCreator.png";
import MyButton1 from "../../components/Buttons/MyButton1";
const Career = () => {
  const { t } = useTranslation();
  const careerContent = t("CareerData", { returnObjects: true });

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-4 px-16 duration-300 min-h-screen">
      <div className="flex items-center tracking-widest justify-center py-4 text-6xl font-extrabold font-gallient">
        {careerContent.careerHeading} 📢
      </div>
      <div className="flex flex-col items-center justify-center gap-32">
        {careerContent.diffCareers.map((content, ind) => (
          <div key={ind} className="flex items-center justify-center gap-5 ">
            <div className="flex flex-col gap-5">
              <h1 className=" text-7xl font-extrabold">{content.jobTitle}</h1>

              <p>{content.jobDescription}</p>

              <div className="flex gap-5">
                <h1 className="rounded-3xl text-lg p-2 border border-primary_text dark:border-dark_primary_text">
                  🕒 {content.jobType}
                </h1>
                <h1 className="rounded-3xl text-lg p-2 border border-primary_text dark:border-dark_primary_text">
                  🤑 {content.jobSalary}
                </h1>
                <h1 className="rounded-3xl text-lg p-2 border border-primary_text dark:border-dark_primary_text">
                  📌 {content.jobLocation}
                </h1>
              </div>

              <MyButton1
                classDesign={
                  "bg-gradient-to-r from-[#193c70e9] to-[#1489386c] hover:to-[#174926]"
                }
                buttonLink={content.jobLink}
                buttonName={"Join Our Team"}
              />
            </div>
            <img src={content.jobImg} className=" w-[30rem] h-[30rem]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
