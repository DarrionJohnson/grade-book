import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World from Grade Book Admin");
});

export default router;