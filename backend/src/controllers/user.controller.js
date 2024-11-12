import { User } from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const jwtSecret = process.env.jwt_secret;
    if (!jwtSecret) throw new Error("JWT secret not found");

    const { username, password } = req.body;
    const findexist = await User.findOne({ username });
    if (findexist) {
      return res.status(400).json("User already exist");
    }
    const created = await User.create({ username, password });

    if (!created) {
      return res.status(400).json({ error: "Cannot register user" });
    }

    const token = jsonwebtoken.sign({ userId: created._id }, jwtSecret, {
      expiresIn: "1h",
    });

    res
      .cookie("token", token, { httpOnly: true })
      .status(201)
      .json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
