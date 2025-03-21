import { Router } from "express";
import GroupSchema from "../models/groupModel.js";
import fetchUser from "../middleware/fetchUser.js";
import UserSchema from "../models/userModel.js";
const groupRouter = Router();

// groupName: { type: String, required: true },
// groupPasscode: { type: Number, required: true, unique: true },
// groupMembers: { type: Array, required: true, default: [] },
// groupDescription: { type: String },
// groupAdmin: { type: Array, required: true },
// groupExpenses: { type: Array, default: [] },
// date: { type: Date, default: Date.now() },

//Create user
//TODO:Generate Unique Passcode
groupRouter.post("/creategroup", fetchUser, async (req, res) => {
  try {
    if (!req.user?.id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    let user = await UserSchema.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const { groupName, groupDesc } = req.body;
    const group = await GroupSchema.create({
      groupName,
      groupPasscode: "12345",
      groupMembers: [user.userName],
      groupDesc,
      groupAdmin: [user.userName],
      date: Date.now(),
    });

    user = await UserSchema.findByIdAndUpdate(
      user.id,
      { $push: { userGroups: group.id } }, // Only update userGroups
      { new: true }
    );
    res.send([group, user]);
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Get all groups
//TODO: get user details from auth token and fetch all groups
groupRouter.get("/getgroups", async (req, res) => {
  try {
    res.send("Get Groups");
  } catch (error) {
    console.log(error.message);
  }
});

//Update group
//TODO: Write updation logic
groupRouter.put("/updategroup", async (req, res) => {
  try {
    res.send("Update Group");
  } catch (error) {
    console.log(error.message);
  }
});

//Delete group
//TODO: Validate user id
groupRouter.delete("/deletegroup", async (req, res) => {
  try {
    res.send("Delete Group");
  } catch (error) {
    console.log(error.message);
  }
});

//Join Group
//TODO:
//Validate Unique Passcode
//Add groupId to userGroups
//Add userId to groupMembers
groupRouter.put("/joingroup", async (req, res) => {
  try {
    res.send("Join Group");
  } catch (error) {
    console.log(error.message);
  }
});

export default groupRouter;
