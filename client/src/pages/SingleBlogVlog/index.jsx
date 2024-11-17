import React, { useEffect, useState } from "react";
import { CiEdit, CiLocationOn } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MyButton4 from "../../components/Buttons/MyButton4";
import ReactPlayer from "react-player";
import SquareAnimation from "../../components/Blobs/SquareAnimation";
import { GET_BLOG } from "../../graphql/blog";
import { useQuery } from "@apollo/client";
import { use } from "i18next";

const SingleBlogVlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.userInfo);
  const { loading, error, data } = useQuery(GET_BLOG, { variables: { id } });

  useEffect(() => {
    if (data && data.getBlog) {
      setBlog(data.getBlog);
    }
  }, [data]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!blog) {
    return <div>No blog found.</div>;
  }
  if (loading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <div className="loader"></div>
      </div>
    );
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300 min-h-screen flex flex-col items-center gap-5">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className=" text-5xl  font-pangaia">{blog?.title}</h1>
        <div>
          <p className=" italic font-medium font-pangaia">
            by {blog?.author?.name}
          </p>
        </div>

        {user?.role === "user" ? (
          <MyButton4
            buttonName={"Edit Post"}
            buttonIcon={<CiEdit className="w-6 h-6" />}
            classDesign={
              "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text z-10"
            }
          />
        ) : (
          ""
        )}
      </div>

      {/* blog image */}
      <div className=" z-10">
        <img
          src={blog?.image?.url}
          alt="blog cover image"
          className=" outline-double outline-8 -outline-offset-[20px] outline-white rounded-xl "
        />
      </div>

      {/* state details */}
      <div className="flex items-center w-full justify-evenly">
        <h1 className=" font-pangaia text-xl font-bold">
          State: {blog?.state}
        </h1>
        <h1 className=" font-pangaia text-xl font-bold">City: {blog?.city}</h1>
        <a
          href={blog?.originLocation}
          target="_blank"
          className={`hollowBorder blogCards font-searchBars  text-lg p-2 rounded-full bg-transparent text-primary_text dark:text-dark_primary_text `}
        >
          <CiLocationOn className=" w-6 h-6" />
        </a>
      </div>

      {/* blog content / vlog caption */}
      <div
        className="bg-background1 dark:bg-dark_background1 z-10"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      />

      {/* vlog content (if available) */}
      {blog && blog.video && blog.video.Location && (
        <div className=" z-10">
          <ReactPlayer
            url={blog.video.Location}
            width="100%"
            height="100%"
            className="max-w-full max-h-full m-auto"
            playing={false}
            controls
            config={{
              file: {
                attributes: { controlsList: "nodownload" },
              },
            }}
          />
        </div>
      )}

      <SquareAnimation />
    </section>
  );
};

export default SingleBlogVlog;
