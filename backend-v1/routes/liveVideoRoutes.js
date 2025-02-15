import express from "express";
import dotenv from "dotenv";
import liveVideoSessionController from "../controller/getLiveMeetingsController.js";

dotenv.config();
const getActiveSessionRoute = express();

getActiveSessionRoute.get("/", async (req, res) => {
  try {
    res.status(200).json(await liveVideoSessionController());
  } catch (error) {
    console.log("Error");
    res.status(500).send("Server error");
  }
});

export default getActiveSessionRoute;
