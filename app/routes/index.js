import { Router } from "express";
import adminRouter from "./admin.js";
import studentsRouter from "./students.js";
<<<<<<< HEAD
=======
import assignmentsRouter from "./assignments.js";
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df

const router = new Router();

router.get("/", (_, res) => {
<<<<<<< HEAD
  res.send("Hello Form Grade Book Router");
=======
  res.send("Hello World!");
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
});

router.use("/admin", adminRouter);
router.use("/students", studentsRouter);
<<<<<<< HEAD
=======
router.use("/assignments", assignmentsRouter);
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df

export default router;
