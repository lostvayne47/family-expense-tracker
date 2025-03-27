import express from "express";
import UserSchema from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fetchUser from "../middleware/fetchUser.js";
const userRouter = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;
//Create user
userRouter.post("/createuser", async (req, res) => {
  try {
    let user = await UserSchema.findOne({ userEmail: req.body.userEmail });
    if (user) {
      return res.status(400).json({
        success: false,
        error: "Email already exists",
        message: "Email already exists",
      });
    } else {
      const salt = (await bcrypt.genSalt(10)).toString();
      const secPass = (
        await bcrypt.hash(req.body.userPassword, salt)
      ).toString();

      const user = await UserSchema.create({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userPassword: secPass,
        userGroups: req.body?.userGroups,
        userExpenses: req.body?.userExpenses,
        date: Date.now(),
      });
      // //Show what was sent as response
      // const data = {
      //   user: {
      //     id: user.id,
      //   },
      // };
      // const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success: true, message: "User Created Successfully" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: error.message,
    });
  }
});

// //Get user
userRouter.get("/getuser", fetchUser, async (req, res) => {
  try {
    const userId = req.user?.id;
    const userDetails = await UserSchema.findById(userId).select(
      "-userPassword"
    );
    res.send(userDetails);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: error.message,
    });
  }
});

//Authenticate user
userRouter.post("/login", async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    let user = await UserSchema.findOne({ userEmail: userEmail });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Invalid Credentials",
        message: "Please try to login with correct credentials",
      });
    } else {
      const passwordCompare = await bcrypt.compare(
        userPassword,
        user.userPassword
      );
      if (!passwordCompare) {
        return res.status(400).json({
          success: false,
          error: "Invalid Credentials",
          message: "Please try to login with correct credentials",
        });
      }
      //Show what was sent as response
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      return res.status(200).json({ success: true, authToken: authToken });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
      message: error.message,
    });
  }
});

export default userRouter;
