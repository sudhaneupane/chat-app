import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.frontend_url, credentials: true }));
app.use(express.json());

app.get("/test", (req, res) => {
  res.json("test ok");
});

import userRouter from "./src/routers/user.router.js";

app.use("/register", userRouter);
mongoose
  .connect(`${process.env.mongodb_url} `)
  .then(() => {
    console.log("db connected ");
    app.listen(4000, () => {
      console.log("running at port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
