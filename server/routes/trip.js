import express from "express";
import { requireSignin } from "../middlewares/verify.js";
import Trip from "../models/trip.js";

const router = express.Router();

router.post("/create", requireSignin, async (req, res) => {
  const { location, totalDays, budget, traveler, plan } = req.body;

  try {
    const trip = await Trip.create({
      location,
      totalDays,
      budget,
      traveler,
      plan,
      user: req.userID,
    });

    res.status(201).json(trip._id);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating trip", error: error.message });
  }
});

router.get("/trips/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const trips = await Trip.findById(id);
    res.status(200).json(trips);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving trips", error: error.message });
  }
});

router.get("/history", requireSignin, async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.userID });
    res.status(200).json(trips);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving trips", error: error.message });
  }
});

router.delete("/delete-trip", requireSignin, async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.body._id);
    res.sendStatus(200);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving trips", error: error.message });
  }
});

export default router;
