// import routes
import express from "express";
import cors from "cors";
import messageRouter from "./routes/messageRoutes.js";
import getActiveSessionRoute from "./routes/liveVideoRoutes.js";
import connectDb from "./database/dbConnect.js";
// import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import bookNotesRouter from "./routes/bookNotesRoutes.js";
// db connect

// express cors import and config

// server init of express

const server = express();

server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
connectDb();
server.use(express.json());

//show routes
// server.use("/route", <controller>)
server.use("/live-meetings", getActiveSessionRoute);
//
// server.use("/users", userRouter);
server.use("/messages", messageRouter);

server.use("/me", authRouter);
server.use("/books", bookNotesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server Running" });
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log("Server STARTED at", PORT);
});
