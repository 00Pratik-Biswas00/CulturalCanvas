import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.get("/total-users", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    res.status(200).json({
      success: true,
      totalUsers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving total users",
      error: error.message,
    });
  }
});

export default router;
