"use client";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import InputComponent from "../../../components/Input/InputComponent";
import { useMutation } from "@apollo/client";
import { ADD_CONTEST } from "../../../graphql/contest";
import { toast } from "sonner";

const AddContests = () => {
  const [formData, setFormData] = useState({
    topic: "",
    date: "",
    time: "",
  });

  const [addContest, { data, loading, error }] = useMutation(ADD_CONTEST);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addContest({
        variables: {
          topic: formData.topic,
          date: formData.date,
          time: formData.time,
        },
      });
      setFormData({ topic: "", date: "", time: "" });
      toast.success("Contest added successfully!");
    } catch (err) {
      console.error("Error adding contest:", err);
      toast.error("Failed to add contest. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text bg-opacity-50 dark:bg-opacity-70 flex items-center justify-end pr-14 overflow-auto">
      <div className="bg-background2 dark:bg-shadow sm:w-[81%] max-h-[90vh] overflow-y-auto my-5 px-4 py-2 rounded-lg relative">
        <FaTimes className="absolute top-2 right-3 text-red-600 hover:text-red-800 text-xl cursor-pointer" />

        <form onSubmit={handleSubmit}>
          <InputComponent
            iName="Blog Contest Topic"
            iType="text"
            value={formData.topic}
            onChange={handleInputChange}
            name="topic"
          />
          <InputComponent
            iName="Blog Contest Date (DD-MM-YYYY)"
            iType="text"
            value={formData.date}
            onChange={handleInputChange}
            name="date"
          />
          <InputComponent
            iName="Blog Contest Time (00:00)"
            iType="text"
            value={formData.time}
            onChange={handleInputChange}
            name="time"
          />
          {/* Button Section */}
          <div className="flex justify-end gap-x-4">
            <button
              type="submit"
              className="bg-highlight hover:bg-highlight_dark text-dark_primary_text font-medium py-1 px-3 rounded-lg"
              disabled={loading}
            >
              {loading ? "SAVING..." : "SAVE"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
      </div>
    </div>
  );
};

export default AddContests;
