import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import DeleteUserButton from "../../components/UserDeleteButton";
import { GET_ADMINS } from "../../graphql/career";

const AdminApplications = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ADMINS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="flex flex-col py-14 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl text-center tracking-widest font-montserrat">
          Admin Applications
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4">
          {data?.admins.map((admin) => (
            <div
              key={admin.id}
              className="flex items-start justify-between p-3 border rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text relative"
            >
              <div className="flex flex-col gap-2">
                <p>
                  <b>Name:</b> {admin.fullName}
                </p>
                <p>
                  <b>Email:</b> {admin.email}
                </p>
                <p>
                  <b>Ph No.:</b> {admin.phone}
                </p>
              </div>

              <div className="flex flex-col">
                <button
                  onClick={() => {
                    navigate(
                      `/admins-acdprsIndia24/full-admin-application/${admin.id}`
                    );
                  }}
                  className="p-1 bg-blue-400 hover:bg-blue-800 font-bold rounded-lg text-white"
                >
                  Check
                </button>
                <div className="absolute bottom-0 right-0 cursor-pointer">
                  <DeleteUserButton userId={admin.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminApplications;
