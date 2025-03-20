import mongoose, { mongo } from "mongoose";

const expensemodel = new mongoose.Schema({
  expenseId: { type: Number, required: true, unique: true },
  expenseName: { type: String, required: true },
  expenseAmount: { type: Number, required: true, default: 0 },
  expenseOwner: { type: String, required: true },
  expenseOwnerId: { type: Number, required: true, unique: true },
  expenseDate: { type: Date, default: Date.now() },
});

const expenseModelSchema = mongoose.model("expense", expensemodel);
export default expenseModelSchema;
