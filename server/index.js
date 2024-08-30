import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Server is running...");
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Database connected successfully.");
    })
    .catch((error) => {
        console.log("Error connecting to database: " + JSON.stringify(error));
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
