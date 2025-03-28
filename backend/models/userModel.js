import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
  userGroups: { type: Array, default: [] },
  userExpenses: { type: Array, default: [] },
  date: { type: Date, default: Date.now() },
});
const UserSchemaModel = mongoose.model("user", UserSchema);
export default UserSchemaModel;
