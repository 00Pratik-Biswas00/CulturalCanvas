import React from "react";
import img1 from "../../assets/career/admins.png";
import MyButton4 from "../../components/Buttons/MyButton4";
const QuizContest = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text  py-8 px-16 duration-300 flex flex-col gap-8 min-h-screen">
      {" "}
      {/* Header Section */}
      <div className=" flex justify-evenly">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold">Weekly Cultural Quiz</h1>
            <p className=" font-playfair">
              Test your knowledge with our weekly quiz challenge!
            </p>
          </div>
          {/* Guidelines Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-montserrat ">Guidelines</h2>
            <ul className="list-disc list-inside ">
              <li>Each quiz consists of 10 questions.</li>
              <li>You have 15 minutes to complete the quiz.</li>
              <li>Ensure a stable internet connection before starting.</li>
              <li>No negative marking for wrong answers.</li>
            </ul>
          </div>

          {/* Prizes Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-montserrat ">Prizes</h2>
            <ul className="list-disc list-inside ">
              <li>1st prize: 🪙50 coins</li>
              <li>2nd prize: 🪙30 coins</li>
              <li>3rd prize: 🪙20 coins</li>
            </ul>
          </div>
        </div>
        <img src={img1} className=" w-[28rem] h-[28rem]" />
      </div>
      {/* Start Quiz Section */}
      <div className=" flex items-center justify-center">
        <MyButton4
          bType={"submit"}
          classDesign={
            "bg-highlight before:bg-highlight_dark  text-dark_primary_text py-1 "
          }
          buttonName={"  Start Quiz"}
        />
      </div>
      {/* Quiz Dashboard Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-montserrat ">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Upcoming Quiz</h3>
            <p className="text-sm text-gray-500">Starts in: 3 days</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Last Week's Quiz</h3>
            <p className="text-sm text-gray-500">Participants: 500</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg text-center">
            <h3 className="text-lg font-semibold">Your Rank</h3>
            <p className="text-sm text-gray-500">Rank: #32</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizContest;
