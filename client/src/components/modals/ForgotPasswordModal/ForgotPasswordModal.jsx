import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { emailSchema } from "../../../utils/schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FORGOT_PASSWORD_MUTATION } from "../../../graphql/mutation";
import { useMutation } from "@apollo/client";
import ResetPasswordModal from "../ResetPasswordModal/[id]/token/ResetPasswordModal";
import { toast } from "sonner";

const ForgotPasswordModal = ({ onClose, openResetModal }) => {
  const [forgotPassword] = useMutation(FORGOT_PASSWORD_MUTATION, {
    onCompleted: (data) => {
      if (data.forgotPassword.ok) {
        toast.success("Email Sent!!");
        openResetModal();
      } else {
        toast.error(data.forgotPassword.error);
      }
    },
    onError: (err) => {
      toast.error("Failure");
      console.error(err);
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 dark:bg-dark_background1 dark:bg-opacity-50  bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 text-primary_text dark:text-dark_primary_text">
      <div className="relative bg-background2 dark:bg-shadow  p-6 rounded-lg shadow-lg w-full max-w-[20rem] sm:max-w-xl transform transition-transform duration-300 scale-105">
        <h2 className="text-3xl font-montserrat font-bold mb-4">
          Forgot Password
        </h2>

        <div className="flex  absolute top-2 right-2 justify-between items-center text-2xl">
          <button onClick={onClose} className="  ">
            <AiOutlineClose />
          </button>
        </div>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({ email: emailSchema })}
          onSubmit={(values, actions) => {
            forgotPassword({ variables: values });
            actions.resetForm();
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-4">
                <label className="block ">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex justify-end my-4">
                <button
                  type="submit"
                  className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-4 py-2 rounded transition-all duration-300"
                >
                  Send OTP
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
