import { Router } from "express";
import studentsController from "../controllers/students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.post("/", async (_, res) => {
  const students = await studentsController.index();
  res.json(students);
});

export default router;
