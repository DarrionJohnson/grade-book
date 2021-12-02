import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World from Grade Book Admin");
});

router.post("/register", (req, res) => {
  const { userName, password } = req.body;
  adminController.create(userName, password);
  res.send("Post Request");
});

export default router;
