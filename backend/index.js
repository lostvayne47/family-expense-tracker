import express from "express";
import connectToMongo from "./db.js";
connectToMongo();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
