import Blog from "../models/blog.js";
import User from "../models/user.js";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";
import { deletePhoto, videoDelete } from "../routes/upload.js";

const blogResolvers = {
  Query: {
    getBlogs: async () => {
      try {
        return await Blog.find({ verified: true }).populate("author");
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

        await newBlog.save();
        return true;
      } catch (err) {
        throw new Error("Error creating blog: " + err.message);
      }
    },

    verifyBlog: async (_, { id }, { userId }) => {
      try {
        const currentUser = await User.findById(userId);
        if (
          !currentUser &&
          (currentUser.role !== "admin" || currentUser.role !== "owner")
        ) {
          throw new ForbiddenError("Only admins can verify blogs.");
        }

        await Blog.findByIdAndUpdate(id, { verified: true }, { new: true });

        return true;
      } catch (err) {
        throw new Error("Error verifying blog: " + err.message);
      }
    },

    deleteBlog: async (_, { id }, { userId }) => {
      try {
        const blog = await Blog.findById(id);
        const currentUser = await User.findById(userId);
        if (
          !currentUser &&
          (currentUser.role !== "admin" ||
            currentUser.role !== "owner" ||
            blog.author.toString() !== currentUser.id)
        ) {
          throw new ForbiddenError(
            "Only admins or blog-owners can delete blogs."
          );
        }

        if (!blog) throw new Error("Blog not found");

        if (blog.author.toString() !== userId && currentUser.role !== "admin") {
          throw new ForbiddenError("You can only delete your own blogs.");
        }

        if (blog.image && blog.image.public_id) {
          await deletePhoto(blog.image.public_id);
        }

        if (blog.video && blog.video.Bucket && blog.video.Key) {
          videoDelete({ Bucket: blog.video.Bucket, Key: blog.video.Key });
        }

        await Blog.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.error("Error deleting blog:", err);
        throw new Error("Error deleting blog: " + err.message);
      }
    },
  },
};

export default blogResolvers;
