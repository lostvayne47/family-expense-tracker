import express from "express";
import connectToMongo from "./db.js";
import cors from "cors";
import groupRouter from "./routes/groups.js";
import expensesRouter from "./routes/expenses.js";
import userRouter from "./routes/user.js";

connectToMongo();
const app = express();
const port = 3000;

// ✅ Middleware (Must Be Before Routes)
app.use(express.json()); // Required for parsing JSON in POST requests
app.use(cors()); // Enable CORS (if testing via frontend later)

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/v1/", (req, res) => {
  res.json({ message: "API is working!" });
});

//Available Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/groups", groupRouter);
app.use("/api/v1/expenses", expensesRouter);

// Handle Undefined Routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
