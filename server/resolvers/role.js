import User from "../models/user.js";
import { AuthenticationError, ForbiddenError } from "apollo-server-express";

const roleResolvers = {
  Query: {
    getAdmins: async () => {
      try {
        return await User.find({ role: "admin" });
      } catch (err) {
        throw new Error("Error fetching admins");
      }
    },
    getSellers: async () => {
      try {
        return await User.find({ role: "seller" });
      } catch (err) {
        throw new Error("Error fetching sellers");
      }
    },
    getUsers: async () => {
      try {
        return await User.find({ role: "user" });
      } catch (err) {
        throw new Error("Error fetching users");
      }
    },
  },
  Mutation: {
    deleteUser: async (_, { id }, { req, userId }) => {
      try {
        const currentUser = await User.findById(userId);
        if (!currentUser) {
          throw new AuthenticationError("You must be logged in.");
        }
        if (currentUser.role !== "admin" && currentUser.role !== "owner") {
          throw new ForbiddenError(
            "You do not have permission to perform this action."
          );
        }
        const userToDelete = await User.findById(id);
        if (!userToDelete) {
          throw new Error("User not found.");
        }
        if (userToDelete.role === "admin") {
          if (currentUser.role !== "owner") {
            throw new ForbiddenError(
              "Only the owner can delete admin accounts."
            );
          }
        } else if (
          userToDelete.role === "seller" ||
          userToDelete.role === "user"
        ) {
          if (currentUser.role !== "admin" && currentUser.role !== "owner") {
            throw new ForbiddenError(
              "Only admin or owner can delete seller or user accounts."
            );
          }
        } else {
          throw new Error("Invalid role.");
        }
        await User.findByIdAndDelete(id);
        return true;
      } catch (err) {
        console.error(err);
        throw new Error("Error deleting user: " + err.message);
      }
    },
  },
};

export default roleResolvers;
