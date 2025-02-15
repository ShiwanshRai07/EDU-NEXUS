import express from "express";
import {
  postBookNote,
  getBookNotes,
} from "../controller/bookNotesController.js";
import authenticateToken from "../utils/authUtils.js";

const bookNotesRouter = express.Router();

bookNotesRouter.post("/post", authenticateToken, postBookNote);
bookNotesRouter.get("/notes", authenticateToken, getBookNotes); // Protect if needed

export default bookNotesRouter;
