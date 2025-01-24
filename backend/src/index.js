import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
// routes
import authRouter from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  connectDB();
});
