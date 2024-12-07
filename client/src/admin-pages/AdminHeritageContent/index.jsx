import { useSelector } from "react-redux";
import { GET_HERITAGE_BLOGS } from "../../graphql/blog";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import BlogsVlogs from "../../pages/BlogsVlogs";
import React from "react";

const AdminHeritageContents = () => {
  const user = useSelector((state) => state.user?.userInfo);
  const [blogsVlogs, setBlogsVlogs] = useState([]);
  const { data, loading, error, refetch } = useQuery(GET_HERITAGE_BLOGS);
  useEffect(() => {
    if (data) {
      setBlogsVlogs(data.getTHCrossedBlogs);
    }
  }, [data]);
  useEffect(() => {
    const fetchData = async () => {
      await refetch();
    };
    fetchData();
  }, [refetch]);
  return (
    <div>
      <BlogsVlogs blogsVlogs={blogsVlogs} loading={loading} user={user} />
    </div>
  );
};

export default AdminHeritageContents;
