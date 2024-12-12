import React from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextareaComponent from "../../components/Textarea/TextareaComponent";
import InputImageVideo from "../../components/Input/InputImageVideo";
import MyButton4 from "../../components/Buttons/MyButton4";
import { useTranslation } from "react-i18next";
const SellerForm = () => {
  const { t } = useTranslation();
  const careerAdminContent = t("CareerData", { returnObjects: true });
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

      <InputComponent iType="text" iName="Full Name" required={true} />

      <InputComponent iType="email" iName="Email" required={true} />

      <InputComponent iType="tel" iName="Phone" required={true} />

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

export default SellerForm;
