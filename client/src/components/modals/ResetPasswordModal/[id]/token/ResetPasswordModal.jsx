import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ResetPassword } from "../../../../../utils/schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "sonner";
import { RESET_PASSWORD_MUTATION } from "../../../../../graphql/mutation";
import { useMutation } from "@apollo/client";
import ModalLogin from "../../../LoginModal/ModalLogin";

const ResetPasswordModal = ({ onClose }) => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const [resetPassword] = useMutation(RESET_PASSWORD_MUTATION, {
    onCompleted: (data) => {
      if (data.resetPassword.ok) {
        toast.success("Password Reset Successful");
        openSignInModal();
      } else {
        toast.error(data.resetPassword.error);
      }
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 dark:bg-dark_background1 dark:bg-opacity-50  bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 text-primary_text dark:text-dark_primary_text">
      <div className="relative bg-background2 dark:bg-shadow  p-6 rounded-lg shadow-lg w-full max-w-[20rem] sm:max-w-3xl transform transition-transform duration-300 scale-105">
        <h2 className="text-3xl font-montserrat font-bold mb-4">
          Reset Password
        </h2>

        <div className="flex  absolute top-2 right-2 justify-between items-center text-2xl">
          <button onClick={onClose} className=" ">
            <AiOutlineClose />
          </button>
        </div>
        <Formik
          initialValues={{ otp: "", password: "", confirmPassword: "" }}
          validationSchema={ResetPassword}
          onSubmit={(values, actions) => {
            const { confirmPassword, ...userData } = values;
            resetPassword({ variables: userData });
            onClose();
            actions.resetForm();
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <label className="block ">OTP</label>
                <Field
                  name="otp"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="otp"
                />
                <ErrorMessage
                  name="otp"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block ">New Password</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block ">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="confirm-password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex justify-end my-4">
                <button
                  type="submit"
                  className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-4 py-2 rounded transition-all duration-300"
                >
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {isSignInModalOpen && (
        <ModalLogin onClose={() => setIsSignInModalOpen(false)} />
      )}
    </div>
  );
};

export default ResetPasswordModal;
