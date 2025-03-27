import mongoose, { mongo } from "mongoose";

const expensemodel = new mongoose.Schema({
  expenseName: { type: String, required: true },
  expenseAmount: { type: Number, required: true, default: 0 },
  expenseOwner: { type: String, required: true },
  expenseOwnerId: { type: String, required: true },
  expenseGroupId: { type: String, required: true },
  expenseDate: { type: Date, default: Date.now() },
});

const expenseModelSchema = mongoose.model("expense", expensemodel);
export default expenseModelSchema;
