import { Router } from "express";
import GroupSchema from "../models/groupModel.js";
import fetchUser from "../middleware/fetchUser.js";
import UserSchema from "../models/userModel.js";
import crypto from "crypto";
const groupRouter = Router();

function generateGroupKey(length = 6) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}
//Generate unique group passcode
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
//Get user from Middleware
async function getUser(req) {
  if (!req.user?.id) {
    return res.status(400).json({ error: "User ID is required" });
  }
  let user = await UserSchema.findById(req.user.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return user;
}
//Create user
groupRouter.post("/creategroup", fetchUser, async (req, res) => {
  try {
    let user = await getUser(req);
    let uniquePasscode = await generateUniqueGroupKey();
    const { groupName, groupDesc } = req.body;
    const group = await GroupSchema.create({
      groupName,
      groupPasscode: uniquePasscode,
      groupMembers: [user.userName],
      groupDesc,
      groupAdmin: [user.id],
      date: Date.now(),
    });

    user = await UserSchema.findByIdAndUpdate(
      user.id,
      { $push: { userGroups: group.id } }, // Only update userGroups
      { new: true }
    );
    //TODO:Send Unique Group Passcode as response
    res.status(201).send({
      success: true,
      message: "Group Created Successfully",
      groupPasscode: group.groupPasscode,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Get all groups
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
groupRouter.get("/getusergroups", fetchUser, async (req, res) => {
  try {
    const user = await getUser(req);
    const groups = await GroupSchema.find({ _id: { $in: user.userGroups } });
    res.send(groups);
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//UPDATION TO BE TAKEN UP LATER
// //Update group
// //TODO: Write updation logic
// groupRouter.put("/updategroup", fetchUser, async (req, res) => {
//   try {
//     const user = await getUser(req);
//     console.log(user);
//     res.send("Update Group");
//   } catch (error) {
//     return res.status(500).json({
//       error: "Server error",
//       message: error.message,
//     });
//   }
// });

//Delete group
groupRouter.delete("/deletegroup", fetchUser, async (req, res) => {
  try {
    const user = await getUser(req);
    // Find and delete the group if the user is the admin
    const group = await GroupSchema.findOneAndDelete({
      _id: req.body?.groupId,
      groupAdmin: { $in: [user.id] },
    });

    if (!group) {
      return res.status(403).json({
        error: "Forbidden",
        message:
          "You are not authorized to delete this group or it does not exist.",
      });
    }
    //Update all members who were a part of this elete group
    await UserSchema.updateMany(
      { userGroups: { $in: [req.body?.groupId] } },
      { $pull: { userGroups: req.body?.groupId } }
    );
    res
      .status(200)
      .send({ success: true, message: "Group deleted successfully." });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

//Join Group
groupRouter.put("/joingroup", fetchUser, async (req, res) => {
  try {
    const user = await getUser(req);
    const group = await GroupSchema.findOne({
      groupPasscode: req.body?.groupPasscode,
    });
    if (!group) {
      return res.status(404).json({
        error: "Group not found",
        message:
          "The provided passcode is invalid or the group does not exist.",
      });
    }

    // Check if the user is already part of the group
    if (user.userGroups.includes(group.id)) {
      return res.status(400).json({
        success: false,
        error: "Already in the group",
        message: `${user.userName} is already a member of ${group.groupName}`,
      });
    }

    // Ensure userGroups and groupMembers arrays exist
    if (!user.userGroups) user.userGroups = [];
    if (!group.groupMembers) group.groupMembers = [];

    user.userGroups.push(group.id);
    group.groupMembers.push(user.userName);

    // Save updates to database
    await user.save();
    await group.save();

    res.status(200).send({
      success: true,
      message: `${user.userName} is added to ${group.groupName} successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

export default groupRouter;
