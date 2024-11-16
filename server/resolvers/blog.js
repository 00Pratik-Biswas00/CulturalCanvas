import Blog from "../models/blog.js";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";

const blogResolvers = {
  Query: {
    getBlogs: async () => {
      try {
        return await Blog.find().populate("author");
      } catch (err) {
        throw new Error("Error fetching blogs: " + err.message);
      }
    },
    getBlog: async (_, { id }) => {
      try {
        const blog = await Blog.findById(id).populate("author");
        if (!blog) throw new Error("Blog not found");
        return blog;
      } catch (err) {
        throw new Error("Error fetching blog: " + err.message);
      }
    },
    getUnverifiedBlogs: async () => {
      try {
        return await Blog.find({ verified: false }).populate("author");
      } catch (err) {
        throw new Error("Error fetching unverified blogs: " + err.message);
      }
    },
  },

  Mutation: {
    createBlog: async (_, { input }, { userId }) => {
      try {
        if (!userId) {
          throw new AuthenticationError(
            "You must be logged in to create a blog."
          );
        }

        const newBlog = new Blog({
          ...input,
          author: userId,
        });

        const savedBlog = await newBlog.save();
        return savedBlog;
      } catch (err) {
        throw new Error("Error creating blog: " + err.message);
      }
    },

    verifyBlog: async (_, { id }, { currentUser }) => {
      try {
        if (
          !currentUser ||
          currentUser.role !== "admin" ||
          currentUser.role !== "owner"
        ) {
          throw new ForbiddenError("Only admins can verify blogs.");
        }

        const blog = await Blog.findByIdAndUpdate(
          id,
          { verified: true },
          { new: true }
        );

        if (!blog) {
          throw new Error("Blog not found");
        }

        return blog;
      } catch (err) {
        throw new Error("Error verifying blog: " + err.message);
      }
    },

    deleteBlog: async (_, { id }, { userId, currentUser }) => {
      try {
        if (
          !currentUser ||
          (currentUser.role !== "admin" && currentUser.role !== "owner")
        ) {
          throw new ForbiddenError("Only admins or owners can delete blogs.");
        }

        const blog = await Blog.findById(id);
        if (!blog) throw new Error("Blog not found");

        if (blog.author.toString() !== userId && currentUser.role !== "admin") {
          throw new ForbiddenError("You can only delete your own blogs.");
        }

        await Blog.findByIdAndDelete(id);
        return true;
      } catch (err) {
        throw new Error("Error deleting blog: " + err.message);
      }
    },
  },
};

export default blogResolvers;
