import React, { useEffect, useState } from "react";
import { CiEdit, CiLocationOn } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import MyButton4 from "../../components/Buttons/MyButton4";
import ReactPlayer from "react-player";
import SquareAnimation from "../../components/Blobs/SquareAnimation";
import { GET_BLOG, LIKE_BLOG, POST_COMMENT } from "../../graphql/blog";
import CommentSection from "./CommentSection";
import HeartAnimation from "./HeartAnimation";

const SingleBlogVlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [doubleClickTimer, setDoubleClickTimer] = useState(null);
  const navigate = useNavigate();
  const [likeBlog] = useMutation(LIKE_BLOG, {
    variables: { id },
    update(cache, { data: { likeBlog } }) {
      const existingBlog = cache.readQuery({
        query: GET_BLOG,
        variables: { id },
      });

      if (existingBlog) {
        cache.writeQuery({
          query: GET_BLOG,
          variables: { id },
          data: {
            getBlog: {
              ...existingBlog.getBlog,
              likes: likeBlog.likes,
            },
          },
        });
      }
    },
  });

  const handleLike = () => {
    likeBlog();
    setShowHeartAnimation(true);
    setTimeout(() => setShowHeartAnimation(false), 1000);
    setIsLiked((prev) => !prev);
  };

  const [postComment] = useMutation(POST_COMMENT, {
    update(cache, { data: { postComment } }) {
      const existingBlog = cache.readQuery({
        query: GET_BLOG,
        variables: { id: blog.id },
      });

      if (existingBlog) {
        cache.writeQuery({
          query: GET_BLOG,
          variables: { id: blog.id },
          data: {
            ...existingBlog,
            getBlog: {
              ...existingBlog.getBlog,
              comments: [...existingBlog.getBlog.comments, postComment],
            },
          },
        });
      }
    },
  });

  const handleAddComment = async (content) => {
    try {
      await postComment({
        variables: {
          input: { blogId: blog.id, content },
        },
      });
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  const user = useSelector((state) => state.user?.userInfo);
  const { loading, error, data } = useQuery(GET_BLOG, { variables: { id } });

  useEffect(() => {
    if (data && data.getBlog) {
      setBlog(data.getBlog);
      setIsLiked(data.getBlog.likes.some((user) => user.id === user?._id));
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
        <h1 className="text-5xl font-pangaia">{blog?.title}</h1>
        <div>
          <p className="italic font-medium font-pangaia">
            by {blog?.author?.name}
          </p>
        </div>

        {user?.role === "user" && blog?.author?.id === user?._id && (
          <MyButton4
            buttonName={"Edit Post"}
            onClick={() => navigate(`/blogs-vlogs/edit-blog-vlog/${blog?.id}`)}
            buttonIcon={<CiEdit className="w-6 h-6" />}
            classDesign={
              "before:bg-highlight_hover_dark bg-highlight_hover text-dark_primary_text z-10"
            }
          />
        )}
      </div>

      {/* blog image */}
      <div
        className="relative z-10 cursor-pointer"
        onClick={() => {
          if (doubleClickTimer) {
            clearTimeout(doubleClickTimer);
            handleLike();
            setDoubleClickTimer(null);
          } else {
            setDoubleClickTimer(
              setTimeout(() => {
                setDoubleClickTimer(null);
              }, 300)
            );
          }
        }}
      >
        <img
          src={blog?.image?.url}
          alt="blog cover image"
          className="outline-double outline-8 -outline-offset-[20px] outline-white rounded-xl"
        />
        <HeartAnimation isVisible={showHeartAnimation} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            handleLike();
          }}
          className="absolute bottom-4 right-4 bg-white bg-opacity-70 p-2 rounded-full"
        >
          <Heart
            className={`w-6 h-6 ${
              isLiked ? "text-red-500 fill-current" : "text-gray-500"
            }`}
          />
        </motion.button>
      </div>

      {/* state details */}
      <div className="flex items-center w-full justify-evenly">
        <h1 className="font-pangaia text-xl font-bold">State: {blog?.state}</h1>
        <h1 className="font-pangaia text-xl font-bold">City: {blog?.city}</h1>
        <a
          href={blog?.originLocation}
          target="_blank"
          rel="noopener noreferrer"
          className="hollowBorder blogCards font-searchBars text-lg p-2 rounded-full bg-transparent text-primary_text dark:text-dark_primary_text"
        >
          <CiLocationOn className="w-6 h-6" />
        </a>
      </div>

      <div
        className="bg-background1 dark:bg-dark_background1 z-10"
        dangerouslySetInnerHTML={{ __html: blog?.content }}
      />

      {blog && blog.video && blog.video.Location && (
        <div className="z-10">
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
      {user?.role === "user" && (
        <CommentSection
          comments={blog.comments}
          onAddComment={handleAddComment}
        />
      )}
      <SquareAnimation />
    </section>
  );
};

export default SingleBlogVlog;
