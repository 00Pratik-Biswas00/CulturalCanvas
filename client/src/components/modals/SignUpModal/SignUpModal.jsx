import React from "react";
import { AiOutlineClose } from "react-icons/ai";
// name, mail pass conf pass gend CiPhone;
const SignUpModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative bg-background2 text-primary_text p-6 rounded-lg shadow-lg w-full max-w-[20rem] sm:max-w-md transform transition-transform duration-300 scale-105">
        <h2 className="text-3xl font-montserrat font-bold mb-4">Sign Up</h2>

        <div className="flex  absolute top-2 right-2 justify-between items-center text-2xl">
          <button onClick={onClose} className="  text-primary_text">
            <AiOutlineClose />
          </button>
        </div>
        <form>
          {/* name */}
          <div className="mb-2">
            <label className="block text-secondary_text">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
              required
              autoComplete="name"
            />
          </div>
          {/* email */}
          <div className="mb-2">
            <label className="block text-secondary_text">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
              required
              autoComplete="email"
            />
          </div>

          {/* gender */}
          <div className="mb-2">
            <label className="block text-secondary_text">Gender</label>

            <div className="flex items-center justify-center gap-5">
              <div className="flex items-center justify-center">
                <input
                  type="radio"
                  name="plan"
                  className=" h-4 w-4 bg-background1 "
                />
                <span className="ml-2  text-primary_text">Male</span>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="radio"
                  name="plan"
                  className="form-radio h-4 w-4 text-highlight"
                />
                <span className="ml-2  text-primary_text">Female</span>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="radio"
                  name="plan"
                  className="form-radio h-4 w-4 text-highlight"
                />
                <span className="ml-2  text-primary_text">Others</span>
              </div>
            </div>
          </div>

          {/* phone */}
          <div className="mb-2">
            <label className="block text-secondary_text">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
              required
            />
          </div>
          {/* password */}
          <div className="mb-2">
            <label className="block text-secondary_text">Create Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
              required
            />
          </div>
          {/* confirm password */}

          <div className="mb-2">
            <label className="block text-secondary_text">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
              required
            />
          </div>

          <div className="flex justify-end my-4">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-700 text-primary_text hover:text-dark_primary_text px-4 py-2 rounded mr-2 transition-all duration-300"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-4 py-2 rounded transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
