import React from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import BlogsVlogs from "../../pages/BlogsVlogs";
import { GET_UNVERIFIED_BLOGS } from "../../graphql/blog";

const AdminContents = () => {
  const user = useSelector((state) => state.user?.userInfo);
  const [blogsVlogs, setBlogsVlogs] = useState([]);
  const { data, loading, error, refetch } = useQuery(GET_UNVERIFIED_BLOGS);
  useEffect(() => {
    if (data) {
      setBlogsVlogs(data.getUnverifiedBlogs);
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

export default AdminContents;
