import jwt from "jsonwebtoken";
import User from "./../models/user.js";
import "dotenv/config";

export const authenticateUser = async (req) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Authorization header missing or invalid");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new Error("Authorization token not found");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      throw new Error("Unauthorized");
    }

    return { userId: decoded._id };
  } catch (error) {
    throw new Error("Unauthorized");
  }
};
