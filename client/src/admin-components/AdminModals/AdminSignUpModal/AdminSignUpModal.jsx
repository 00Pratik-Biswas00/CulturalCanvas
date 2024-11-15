import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import { AddAdminValidationSchema } from "../../../utils/schemas";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";
import { ADD_ADMIN } from "../../../graphql/roleMutation";

const AdminSignUpModal = ({ onClose, loadAdmins }) => {
  const user = useSelector((state) => state?.user?.userInfo);

  const [addAdmin] = useMutation(ADD_ADMIN, {
    onCompleted: () => {
      onClose();
      loadAdmins();
      toast.success("Registration Success!!");
    },
    onError: (error) => {
      toast.error("Failure");
      console.error(error);
    },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 dark:bg-dark_background1 dark:bg-opacity-50  bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 text-primary_text dark:text-dark_primary_text">
      <div className="relative bg-background2 dark:bg-shadow  p-4 rounded-lg shadow-lg w-full max-w-[20rem] sm:max-w-3xl transform transition-transform duration-300 scale-105">
        <h2 className="text-3xl font-montserrat font-bold mb-4">
          {user?.role === "owner" ? "Sign Up For Admin" : "Sign Up"}
        </h2>

        <div className="flex  absolute top-2 right-2 justify-between items-center text-2xl">
          <button onClick={onClose} className="  ">
            <AiOutlineClose />
          </button>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            gender: "",
            phone: "",
            newEmail: "",
          }}
          validationSchema={AddAdminValidationSchema}
          onSubmit={(values, actions) => {
            addAdmin({ variables: values });
            actions.resetForm();
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-2">
              <div className="mb-2">
                <label className="block ">Shortlisted Candidate's Name</label>
                <Field
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1  focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-2">
                <label className="block ">Shortlisted Candidate's Email</label>
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

              <div className="flex items-start w-full justify-between gap-5">
                <div className="flex flex-col items-start justify-start w-full">
                  <label className="  mb-2">
                    Shortlisted Candidate's Gender
                  </label>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Male"
                        className="h-4 w-4 bg-background1 dark:bg-dark_background1"
                      />
                      <span className="ml-2 ">Male</span>
                    </div>
                    <div className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Female"
                        className="h-4 w-4 bg-background1 dark:bg-dark_background1"
                      />
                      <span className="ml-2 ">Female</span>
                    </div>
                    <div className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Non-Binary"
                        className="h-4 w-4 bg-background1 dark:bg-dark_background1"
                      />
                      <span className="ml-2 ">Non-Binary</span>
                    </div>
                    <div className="flex items-center">
                      <Field
                        type="radio"
                        name="gender"
                        value="Others"
                        className="h-4 w-4 bg-background1 dark:bg-dark_background1"
                      />
                      <span className="ml-2 ">Others</span>
                    </div>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className=" w-[98%]">
                  <label className="block ">
                    Shortlisted Candidate's Phone Number
                  </label>
                  <Field
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="mb-2">
                <label className="block ">Admin's New Email</label>
                <Field
                  name="newEmail"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 dark:bg-dark_background1 focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="email"
                />
                <ErrorMessage
                  name="newEmail"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-end my-4">
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-700  hover:text-dark_primary_text px-4 py-1 rounded mr-2 transition-all duration-300"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="bg-highlight hover:bg-highlight_hover  hover:text-dark_primary_text px-4 py-1 rounded transition-all duration-300"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminSignUpModal;
