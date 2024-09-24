import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { SigninSchema } from "../../../utils/schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { LOGIN_MUTATION } from "../../../graphql/mutation";
import { resetClient } from "../../../config/graphql";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/slices/authSlice";

const ModalLogin = ({ onClose, openFPModal, openSignUpModal }) => {
  const dispatch = useDispatch();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      if (data.login.error) {
        toast.error(data.login.error);
      } else {
        dispatch(loginUser(data.login));
        resetClient();
        toast.success("Welcome Back!!");
        onClose();
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 dark:bg-dark_background1 dark:bg-opacity-50  bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 text-primary_text dark:text-dark_primary_text">
      <div className="relative bg-background2 dark:bg-shadow  p-6 rounded-lg shadow-lg w-full max-w-[20rem] sm:max-w-xl transform transition-transform duration-300 scale-105">
        <h2 className="text-3xl font-montserrat font-bold mb-4">Login</h2>

        <div className="flex absolute top-2 right-2 justify-between items-center text-2xl">
          <button onClick={onClose} className="">
            <AiOutlineClose />
          </button>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SigninSchema}
          onSubmit={(values, actions) => {
            login({ variables: values });
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

              <div className="mb-4">
                <label className="block">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ModalLogin;
