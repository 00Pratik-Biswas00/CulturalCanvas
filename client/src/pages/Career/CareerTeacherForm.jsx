import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextareaComponent from "../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../components/Input/InputImageVideo";
import MyButton4 from "../../components/Buttons/MyButton4";
import img1 from "../../assets/career/admins.png";
import { useTranslation } from "react-i18next";

const CareerTeacherForm = () => {
  const { t } = useTranslation();
  const careerInstructorContent = t("CareerData", { returnObjects: true });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    education: "",
    workExperience: "",
    skills: [],
    availability: "",
    languages: "",
    technicalSkills: "",
    adminTools: "",
    problemSolving: "",
    scenarioResponse: "",
    portfolio: null,
    socialLinks: "",
    motivation: "",
    references: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, portfolio: e.target.files[0] });
  };

  const handleSkillsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      skills: checked
        ? [...prev.skills, value]
        : prev.skills.filter((skill) => skill !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add an API call here to send the formData to your backend.
  };

  return (
    <section
      className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-5 pb-14 px-16 duration-300 min-h-screen relative w-full bg-contain bg-fixed  bg-no-repeat bg-center
 
  "
    >
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

      <form
        className="flex flex-col  gap-3 justify-center rounded-lg py-10  px-20  w-full"
        onSubmit={handleSubmit}
      >
        <InputComponent
          iType={"text"}
          iName={"Full Name"}
          required={true}
          // value={formData.fullName}
        />

        <div className="flex gap-5">
          <InputComponent
            iType={"email"}
            iName={"Email"}
            required={true}
            // value={formData.email}
          />

          <InputComponent
            iType={"tel"}
            iName={"Phone"}
            required={true}
            // value={formData.phone}
          />
        </div>

        <div className="w-full">
          <label className="text-xl font-bold font-pangaia ">
            Date of Birth
          </label>
          <InputComponent iType={"date"} required={true} />
        </div>

        <InputComponent
          iType={"text"}
          iName={"Highest Qualification"}
          required={true}
          // value={formData.education}
        />

        <div className="w-full">
          <label className="text-xl font-bold font-pangaia ">Address</label>
          <TextareaComponent name="address" pText={"Enter your address here"} />
        </div>

        <div className="w-full">
          <label className="text-xl font-bold font-pangaia ">
            Work Experience
          </label>
          <TextareaComponent
            name="work-experience"
            pText={"Enter your work experience here"}
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
                <input
                  type="checkbox"
                  value={skill}
                  onChange={handleSkillsChange}
                />
                <span className="ml-2">{skill}</span>
              </label>
            ))}
          </div>
        </div>

        <InputComponent
          iType={"text"}
          iName={"Domain of Teaching"}
          required={true}
          // value={formData.education}
        />

        <InputImageVideo
          imageName={`Upload Resume/CV with photo:`}
          fileType="file"
        />
        {/* Submit */}

        <div className=" w-1/3">
          <MyButton4
            bType={"submit"}
            classDesign={
              "bg-highlight before:bg-highlight_hover  text-dark_primary_text py-1 "
            }
            buttonName={"Submit Application"}
          />
        </div>
      </form>
    </section>
  );
};

export default CareerTeacherForm;
