import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SignUpModal from "../SignUpModal/SignUpModal";
import ForgotPasswordModal from "../ForgotPasswordModal/ForgotPasswordModal";

const ModalLogin = ({ onClose }) => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isFPModalOpen, setIsFPModalOpen] = useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsFPModalOpen(false);
  };

  const openFPModal = () => {
    setIsFPModalOpen(true);
    setIsSignUpModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      {!isSignUpModalOpen && !isFPModalOpen && (
        <div className="relative bg-background2 text-primary_text p-6 rounded-lg shadow-lg w-full max-w-[20rem] sm:max-w-md transform transition-transform duration-300 scale-105">
          <h2 className="text-3xl font-montserrat font-bold mb-4">Login</h2>

          <div className="flex absolute top-2 right-2 justify-between items-center text-2xl">
            <button onClick={onClose} className="text-primary_text">
              <AiOutlineClose />
            </button>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-secondary_text">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                required
                autoComplete="email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-secondary_text">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                required
                autoComplete="password"
              />
            </div>
            <button
              type="button"
              className="text-highlight hover:text-highlight_hover underline"
              onClick={openFPModal}
            >
              Forgot Password?
            </button>

            <div className="my-4">
              <div className="flex gap-1 items-center justify-center">
                <p>Don't have an account?</p>
                <p
                  className="text-highlight hover:text-highlight_hover underline cursor-pointer"
                  onClick={openSignUpModal}
                >
                  Sign up
                </p>
              </div>
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
                Login
              </button>
            </div>
          </form>
        </div>
      )}

      {isSignUpModalOpen && (
        <SignUpModal onClose={() => setIsSignUpModalOpen(false)} />
      )}
      {isFPModalOpen && (
        <ForgotPasswordModal onClose={() => setIsFPModalOpen(false)} />
      )}
    </div>
  );
};

export default ModalLogin;
