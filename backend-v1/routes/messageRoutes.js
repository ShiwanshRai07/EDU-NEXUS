import express from "express";
import {
  postMessage,
  addComment,
  getMessages,
} from "../controller/chatController.js";

const messageRouter = express.Router();

messageRouter.post("/post", postMessage); // User A posts a message
messageRouter.post("/comment", addComment); // User B comments on a message
messageRouter.get("/messages", getMessages); // Fetch messages with comments

export default messageRouter;
