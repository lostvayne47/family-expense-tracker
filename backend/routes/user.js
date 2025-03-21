import express from "express";
import UserSchema from "../models/userModel.js";
const userRouter = express.Router();

//Create user
userRouter.post("/createuser", async (req, res) => {
  try {
    let user = await UserSchema.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        success,
        error: "Email already exists",
      });
    } else {
      const user = await UserSchema.create({
        userName: req.body.name,
        userEmail: req.body.email,
        userPassword: req.body.password,
        userGroups: req.body?.userGroups,
        userExpenses: req.body?.userExpenses,
        date: Date.now(),
      });
      res.send(user);
    }
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Get All Users
userRouter.get("/getallusers", async (req, res) => {
  try {
    const user = await UserSchema.find();
    res.send(user);
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Get User
userRouter.get("/getuser/:id", async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.id);
    res.send(user);
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});
export default userRouter;
