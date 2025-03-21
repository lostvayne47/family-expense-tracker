import express from "express";
import UserSchema from "../models/userModel.js";
const userRouter = express.Router();

//Create user
userRouter.post("/createuser", async (req, res) => {
  try {
    const user = await UserSchema.create({
      userName: req.body.name,
      userEmail: req.body.email,
      userPassword: req.body.password,
      userGroups: req.body?.userGroups,
      userExpenses: req.body?.userExpenses,
      date: Date.now(),
    });
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

//Get User
userRouter.get("/getallusers", async (req, res) => {
  try {
    const user = await UserSchema.find();
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});
export default userRouter;
