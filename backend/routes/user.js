import express from "express";
import UserSchema from "../models/userModel.js";
import bcrypt from "bcrypt";

const userRouter = express.Router();

//Create user
userRouter.post("/createuser", async (req, res) => {
  try {
    let user = await UserSchema.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({
        error: "Email already exists",
      });
    } else {
      const salt = (await bcrypt.genSalt(10)).toString();
      const secPass = (await bcrypt.hash(req.body.password, salt)).toString();

      const user = await UserSchema.create({
        userName: req.body.name,
        userEmail: req.body.email,
        userPassword: secPass,
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

//Authenticate user
userRouter.post("/authuser", async (req, res) => {
  const { email, password } = req.body;

  let user = await UserSchema.findOne({ userEmail: email });

  if (!user) {
    return res.status(400).json({
      error: "Please try to login with correct credentials",
    });
  } else {
    const passwordCompare = await bcrypt.compare(password, user.userPassword);
    if (!passwordCompare) {
      return res.status(400).json({
        error: "Please try to login with correct credentials",
      });
    }
    return res.status(200).json({
      success: "Successfully Logged in",
    });
  }
});
export default userRouter;
