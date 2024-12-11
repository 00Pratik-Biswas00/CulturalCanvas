import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import InputComponent from "../../components/Input/InputComponent";
import TextareaComponent from "../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../components/Input/InputImageVideo";
import MyButton4 from "../../components/Buttons/MyButton4";
import { useTranslation } from "react-i18next";
import { adminvalidationSchema } from "../../utils/schemas";
import api from "../../config/axios";
import { CREATE_ADMIN } from "../../graphql/career";
import { toast } from "sonner";
import { useMutation } from "@apollo/client";

const CareerAdminForm = () => {
  const { t } = useTranslation();
  const careerAdminContent = t("CareerData", { returnObjects: true });
  const [imageInput, setImageInput] = React.useState(null);
  const handleImageUpload = async (file) => {
    // console.log("form submit");
    // return;
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
    gender: "",
    dob: "",
    address: "",
    education: "",
    workExperience: "",
    skills: [],
    languages: "",
  };
  const [createAdmin] = useMutation(CREATE_ADMIN, {
    onCompleted: () => {
      toast.success("Application submitted successfully!");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Failed to submit application.");
    },
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    // console.log("Form Data Submitted:", values);
    // return;
    const input = { ...values, portfolio: imageInput };
    try {
      await createAdmin({ variables: { input } });
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
          {careerAdminContent.careerAdmin.heading}
        </h1>
        <p className="">{careerAdminContent.careerAdmin.description}</p>

        <div className="space-y-4 w-full">
          <div className="flex justify-between w-full gap-5">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                {careerAdminContent.careerAdmin.sH1}
              </h2>
              <ul className="list-disc list-inside text-lg">
                {careerAdminContent.careerAdmin.sH1List.map((content, ind) => (
                  <li key={ind}>{content.des}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-3">
                {careerAdminContent.careerAdmin.sH2}
              </h2>
              <ul className="list-disc list-inside text-lg">
                {careerAdminContent.careerAdmin.sH2List.map((content, ind) => (
                  <li key={ind}>{content.des}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {careerAdminContent.careerAdmin.sH3}
                </h2>
                <ul className="list-disc list-inside text-lg">
                  {careerAdminContent.careerAdmin.sH3List.map(
                    (content, ind) => (
                      <li key={ind}>{content.des}</li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {careerAdminContent.careerAdmin.sH4}
                </h2>
                <ul className="list-disc list-inside text-lg">
                  {careerAdminContent.careerAdmin.sH4List.map(
                    (content, ind) => (
                      <li key={ind}>{content.des}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <img
              src={careerAdminContent.careerAdmin.careerImg}
              className=" w-[25rem] h-[25rem]"
            />
          </div>
        </div>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={adminvalidationSchema}
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

            <div className="mb-4">
              <label className="text-xl font-bold font-pangaia">Gender</label>
              <div className="flex items-center gap-4 mt-2">
                {["Male", "Female", "Non-Binary", "Others"].map((gender) => (
                  <label key={gender} className="flex items-center">
                    <Field type="radio" name="gender" value={gender} />
                    <span className="ml-2">{gender}</span>
                  </label>
                ))}
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500"
              />
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
                  "Multitasking",
                  "Website Maintenance",
                  "Data Analytics",
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

            <Field name="languages">
              {({ field }) => (
                <InputComponent
                  {...field}
                  iType="text"
                  iName="Languages Known"
                  required={true}
                />
              )}
            </Field>
            <ErrorMessage
              name="languages"
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
          imageName="Upload Resume/CV with photo (jpg, jpeg, png):"
          fileType="image"
          onChange={(e) => handleImageUpload(e.currentTarget.files[0])}
        />
      </div>
    </section>
  );
};

export default CareerAdminForm;
