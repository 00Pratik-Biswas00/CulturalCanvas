"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import InputComponent from "../../../components/Input/InputComponent";
import { ADD_WINNER, GET_CURRENT_CONTEST_WEEK } from "../../../graphql/contest";
import { toast } from "sonner";
const AddWinners = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    socialMediaLink: "",
    rank: "",
  });

  const { data: contestData } = useQuery(GET_CURRENT_CONTEST_WEEK);
  const [addWinner, { loading, error }] = useMutation(ADD_WINNER);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rank = parseInt(formData.rank, 10);
    if (rank < 1 || rank > 3) {
      alert("Rank must be 1, 2, or 3");
      return;
    }
    try {
      await addWinner({
        variables: {
          name: formData.name,
          socialMediaLink: formData.socialMediaLink,
          rank: rank,
          week: contestData.currentContest.week,
        },
      });
      toast.success("Winner added successfully!");
      onClose();
    } catch (err) {
      console.error("Error adding winner:", err);
      toast.error("Failed to add winner. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center overflow-auto">
      <div className="bg-background2 dark:bg-shadow w-full max-w-md max-h-[90vh] overflow-y-auto my-5 p-6 rounded-lg relative">
        <FaTimes
          className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-xl cursor-pointer"
          onClick={onClose}
        />

        <h2 className="text-2xl font-bold mb-4">Add Winner</h2>

        <form onSubmit={handleSubmit}>
          <InputComponent
            iName="Winner's Name"
            iType="text"
            value={formData.name}
            onChange={handleInputChange}
            name="name"
            required
          />
          <InputComponent
            iName="Winner's Social Media Link"
            iType="url"
            value={formData.socialMediaLink}
            onChange={handleInputChange}
            name="socialMediaLink"
            required
          />
          <InputComponent
            iName="Winner's Rank (1-3)"
            iType="number"
            value={formData.rank}
            onChange={handleInputChange}
            name="rank"
            min="1"
            max="3"
            required
          />
          {contestData?.currentContest && (
            <p className="mb-4">
              Contest Week: {contestData.currentContest.week}
            </p>
          )}
          {/* Button Section */}
          <div className="flex justify-end gap-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-highlight hover:bg-highlight_dark text-dark_primary_text font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default AddWinners;
