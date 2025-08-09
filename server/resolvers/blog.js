import Blog from "../models/blog.js";
import User from "../models/user.js";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";
import { deletePhoto, videoDelete } from "../routes/upload.js";
import { getFromCache, setToCache } from "../helpers/redisUtility.js";
import { redisClient } from "../config.js";
import authorLoader from "../loaders/authorLoader.js";

const blogResolvers = {
  Query: {
    getBlogs: async (_, { page = 1, limit = 10 }) => {
      const cacheKey = `getBlogs:verified=true:page=${page}:limit=${limit}`;
      try {
        const cachedBlogs = await getFromCache(cacheKey);
        if (cachedBlogs) {
          return {
            blogs: cachedBlogs.map((blog) => ({
              ...blog,
              id: blog._id || blog.id,
              author: {
                ...blog.author,
                id: blog.author._id || blog.author.id,
              },
            })),
            total: cachedBlogs.length,
            totalPages: Math.ceil(cachedBlogs.length / limit),
            currentPage: page,
          };
        }

        const skip = (page - 1) * limit;

        const blogs = await Blog.find({ verified: true })
          .select("title author verified image contentType")
          .skip(skip)
          .limit(limit)
          .lean();

        const authorIds = blogs.map((blog) => blog.author.toString());
        const authors = await authorLoader.loadMany(authorIds);

        const blogsWithId = blogs.map((blog, index) => ({
          ...blog,
          id: blog._id.toString(),
          author: authors[index],
        }));
        const total = await Blog.countDocuments({ verified: true });
        await setToCache(cacheKey, blogsWithId);
        return {
          blogs: blogsWithId,
          total,
          totalPages: Math.ceil(total / limit),
          currentPage: page,
        };
      } catch (err) {
        throw new Error("Error fetching blogs: " + err.message);
      }
    },

    getBlog: async (_, { id }) => {
      const cacheKey = `getBlog:${id}`;
      try {
        const cachedBlog = await getFromCache(cacheKey);
        if (cachedBlog) {
          return {
            ...cachedBlog,
            id: cachedBlog._id || cachedBlog.id,
            author: {
              ...cachedBlog.author,
              id: cachedBlog.author._id || cachedBlog.author.id,
            },
            comments: cachedBlog.comments.map((comment) => ({
              ...comment,
              author: {
                ...comment.author,
                id: comment.author._id || comment.author.id,
              },
            })),
          };
        }
        const blog = await Blog.findById(id)
          .populate("author")
          .populate("comments.author")
          .lean();

        if (!blog) throw new Error("Blog not found");

        const blogWithId = {
          ...blog,
          id: blog._id,
          author: {
            ...blog.author,
            id: blog.author._id,
          },
          comments: blog.comments.map((comment) => ({
            ...comment,
            author: {
              ...comment.author,
              id: comment.author._id,
            },
          })),
        };

        await setToCache(cacheKey, blogWithId);
        return blogWithId;
      } catch (err) {
        throw new Error("Error fetching blog: " + err.message);
      }
    },
    getUnverifiedBlogs: async (_, { page = 1, limit = 10 }) => {
      const cacheKey = `getUnverifiedBlogs:verified=false:page=${page}:limit=${limit}`;
      try {
        const cachedResult = await getFromCache(cacheKey);
        if (cachedResult) {
          return {
            ...cachedResult,
            blogs: cachedResult.blogs.map((blog) => ({
              ...blog,
              id: blog._id || blog.id,
              author: {
                ...blog.author,
                id: blog.author._id || blog.author.id,
              },
            })),
          };
        }

        const skip = (page - 1) * limit;

        const blogs = await Blog.find(
          { verified: false },
          "title author verified image contentType"
        )
          .populate("author")
          .skip(skip)
          .limit(limit);

        const total = await Blog.countDocuments({ verified: false });

        const result = {
          blogs,
          total,
          totalPages: Math.ceil(total / limit),
          currentPage: page,
        };

        await setToCache(cacheKey, result);
        return result;
      } catch (err) {
        throw new Error("Error fetching unverified blogs: " + err.message);
      }
    },

    getTHCrossedBlogs: async (_, { page = 1, limit = 10 }) => {
      const cacheKey = `getTHCrossedBlogs:likes=100:page=${page}:limit=${limit}`;
      try {
        const cachedResult = await getFromCache(cacheKey);
        if (cachedResult) {
          return cachedResult.map((blog) => ({
            ...blog,
            id: blog._id || blog.id,
            author: {
              ...blog.author,
              id: blog.author._id || blog.author.id,
            },
          }));
        }

        const skip = (page - 1) * limit;

        const blogs = await Blog.aggregate([
          {
            $match: {
              contentCategory: "Heritage",
              "likes.1": { $exists: true },
            },
          },
          { $sort: { createdAt: -1 } },
          { $skip: skip },
          { $limit: limit },
          {
            $lookup: {
              from: "users",
              localField: "author",
              foreignField: "_id",
              as: "author",
            },
          },
          { $unwind: "$author" },
          {
            $project: {
              title: 1,
              author: { id: "$author._id", name: "$author.name" },
              verified: 1,
              image: 1,
              contentType: 1,
            },
          },
        ]);

        await setToCache(cacheKey, blogs);
        return blogs;
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
        await redisClient.del("getBlogs");
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
        await redisClient.del("getBlogs");
        await redisClient.del(`getBlog:${id}`);

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
        await redisClient.del("getBlogs");
        await redisClient.del(`getBlog:${id}`);

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
        await redisClient.del(`getBlog:${id}`);

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
        await redisClient.del(`getBlog:${blogId}`);

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
        await redisClient.del(`getBlog:${id}`);

        return blog.likes.length;
      } catch (err) {
        throw new Error("Error liking blog: " + err.message);
      }
    },
  },
};

export default blogResolvers;
