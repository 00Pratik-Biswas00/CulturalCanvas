import React from "react";
import img1 from "../../assets/career/blogWriter.png";
import MyButton4 from "../../components/Buttons/MyButton4";
const BlogContest = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-8 px-16 duration-300 flex flex-col gap-8 min-h-screen">
      {" "}
      {/* Header Section */}
      <div className=" flex justify-evenly">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold">
              Weekly Blog Writing Competition
            </h1>
            <p className=" font-playfair">
              Test your knowledge with our weekly content writing challenge!
            </p>
          </div>
          {/* Guidelines Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-montserrat ">Guidelines</h2>
            <ul className="list-disc list-inside ">
              <li>Word Count: 1000-1200 words</li>
              <li>Format: Google Docs link with public view access</li>
              <li>One entry per person. </li>
              <li>Duration: 1 day </li>

              <li>
                {" "}
                Include your Name, Contact Information, Google Docs link, active
                social media account link and a brief bio in the mail body
              </li>
            </ul>
          </div>

          {/* Prizes Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-montserrat ">Prizes</h2>
            <ul className="list-disc list-inside ">
              <li>1st prize: 🪙80 coins</li>
              <li>2nd prize: 🪙60 coins</li>
              <li>3rd prize: 🪙40 coins</li>
              <li>4th prize: 🪙20 coins</li>
              <li>5th prize: 🪙10 coins</li>
            </ul>
          </div>
        </div>
        <img src={img1} className=" w-[28rem] h-[28rem]" />
      </div>
      {/* Start Quiz Section */}
      <div className=" flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-8">
          <h1 className=" text-center text-3xl font-semibold">
            -- Week:1 -{">"} Content Writing Topic --
          </h1>
          <p className=" text-center text-4xl font-playfair font-extrabold">
            "North Kolkata: The Heart of All Bengalis"
          </p>
        </div>

        <a
          href={
            "mailto:messi10.pratikbiswas@gmail.com?subject=Submit%20Your%20Blog%20Here!&body=Include your Name, Contact Information, Google Docs link, active social media account link and a brief bio in this mail body."
          }
          target="_blank"
          rel="noreferrer"
        >
          <MyButton4
            classDesign={
              "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 "
            }
            buttonName={"Submit Content"}
          />
        </a>
      </div>
      {/* Quiz Dashboard Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-montserrat ">
          Top 5 participants of Week-1
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Pratik Biswas</h3>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Rank</h3>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold underline text-blue-400 hover:text-blue-950"
            >
              Social Media Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContest;
