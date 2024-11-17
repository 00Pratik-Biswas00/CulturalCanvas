import { useSelector } from "react-redux";
import { use } from "i18next";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BLOG, GET_BLOGS } from "../../graphql/blog";
import { toast } from "sonner";
import React, {  useEffect, useState } from "react";
import BlogsVlogs from "../BlogsVlogs";

const UserBlogsVLogs = () => {
  const user = useSelector((state) => state.user?.userInfo);
  const [blogsVlogs, setBlogsVlogs] = useState([]);
  const { data, loading, error, refetch } = useQuery(GET_BLOGS);
  const loadBlogs = async () => {
    await refetch();
  };

  useEffect(() => {
    if (data) {
      loadBlogs();
      setBlogsVlogs(data.getBlogs);
    }
  }, [data]);
  const [deleteBlog] = useMutation(DELETE_BLOG, {
    update(cache, { data: { deleteBlog } }) {
      if (deleteBlog) {
        cache.modify({
          fields: {
            getBlogs(existingBlogs = []) {
              return existingBlogs.filter((blog) => blog.id !== deleteBlog.id);
            },
          },
        });
      }
    },
    onCompleted: () => {
      toast.error("Blog deleted successfully");
    },
  });

  const handleDelete = (id) => {
    deleteBlog({ variables: { id } }).catch((err) => console.error(err));
  };
  return (
    <BlogsVlogs
      blogsVlogs={blogsVlogs}
      handleDelete={handleDelete}
      loading={loading}
      user={user}
    />
  );
};

export default UserBlogsVLogs;
