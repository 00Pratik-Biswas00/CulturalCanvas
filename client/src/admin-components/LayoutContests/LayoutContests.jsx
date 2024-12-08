import React from "react";
import { useQuery } from "@apollo/client";
import { RiEditFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { GET_CURRENT_CONTEST, GET_WINNERS } from "../../graphql/contest";

const LayoutContests = ({ setModalOpen, setWinnersModal }) => {
  const {
    loading: contestLoading,
    error: contestError,
    data: contestData,
  } = useQuery(GET_CURRENT_CONTEST);
  const {
    loading: winnersLoading,
    error: winnersError,
    data: winnersData,
  } = useQuery(GET_WINNERS, {
    variables: { week: contestData?.currentContest?.week },
    skip: !contestData?.currentContest,
  });

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 mb-6">
        <h1 className="text-[1.8rem] rounded-r-xl font-semibold text-center font-playfair bg-highlight text-dark_primary_text py-1 px-4">
          Blog Contest
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full py-10">
        <div className="flex flex-col gap-7 w-full md:w-1/2">
          {contestLoading ? (
            <div className="text-center">Loading contest data...</div>
          ) : contestError ? (
            <div className="text-center text-red-500">
              Error: {contestError.message}
            </div>
          ) : contestData?.currentContest ? (
            <div className="flex flex-col items-start justify-start gap-3 p-4 border rounded-xl shadow-custom-green">
              <h2 className="text-xl font-semibold mb-2">Current Contest</h2>
              <p>
                <span className="font-medium">Topic:</span>{" "}
                {contestData.currentContest.topic}
              </p>
              <p>
                <span className="font-medium">Date:</span>{" "}
                {contestData.currentContest.date}
              </p>
              <p>
                <span className="font-medium">Time:</span>{" "}
                {contestData.currentContest.time}
              </p>
              <p>
                <span className="font-medium">Week:</span>{" "}
                {contestData.currentContest.week}
              </p>
              <div className="flex items-center justify-center pt-3 gap-x-3">
                <RiEditFill
                  className="w-6 h-6 cursor-pointer text-highlight_hover hover:text-highlight_hover_dark"
                  onClick={() => {
                    /* Implement edit functionality */
                  }}
                />
                <MdDelete
                  className="w-6 h-6 cursor-pointer text-red-600 hover:text-red-800"
                  onClick={() => {
                    /* Implement delete functionality */
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="text-center">No current contest found.</div>
          )}
          <button
            onClick={() => setModalOpen(true)}
            className="bg-highlight_hover hover:bg-highlight_hover_dark text-dark_primary_text font-medium font-ubuntu text-base py-2 px-4 rounded transition-transform hover:scale-105 duration-300"
          >
            Add a New Contest
          </button>
        </div>

        <div className="flex flex-col gap-7 w-full md:w-1/2">
          {/* Winners Section */}
          <div className="flex flex-col items-start justify-start gap-3 p-4 border rounded-xl shadow-custom-green">
            <h2 className="text-xl font-semibold mb-2">Current Winners</h2>
            {winnersLoading ? (
              <div className="text-center w-full">Loading winners data...</div>
            ) : winnersError ? (
              <div className="text-center text-red-500 w-full">
                Error: {winnersError.message}
              </div>
            ) : winnersData?.winners && winnersData.winners.length > 0 ? (
              winnersData.winners.map((winner) => (
                <div
                  key={winner.id}
                  className="flex flex-col w-full border-b pb-2 mb-2 last:border-b-0"
                >
                  <div className="flex justify-between w-full gap-4 mb-2">
                    <h3 className="text-lg font-semibold">
                      Rank: {winner.rank}
                    </h3>
                    <h3 className="text-lg font-semibold">{winner.name}</h3>
                    <a
                      href={winner.socialMediaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg font-semibold underline text-blue-400 hover:text-blue-600"
                    >
                      Social Media Profile
                    </a>
                  </div>
                  <div className="flex items-center justify-end pt-1 gap-x-3">
                    <RiEditFill
                      className="w-5 h-5 cursor-pointer text-highlight_hover hover:text-highlight_hover_dark"
                      onClick={() => {
                        /* Implement edit functionality */
                      }}
                    />
                    <MdDelete
                      className="w-5 h-5 cursor-pointer text-red-600 hover:text-red-800"
                      onClick={() => {
                        /* Implement delete functionality */
                      }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center w-full">
                No winners found for the current contest.
              </div>
            )}
          </div>
          <button
            onClick={() => setWinnersModal(true)}
            className="bg-highlight_hover hover:bg-highlight_hover_dark text-dark_primary_text font-medium font-ubuntu text-base py-2 px-4 rounded transition-transform hover:scale-105 duration-300"
          >
            Add Winners
          </button>
        </div>
      </div>
    </div>
  );
};

export default LayoutContests;
