import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputComponent from "../../components/Input/InputComponent";
import TextareaComponent from "../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../components/Input/InputImageVideo";
import MyButton4 from "../../components/Buttons/MyButton4";
import { useTranslation } from "react-i18next";
import { teachervalidationSchema } from "../../utils/schemas";
import api from "../../config/axios";
import { CREATE_TEACHER } from "../../graphql/career";
import { useMutation } from "@apollo/client";
import { toast } from "sonner";

const CareerTeacherForm = () => {
  const { t } = useTranslation();
  const careerInstructorContent = t("CareerData", { returnObjects: true });
  const [imageInput, setImageInput] = React.useState(null);
  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const { data } = await api.post(
        `${import.meta.env.VITE_API_KEY_RESTAPI}/upload-image`,
        formData
      );
      setImageInput(data);
    } catch (e) {
      console.error(e);
      toast.error("Image upload failed!");
    }
  };
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    education: "",
    workExperience: "",
    skills: [],
    domainOfTeaching: "",
  };
  const [createTeacher] = useMutation(CREATE_TEACHER, {
    onCompleted: () => {
      toast.success("Application submitted successfully!");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to submit application.");
    },
  });
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const input = { ...values, portfolio: imageInput };
    try {
      await createTeacher({ variables: { input } });
      resetForm();
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-5 pb-14 px-16 duration-300 min-h-screen relative w-full bg-contain bg-fixed bg-no-repeat bg-center">
      <div className="px-20 py-1 flex flex-col items-start justify-start gap-5 ">
        <h1 className="text-4xl font-extrabold border-2 rounded-3xl border-black mt-14 px-3 py-2 ">
          {careerInstructorContent.careerInstructor.heading}
        </h1>
        <p className="">
          {careerInstructorContent.careerInstructor.description}
        </p>

        <div className="space-y-4 w-full">
          <div className="flex justify-between w-full gap-5">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                {careerInstructorContent.careerInstructor.sH1}
              </h2>
              <ul className="list-disc list-inside text-lg">
                {careerInstructorContent.careerInstructor.sH1List.map(
                  (content, ind) => (
                    <li key={ind}>{content.des}</li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                {careerInstructorContent.careerInstructor.sH2}
              </h2>
              <ul className="list-disc list-inside text-lg">
                {careerInstructorContent.careerInstructor.sH2List.map(
                  (content, ind) => (
                    <li key={ind}>{content.des}</li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {careerInstructorContent.careerInstructor.sH3}
                </h2>
                <ul className="list-disc list-inside text-lg">
                  {careerInstructorContent.careerInstructor.sH3List.map(
                    (content, ind) => (
                      <li key={ind}>{content.des}</li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {careerInstructorContent.careerInstructor.sH4}
                </h2>
                <ul className="list-disc list-inside text-lg">
                  {careerInstructorContent.careerInstructor.sH4List.map(
                    (content, ind) => (
                      <li key={ind}>{content.des}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <img
              src={careerInstructorContent.careerInstructor.careerImg}
              className=" w-[25rem] h-[25rem]"
            />
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={teachervalidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col gap-3 justify-center rounded-lg py-10 px-20 w-full">
            <Field name="fullName">
              {({ field }) => (
                <InputComponent
                  {...field}
                  iType="text"
                  iName="Full Name"
                  required={true}
                />
              )}
            </Field>
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-500"
            />

            <div className="flex gap-5">
              <div className="flex-1">
                <Field name="email">
                  {({ field }) => (
                    <InputComponent
                      {...field}
                      iType="email"
                      iName="Email"
                      required={true}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex-1">
                <Field name="phone">
                  {({ field }) => (
                    <InputComponent
                      {...field}
                      iType="tel"
                      iName="Phone"
                      required={true}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="text-xl font-bold font-pangaia">
                Date of Birth
              </label>
              <Field name="dob">
                {({ field }) => (
                  <InputComponent
                    {...field}
                    iType="date"
                    iName="Date of Birth"
                    required={true}
                  />
                )}
              </Field>
              <ErrorMessage
                name="dob"
                component="div"
                className="text-red-500"
              />
            </div>

            <Field name="education">
              {({ field }) => (
                <InputComponent
                  {...field}
                  iType="text"
                  iName="Highest Qualification"
                  required={true}
                />
              )}
            </Field>
            <ErrorMessage
              name="education"
              component="div"
              className="text-red-500"
            />

            <div className="w-full">
              <label className="text-xl font-bold font-pangaia">Address</label>
              <Field name="address">
                {({ field }) => (
                  <TextareaComponent
                    {...field}
                    pText="Enter your address here"
                  />
                )}
              </Field>
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="w-full">
              <label className="text-xl font-bold font-pangaia">
                Work Experience
              </label>
              <Field name="workExperience">
                {({ field }) => (
                  <TextareaComponent
                    {...field}
                    pText="Enter your work experience here"
                  />
                )}
              </Field>
              <ErrorMessage
                name="workExperience"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mb-4">
              <label className="text-xl font-bold font-pangaia">Skills</label>
              <div className="flex items-center gap-4 mt-2">
                {[
                  "Content Moderation",
                  "Team Management",
                  "Technical Troubleshooting",
                ].map((skill) => (
                  <label key={skill} className="flex items-center">
                    <Field type="checkbox" name="skills" value={skill} />
                    <span className="ml-2">{skill}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage
                name="skills"
                component="div"
                className="text-red-500"
              />
            </div>

            <Field name="domainOfTeaching">
              {({ field }) => (
                <InputComponent
                  {...field}
                  iType="text"
                  iName="Domain of Teaching"
                  required={true}
                />
              )}
            </Field>
            <ErrorMessage
              name="domainOfTeaching"
              component="div"
              className="text-red-500"
            />

            <div className="w-1/3">
              <Field>
                {({ form }) => (
                  <MyButton4
                    bType="submit"
                    classDesign="bg-highlight before:bg-highlight_hover text-dark_primary_text py-1"
                    buttonName="Submit Application"
                    disabled={form.isSubmitting}
                  />
                )}
              </Field>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <InputImageVideo
          imageName="Upload Resume/CV with photo:"
          fileType="file"
          onChange={(e) => handleImageUpload(e.currentTarget.files[0])}
        />
      </div>
    </section>
  );
};

export default CareerTeacherForm;
