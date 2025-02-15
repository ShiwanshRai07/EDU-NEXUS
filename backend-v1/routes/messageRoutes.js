import express from "express";
import {
  postMessage,
  addComment,
  getMessages,
} from "../controller/chatController.js";
import authenticateToken from "../utils/authUtils.js";

const messageRouter = express.Router();

messageRouter.post("/post",authenticateToken, postMessage); // User A posts a message
messageRouter.post("/comment",authenticateToken, addComment); // User B comments on a message
messageRouter.get("/messages",authenticateToken, getMessages); // Fetch messages with comments

export default messageRouter;
