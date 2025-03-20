import express from "express";
import UserSchema from "../models/userModel.js";
const userRouter = express.Router();

//   userName: { type: String, required: true },
//   userEmail: { type: String, required: true, unique: true },
//   userPassword: { type: String, required: true },
//   userGroups: { type: Array },
//   userExpenses: { type: Array },
//   date: { type: Date, default: Date.now() },

//Create user
userRouter.post("/createuser", async (req, res) => {
  try {
    const user = await UserSchema.create({
      userName: req.body.name,
      userEmail: req.body.email,
      userPassword: req.body.password,
      userGroups: req.body.userGroups,
      userExpenses: req.body.userExpenses,
      date: Date.now(),
    });
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

export default userRouter;
