import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_TEACHER } from "../../../graphql/career";

const SingleTeacherApplication = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TEACHER, {
    variables: { id },
  });

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage message={error.message} />;

  const teacher = data.teacher;

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-6 px-4 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-blue-600 text-4xl font-bold overflow-hidden">
                {teacher.fullName.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{teacher.fullName}</h1>
                <p className="text-blue-200">{teacher.email}</p>
              </div>
            </div>
          </div>
          <div className="p-6 grid gap-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoItem icon="phone" label="Phone" value={teacher.phone} />
              <InfoItem
                icon="calendar"
                label="Date of Birth"
                value={teacher.dob}
              />
              <InfoItem
                icon="location-marker"
                label="Address"
                value={teacher.address}
              />
              <InfoItem
                icon="academic-cap"
                label="Domain of Teaching"
                value={teacher.domainOfTeaching}
              />
            </div>
            {teacher.portfolio && teacher.portfolio.url && (
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <Icon name="photograph" /> Portfolio
                </h3>
                <div className="mt-2 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={teacher.portfolio.url}
                    alt={`${teacher.fullName}'s portfolio`}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Icon name="academic-cap" /> Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {teacher.education}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Icon name="briefcase" /> Work Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {teacher.workExperience}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center">
                <Icon name="code" /> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {teacher.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <Icon name={icon} />
    <span className="text-gray-600 dark:text-gray-400">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
);

const Icon = ({ name }) => {
  const icons = {
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    calendar: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    "location-marker": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    "academic-cap": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    briefcase: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
    photograph: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return icons[name] || null;
};

const LoadingSkeleton = () => (
  <div className="container mx-auto max-w-4xl py-6 px-4">
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-pulse">
      <div className="bg-blue-600 p-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-blue-400 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-6 bg-blue-400 rounded w-40"></div>
            <div className="h-4 bg-blue-400 rounded w-60"></div>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="container mx-auto max-w-4xl py-6 px-4">
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-lg"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>{message}</p>
    </div>
  </div>
);

export default SingleTeacherApplication;
