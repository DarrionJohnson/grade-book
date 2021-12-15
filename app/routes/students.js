import { Router } from "express";
import studentsController from "../controllers/students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.post("/", async ({ isAuth }, res) => {
  if (isAuth?.role === "ADMIN") {
    try {
      const students = await studentsController.index();
      res.json(students);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});

router.post("/graded/:studentId", async ({ isAuth, body, params }, res) => {
  if (isAuth?.role === "ADMIN") {
    try {
      const grade = await studentsController.update(params.studentId, body);
      res.json(grade);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  }
});

export default router;
