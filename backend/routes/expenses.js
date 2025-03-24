import { Router } from "express";
import ExpenseSchema from "../models/expenseModel.js";
import UserSchema from "../models/userModel.js";
import GroupSchema from "../models/groupModel.js";
import fetchUser from "../middleware/fetchUser.js";

const expensesRouter = Router();

// expenseName: { type: String, required: true },
// expenseAmount: { type: Number, required: true, default: 0 },
// expenseOwner: { type: String, required: true },
// expenseOwnerId: { type: Number, required: true, unique: true },
// expenseDate: { type: Date, default: Date.now() },

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

//Create expense
expensesRouter.post("/createexpense", fetchUser, async (req, res) => {
  try {
    const { expenseName, expenseAmount, expenseGroupId } = req.body;
    const user = await getUser(req); // Extract from middleware
    const userName = user.userName;
    const userId = user.id;

    // Validate required fields
    if (!expenseName || !expenseAmount || !expenseGroupId) {
      return res
        .status(400)
        .json({ error: "Expense name, amount, and group ID are required." });
    }
    // Check if the group exists
    const group = await GroupSchema.findOne({ _id: expenseGroupId });
    if (!group) {
      return res.status(404).json({ error: "Group not found." });
    }

    // Create new expense
    const newExpense = await ExpenseSchema.create({
      expenseName,
      expenseAmount,
      expenseOwner: userName, // Auto-filled by middleware
      expenseOwnerId: userId, // Auto-filled by middleware
      expenseGroupId,
    });

    // Add expenseId to the group's groupExpenses array
    await GroupSchema.updateOne(
      { _id: expenseGroupId },
      { $push: { groupExpenses: newExpense.id } }
    );

    res.status(201).json({
      success: true,
      message: "Expense created successfully.",
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", message: error.message });
  }
});

//Create expense
expensesRouter.post("/createexpense", async (req, res) => {
  try {
    res.send("Create Expense");
  } catch (error) {
    console.log(error.message);
  }
});
//Create expense
expensesRouter.post("/createexpense", async (req, res) => {
  try {
    res.send("Create Expense");
  } catch (error) {
    console.log(error.message);
  }
});
//Create expense
expensesRouter.post("/createexpense", async (req, res) => {
  try {
    res.send("Create Expense");
  } catch (error) {
    console.log(error.message);
  }
});
export default expensesRouter;
