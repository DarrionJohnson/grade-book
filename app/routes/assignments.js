import { Router } from "express";
import assignmentsController from "../controllers/assignments.js";
import Assignment from "../models/Assignment.js";

const router = new Router();

router.post("/", async ({ isAuth, body }, res) => {
  try {
    if (isAuth?.role === "ADMIN") {
      const assign = new Assignment(body);

      const errors = assign.validate();

      if (errors.length) {
        throw new Error(errors.join("\n"));
      }

      const respond = await assignmentsController.create(body);

      res.status(201).json(respond);
    } else {
      throw new Error("You are not Authorized to preform this action.");
    }
  } catch ({ Message }) {
    res.status(400).json({ Message });
  }
});

export default router;
