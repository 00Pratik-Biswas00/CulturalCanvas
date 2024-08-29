import React, { useState } from "react";
import axiosInstance from "../../../config/axiosInstance.js";
import { toast } from "sonner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  handleImageFileDelete,
  handleImageFileUpload,
} from "../../../utils/fileHandler.js";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const SignUpModal = ({ isOpen, onClose, onLoginClick }) => {
  if (!isOpen) return null;

  const [image, setImage] = useState();
  const [imageUploading, setImageUploading] = useState(false);
  const [imageDeleting, setImageDeleting] = useState(false);
  const [error, setError] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z0-9_ ]*$/, "Name should not contain special characters")
      .min(3, "Name must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      ...values,
      image,
    };
    try {
      const response = await axiosInstance.post(`/users`, payload);
      setError(null);
      toast.success("Registration successful!");
      onLoginClick();
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      toast.error("Registration failed!");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = async () => {
    if (image) {
      try {
        await axiosInstance.delete(`/upload/image/${image.split("/").pop()}`);
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background1 bg-opacity-50 backdrop-blur-sm transition-opacity duration-300">
      <div className=" bg-background2 text-primary_text p-6 rounded-lg shadow-lg w-full max-w-[22rem] sm:max-w-md transform transition-transform duration-300 scale-105">
        <h2 className="text-3xl font-montserrat font-bold mb-4">Sign Up</h2>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-secondary_text">Name</label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="username"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-secondary_text">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-secondary_text">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-secondary_text">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-4 py-2 border rounded-lg bg-background1 text-primary_text focus:outline-none focus:ring-2 focus:ring-highlight"
                  autoComplete="password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-secondary_text">
                  Profile Image
                </label>

                <div className="flex items-center gap-x-3">
                  {imageUploading ? (
                    <label className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-2 rounded font-bold transition-all duration-300 cursor-pointer">
                      Uploading image...
                    </label>
                  ) : (
                    <label
                      className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-2 rounded font-bold transition-all duration-300 cursor-pointer"
                      htmlFor="imageUpload"
                    >
                      Upload image
                    </label>
                  )}
                  <input
                    id="imageUpload"
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      setSaveRequire(true);
                      handleImageFileUpload(
                        e.target.files[0],
                        image,
                        setImage,
                        setImageUploading
                      );
                    }}
                  />
                  {image && (
                    <div className="w-fit flex items-center gap-x-3 ">
                      <img
                        src={image}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      {imageDeleting ? (
                        <AiOutlineLoading3Quarters className="animate-spin text-primary_text" />
                      ) : (
                        <MdDeleteForever
                          className="cursor-pointer h-8 w-8 rounded-lg bg-primary_text hover:bg-red-800 text-highlight hover:text-primary_text"
                          onClick={() => {
                            setSaveRequire(false);
                            handleImageFileDelete(
                              image,
                              setImage,
                              setImageDeleting
                            );
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
              {error && (
                <div className="alert alert-danger text-red-500" role="alert">
                  {error}!
                </div>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-primary_text px-4 py-2 rounded mr-2 transition-all duration-300"
                  onClick={() => handleCancel()}
                >
                  Cancel
                </button>
                {isSubmitting ? (
                  <button
                    type="submit"
                    className="bg-highlight_hover cursor-not-allowed text-primary_text px-4 py-2 rounded transition-all duration-300"
                  >
                    Signing Up...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-highlight hover:bg-highlight_hover text-primary_text px-4 py-2 rounded transition-all duration-300"
                  >
                    Sign Up
                  </button>
                )}
              </div>
              <div className="mt-4 text-center text-secondary_text">
                Already a user?{" "}
                <button
                  type="button"
                  onClick={onLoginClick}
                  className="text-highlight hover:text-highlight_hover underline"
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

export default SignUpModal;
