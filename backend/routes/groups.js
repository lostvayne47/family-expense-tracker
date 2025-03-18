import { Router } from "express";

const groupRouter = Router();

//Create user
groupRouter.post("/creategroup", async (req, res) => {
  try {
    res.send("Create Group");
  } catch (error) {
    console.log(error.message);
  }
});

export default groupRouter;
