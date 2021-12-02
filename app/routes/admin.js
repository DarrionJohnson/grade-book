import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World from Grade Book Admin");
});

router.post("/register", (req, res) => {
  try {
    const { userName, password } = req.body;
    adminController.create(userName, password);
    res.send("Post Request");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
