import { Router } from "express";
import studentsController from "../controllers/students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.post("/", async (req, res) => {
  if (req.isAuth) {
<<<<<<< HEAD
    const students = await studentsController.index();
    res.json(students);
=======
    try {
      const students = await studentsController.index();
      res.json(students);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
  } else {
    res.status(401).json({ message: "Access Denied" });
  }
});

export default router;
