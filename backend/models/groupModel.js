import mongoose from "mongoose";

const groupScheme = new mongoose.Schema({
  groupName: { type: String, required: true },
  groupPasscode: { type: Number, required: true, unique: true },
  groupMembers: { type: Array, required: true, default: [] },
  groupDescription: { type: String },
  groupAdmin: { type: Array, required: true },
  groupExpenses: { type: Array, default: [] },
  date: { type: Date, default: Date.now() },
});

const groupSchemeModel = mongoose.model("group", groupScheme);
export default groupSchemeModel;

// groupName:  Goa
// groupPasscode: Diddy,
// groupMembers: [Tanish,Aayush]
// groupDescription: where the hoes at ,
// groupAdmin: [Tanish iD]
// groupExpenses: [],
// date: 22/3/25,
