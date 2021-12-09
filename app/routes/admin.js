import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    await adminController.create(username, password);
    const jwt = await adminController.show(username, password);

    res.status(201).send(jwt);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

export default router;
