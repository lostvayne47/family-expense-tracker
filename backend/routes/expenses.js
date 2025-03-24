import { Router } from "express";
import ExpenseSchema from "../models/expenseModel.js";
import UserSchema from "../models/userModel.js";
import GroupSchema from "../models/groupModel.js";
import fetchUser from "../middleware/fetchUser.js";

const expensesRouter = Router();

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

// Get all expenses for a group
expensesRouter.get("/groupexpenses/:groupId", fetchUser, async (req, res) => {
  try {
    const { groupId } = req.params;

    // Check if the group exists
    const group = await GroupSchema.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found." });
    }

    // Fetch all expenses belonging to this group
    const expenses = await ExpenseSchema.find({ expenseGroupId: groupId });

    res.status(200).json({
      success: true,
      message: "Expenses fetched successfully.",
      expenses,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", message: error.message });
  }
});

// Get all expenses for a user
expensesRouter.get("/userexpenses", fetchUser, async (req, res) => {
  try {
    const user = await getUser(req); // Extract user from middleware
    const userId = user.id;

    // Fetch all expenses belonging to this user
    const expenses = await ExpenseSchema.find({ expenseOwnerId: userId });

    res.status(200).json({
      success: true,
      message: "User expenses fetched successfully.",
      expenses,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", message: error.message });
  }
});

// Update an expense
expensesRouter.put("/updateexpense/:expenseId", fetchUser, async (req, res) => {
  try {
    const { expenseId } = req.params;
    const { expenseName, expenseAmount } = req.body;
    const user = await getUser(req); // Extract user from middleware
    const userId = user.id;

    // Find the expense
    let expense = await ExpenseSchema.findById(expenseId);

    if (!expense) {
      return res.status(404).json({ error: "Expense not found." });
    }

    // Check if the user is the owner of the expense
    if (expense.expenseOwnerId !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to update this expense." });
    }

    // Update only the fields that are provided
    if (expenseName) expense.expenseName = expenseName;
    if (expenseAmount) expense.expenseAmount = expenseAmount;

    // Save the updated expense
    await expense.save();

    res.status(200).json({
      success: true,
      message: "Expense updated successfully.",
      updatedExpense: expense,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error", message: error.message });
  }
});

// Delete an expense
expensesRouter.delete(
  "/deleteexpense/:expenseId",
  fetchUser,
  async (req, res) => {
    try {
      const { expenseId } = req.params;
      const user = await getUser(req); // Extract user from middleware
      const userId = user.id;

      // Find the expense
      const expense = await ExpenseSchema.findById(expenseId);

      if (!expense) {
        return res.status(404).json({ error: "Expense not found." });
      }

      // Check if the user is the owner of the expense
      if (expense.expenseOwnerId !== userId) {
        return res
          .status(403)
          .json({ error: "You are not authorized to delete this expense." });
      }

      // Remove expenseId from the group's groupExpenses array
      await GroupSchema.updateOne(
        { _id: expense.expenseGroupId },
        { $pull: { groupExpenses: expenseId } }
      );

      // Delete the expense
      await ExpenseSchema.findByIdAndDelete(expenseId);

      res.status(200).json({
        success: true,
        message: "Expense deleted successfully.",
      });
    } catch (error) {
      res.status(500).json({ error: "Server error", message: error.message });
    }
  }
);
export default expensesRouter;
