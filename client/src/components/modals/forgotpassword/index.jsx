import React, { useState } from "react";
import axiosInstance from "../../../config/axiosInstance";
import { toast } from "sonner";

const ForgotPasswordModal = ({ isOpen, onClose, onLoginClick }) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);

  const handleRequestCode = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/users/forgot-password", { email });
      toast.success("Password reset code has been sent to your email !");
      setStep(2);
    } catch (error) {
      console.error(error);
      toast.error("Error requesting password reset code!");
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/users/verify-code", {
        email,
        code,
      });
      if (response.data === "Code is valid") {
        setStep(3);
      } else {
        toast.error("Invalid or expired code!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error verifying code!");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/users/reset-password", {
        email,
        code,
        password,
      });
      toast.success("Password has been reset");
      onClose();
    } catch (error) {
      console.error(error);
      toast.alert("Error resetting password!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div className=" bg-background2 text-primary_text p-6 rounded-lg shadow-lg w-full max-w-[22rem] sm:max-w-md transform transition-transform duration-300 scale-105">
        <h2 className="text-3xl font-montserrat font-bold mb-4">
          Forgot Password
        </h2>
        {step === 1 && (
          <form onSubmit={handleRequestCode}>
            <div className="mb-4">
              <label className="block text-secondary_text">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-500  hover:bg-gray-700 text-primary_text px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-highlight text-primary_text px-4 py-2 rounded transition-all duration-300"
              >
                Request Code
              </button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleVerifyCode}>
            <div className="mb-4">
              <label className="block text-secondary_text">
                Verification Code
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-primary_text px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-highlight text-primary_text px-4 py-2 rounded transition-all duration-300"
              >
                Verify Code
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <div className="mb-4">
              <label className="block text-secondary_text">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-primary_text px-4 py-2 rounded mr-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-highlight text-primary_text px-4 py-2 rounded transition-all duration-300"
              >
                Reset Password
              </button>
            </div>
          </form>
        )}
        <button
          onClick={onLoginClick}
          className="text-highlight hover:text-highlight_hover underline mt-4"
        >
          Go back to login
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
