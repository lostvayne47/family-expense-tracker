import { Router } from "express";

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
groupRouter.post("/creategroup", async (req, res) => {
  try {
    res.send("Create Group");
  } catch (error) {
    console.log(error.message);
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
