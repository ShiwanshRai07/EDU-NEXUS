// import routes
import express from "express";
import cors from "cors";
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

server.use(express.json());

//show routes
// server.use("/route", <controller>)

//
server.get("/EDU-NEXUS", (req, res) => {
  res.status(200).json({ message: "Server Running" });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log("Server STARTED at", PORT);
});
