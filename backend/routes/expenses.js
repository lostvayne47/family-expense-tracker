import { Router } from "express";

const expensesRouter = Router();

// expenseId: { type: Number, required: true, unique: true },
// expenseName: { type: String, required: true },
// expenseAmount: { type: Number, required: true, default: 0 },
// expenseOwner: { type: String, required: true },
// expenseOwnerId: { type: Number, required: true, unique: true },
// expenseDate: { type: Date, default: Date.now() },

//Create expense
expensesRouter.post("/createexpense", async (req, res) => {
  try {
    res.send("Create Expense");
  } catch (error) {
    console.log(error.message);
  }
});

export default expensesRouter;
