import { Router } from "express";

const expensesRouter = Router();

//Create user
expensesRouter.post("/createexpense", async (req, res) => {
  try {
    res.send("Create Expense");
  } catch (error) {
    console.log(error.message);
  }
});

export default expensesRouter;
