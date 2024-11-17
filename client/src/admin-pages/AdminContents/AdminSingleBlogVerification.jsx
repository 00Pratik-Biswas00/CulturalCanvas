import React from "react";
import SingleBlogVlog from "../../pages/SingleBlogVlog";
import MyButton3 from "../../components/Buttons/MyButton3";
import { IoMdDoneAll } from "react-icons/io";
import { toast } from "sonner";
import { VERIFY_BLOG } from "../../graphql/blog";
import { useMutation } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

const AdminSingleBlogVerification = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [verifyBlog, { loading, error }] = useMutation(VERIFY_BLOG, {
    variables: { id },
    onCompleted: () => {
      toast.success("Blog verified successfully!");
    },
    onError: (err) => {
      console.error("Error verifying blog: ", err.message);
      toast.error(err.message);
    },
  });

  const handleVerifyClick = () => {
    verifyBlog();
    navigate("/contents-acdprsIndia24");
  };
  return (
    <div className="bg-background1 dark:bg-dark_background1">
      <SingleBlogVlog />
      <div className="flex flex-col items-center justify-center pb-5">
        <MyButton3
          buttonName={loading ? "Verifying..." : "Verify Blog"}
          classDesign={
            "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text "
          }
          buttonIcon={<IoMdDoneAll />}
          onClick={handleVerifyClick}
        />
      </div>
    </div>
  );
};

export default AdminSingleBlogVerification;
