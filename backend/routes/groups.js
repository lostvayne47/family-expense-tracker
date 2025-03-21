import { Router } from "express";
import GroupSchema from "../models/groupModel.js";
import fetchUser from "../middleware/fetchUser.js";
import UserSchema from "../models/userModel.js";
import crypto from "crypto";
const groupRouter = Router();

function generateGroupKey(length = 6) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}

async function generateUniqueGroupKey() {
  let uniquePasscode = generateGroupKey(); // Call function to get initial passcode
  let checkUnique = await GroupSchema.findOne({
    groupPasscode: uniquePasscode,
  });

  while (checkUnique) {
    // Loop until we find a unique key
    uniquePasscode = generateGroupKey(); // Generate a new key
    checkUnique = await GroupSchema.findOne({ groupPasscode: uniquePasscode });
  }

  return uniquePasscode;
}

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

    let uniquePasscode = await generateUniqueGroupKey();
    const { groupName, groupDesc } = req.body;
    const group = await GroupSchema.create({
      groupName,
      groupPasscode: uniquePasscode,
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
    //TODO:Send Unique Group Passcode as response
    res.status(201).send([group, user]);
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
    const groups = await GroupSchema.find();
    res.send(groups);
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Get all user groups
//TODO: get user details from auth token and fetch all groups
groupRouter.get("/getusergroups", async (req, res) => {
  try {
    const groups = await GroupSchema.find();
    res.send(groups);
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Update group
//TODO: Write updation logic
groupRouter.put("/updategroup", async (req, res) => {
  try {
    res.send("Update Group");
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Delete group
//TODO: Validate user id
groupRouter.delete("/deletegroup", async (req, res) => {
  try {
    res.send("Delete Group");
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
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
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

export default groupRouter;
