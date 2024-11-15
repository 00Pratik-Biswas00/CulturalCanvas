import React from "react";
import SingleBlogVlog from "../../pages/SingleBlogVlog";
import MyButton3 from "../../components/Buttons/MyButton3";
import { IoMdDoneAll } from "react-icons/io";

const AdminSingleBlogVerification = () => {
  return (
    <div className="bg-background1 dark:bg-dark_background1">
      <SingleBlogVlog />
      <div className="flex flex-col items-center justify-center pb-5">
        <MyButton3
          buttonName="Approved"
          classDesign={
            "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
          }
          buttonIcon={<IoMdDoneAll />}
        />
      </div>
    </div>
  );
};

export default AdminSingleBlogVerification;
