import mongoose from "mongoose";

const groupScheme = new mongoose.Schema({
  groupName: { type: String, required: true },
  groupId: { type: Number, required: true, unique: true },
  groupPasscode: { type: Number, required: true, unique: true },
  groupMembers: { type: Array, required: true, default: [] },
  groupDescription: { type: String },
  groupAdmin: { type: Array, required: true },
  groupExpenses: { type: Array, default: [] },
  date: { type: Date, default: Date.now() },
});

const groupSchemeModel = mongoose.model("group", groupScheme);
export default groupSchemeModel;
