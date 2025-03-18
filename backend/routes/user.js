import express from "express";
import UserSchema from "../models/userModel.js";
const userRouter = express.Router();

//Create user
userRouter.post("/createuser", async (req, res) => {
  try {
    const user = await UserSchema.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

export default userRouter;
