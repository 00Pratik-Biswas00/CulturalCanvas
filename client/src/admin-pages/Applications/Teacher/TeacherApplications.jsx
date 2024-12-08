import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import DeleteUserButton from "../../../components/UserDeleteButton";
import { GET_TEACHERS } from "../../../graphql/career";

const TeacherApplications = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_TEACHERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-3 sm:py-6 px-4 duration-300 min-h-screen">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl tracking-widest font-montserrat">
          Teacher Applications
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data?.teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="flex items-start justify-between p-3 border rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text relative"
            >
              <div className="flex flex-col gap-2">
                <p>
                  <b>Name:</b> {teacher.fullName}
                </p>
                <p>
                  <b>Email:</b> {teacher.email}
                </p>
                <p>
                  <b>Ph No.:</b> {teacher.phone}
                </p>
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() => {
                    navigate(
                      `/teacher-applications/full-teacher-application/${teacher.id}`
                    );
                  }}
                  className="p-1 bg-blue-400 hover:bg-blue-800 font-bold rounded-lg text-white"
                >
                  Check
                </button>
                <div className="absolute bottom-0 right-0 cursor-pointer">
                  <DeleteUserButton userId={teacher.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherApplications;
