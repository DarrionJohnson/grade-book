import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello Form Grade Book Router");
});

export default router;
