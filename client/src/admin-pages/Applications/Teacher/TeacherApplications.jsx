import React from "react";
import DeleteUserButton from "../../../components/UserDeleteButton";
import { useNavigate } from "react-router-dom";

const TeacherApplications = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-3 sm:py-6 px-4 duration-300 min-h-screen">
      <div className=" flex flex-col gap-10">
        <h1 className="text-5xl    tracking-widest font-montserrat">
          Teacher Applications
        </h1>

        <div className="grid grid-cols-4 gap-3">
          <div className="flex  items-start justify-between p-3  border rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text relative">
            <div className="flex flex-col gap-2">
              <p>
                <b>Name:</b> Pratik
              </p>
              <p>
                <b>Email:</b> maillll@gmail.com
              </p>

              <p>
                <b>Ph No.:</b> 7001316356
              </p>
            </div>

            <div className="flex flex-col  ">
              <button
                onClick={() => {
                  navigate(`/teacher-applications/full-teacher-application`);
                }}
                className=" p-1 bg-blue-400 hover:bg-blue-800 font-bold rounded-lg"
              >
                Check
              </button>
              <div className=" absolute bottom-0 right-0 cursor-pointer">
                <DeleteUserButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherApplications;
