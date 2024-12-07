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
        const blog = await Blog.findById(id)
          .populate("author")
          .populate("comments.author");
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
    getTHCrossedBlogs: async () => {
      try {
        return await Blog.find({
          // likes: { $exists: true, $not: { $size: 0 } },
          likes: { $exists: true, $size: { $gt: process.env.TH_CROSS } },
          contentCategory: "Heritage",
        })
          .populate("author")
          .populate("comments.author");
      } catch (err) {
        throw new Error("Error fetching TH crossed blogs: " + err.message);
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

        const blog = await Blog.findByIdAndUpdate(
          id,
          { verified: true },
          { new: true }
        );
        const author = await User.findById(blog.author);
        author.blogs.push(blog._id);
        await author.save();
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
    updateBlog: async (_, { id, input }, { userId }) => {
      try {
        if (!userId) {
          throw new AuthenticationError(
            "You must be logged in to update a blog."
          );
        }

        const blog = await Blog.findById(id);
        if (!blog) {
          throw new Error("Blog not found.");
        }

        if (blog.author.toString() !== userId) {
          throw new ForbiddenError("You can only update your own blogs.");
        }

        const { content, originLocation } = input;
        if (content) {
          blog.content = content;
        }
        if (originLocation) blog.originLocation = originLocation;

        await blog.save();
        return true;
      } catch (err) {
        throw new Error("Error updating blog: " + err.message);
      }
    },
    postComment: async (_, { input }, { userId }) => {
      const { blogId, content } = input;

      if (!userId) {
        throw new AuthenticationError(
          "You must be logged in to post a comment."
        );
      }

      try {
        const blog = await Blog.findById(blogId);
        if (!blog) {
          throw new Error("Blog not found.");
        }

        const comment = {
          author: userId,
          content,
        };

        blog.comments.push(comment);

        await blog.save();

        const populatedComment = await Blog.populate(
          blog.comments[blog.comments.length - 1],
          {
            path: "author",
          }
        );

        return {
          author: populatedComment.author,
          content: populatedComment.content,
          createdAt: populatedComment.createdAt,
        };
      } catch (err) {
        throw new Error("Error posting comment: " + err.message);
      }
    },
    likeBlog: async (_, { id }, { userId }) => {
      if (!userId) {
        throw new AuthenticationError("You must be logged in to like a blog.");
      }

      try {
        const blog = await Blog.findById(id);
        if (!blog) {
          throw new Error("Blog not found.");
        }
        const alreadyLiked = blog.likes.includes(userId);
        if (alreadyLiked) {
          blog.likes = blog.likes.filter((user) => user.toString() !== userId);
        } else {
          blog.likes.push(userId);
        }
        await blog.save();
        return blog.likes.length;
      } catch (err) {
        throw new Error("Error liking blog: " + err.message);
      }
    },
  },
};

export default blogResolvers;
