import React, { useState } from "react";
import taj from "../../assets/Heritage/unescologo.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { UpdateProfileValidationSchema } from "../../utils/schemas";
import { UPDATE_PROFILE_MUTATION } from "../../graphql/mutation";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";
import api from "./../../config/axios";

const MyProfile = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const handleImageUpload = async (file, setFieldValue) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
      const { data } = await api.post(
        `${import.meta.env.VITE_API_KEY_RESTAPI}/upload-image`,
        formData
      );
      const { url, public_id } = data;

      setFieldValue("photo", { url, public_id });
      setImagePreview(data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    onCompleted: (data) => {
      if (data.updateProfile.ok) {
        toast.success("Profile Updated!!");
      }
    },
    onError: (error) => {
      toast.error("Failure");
      console.error(error);
    },
  });
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 flex flex-col items-center justify-center">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          password: "",
          newPassword: "",
          confirmPassword: "",
          photo: null,
        }}
        validationSchema={UpdateProfileValidationSchema}
        onSubmit={(values, actions) => {
          const { confirmPassword, ...userData } = values;
          updateProfile({ variables: userData });
          actions.resetForm();
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col items-center w-full justify-center gap-5 px-36 py-10">
            <div className="flex flex-col gap-5">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Uploaded Preview"
                  className="rounded-full w-[22rem] h-[22rem]"
                />
              ) : (
                <img
                  src="default-avatar.jpg"
                  alt="Default Avatar"
                  className="rounded-full w-[22rem] h-[22rem]"
                />
              )}
              <div className="flex items-center justify-center gap-10">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    if (file) {
                      handleImageUpload(file, setFieldValue);
                    }
                  }}
                  className="hidden"
                  id="upload-photo"
                />
                <label
                  htmlFor="upload-photo"
                  className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-4 py-1 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer"
                >
                  Upload Image
                </label>
                <button
                  type="button"
                  className="bg-red-600 hover:bg-red-900 text-dark_primary_text px-4 py-1 rounded-xl text-lg transition-all font-semibold duration-300"
                  onClick={async () => {
                    if (imagePreview) {
                      try {
                        await api.post(
                          `${
                            import.meta.env.VITE_API_KEY_RESTAPI
                          }/remove-image`,
                          imagePreview
                        );
                        setImagePreview(null);
                        setFieldValue("photo", null);
                      } catch (error) {
                        console.error("Image delete failed:", error);
                      }
                    }
                  }}
                >
                  Delete Image
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10">
              <div className="text-xl font-semibold font-montserrat">
                Total Vlogs: 0
              </div>
              <div className="text-xl font-semibold font-montserrat">
                Total Blogs: 0
              </div>
              <div className="text-xl font-semibold font-montserrat">
                Total Rewards: 0
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <h1 className="text-2xl font-semibold font-montserrat">
                Full Name
              </h1>
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="flex-grow h-10 pl-2 bg-background1 dark:bg-dark_background1 w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <h1 className="text-2xl font-semibold font-montserrat">
                Email Address
              </h1>
              <Field
                type="email"
                name="email"
                disabled
                placeholder="Enter your email"
                className="flex-grow h-10 pl-2 bg-background1 dark:bg-dark_background1 w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
              />
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <h1 className="text-2xl font-semibold font-montserrat">
                Phone Number
              </h1>
              <Field
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="flex-grow h-10 pl-2 bg-background1 dark:bg-dark_background1 w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <h1 className="text-2xl font-semibold font-montserrat">
                Old Password
              </h1>
              <Field
                type="password"
                name="password"
                placeholder="*********"
                className="flex-grow h-10 pl-2 bg-background1 dark:bg-dark_background1 w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <h1 className="text-2xl font-semibold font-montserrat">
                New Password
              </h1>
              <Field
                type="password"
                name="newPassword"
                placeholder="*********"
                className="flex-grow h-10 pl-2 bg-background1 dark:bg-dark_background1 w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <h1 className="text-2xl font-semibold font-montserrat">
                Confirm Password
              </h1>
              <Field
                type="password"
                name="confirmPassword"
                placeholder="*********"
                className="flex-grow h-10 pl-2 bg-background1 dark:bg-dark_background1 w-full text-[13px] sm:text-[1rem] border rounded-lg border-highlight focus:outline-none focus:ring-1 focus:ring-highlight outline-none transition-all resize-none"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex items-center justify-between w-full gap-10">
              <button
                type="submit"
                className="bg-highlight hover:bg-highlight_hover text-primary_text hover:text-dark_primary_text px-4 py-1 rounded-xl font-semibold text-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update Profile"}
              </button>
              <button
                type="button"
                className="bg-red-600 hover:bg-red-900 text-dark_primary_text px-4 py-1 rounded-xl text-lg transition-all font-semibold duration-300"
                onClick={() => console.log("Log Out")}
              >
                Log Out
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default MyProfile;
