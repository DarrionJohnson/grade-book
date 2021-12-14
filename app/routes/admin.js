import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World from Grade Book Admin");
});

router.post("/register", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const newUser = await adminController.create(userName, password);
    console.log("Post Requested" + newUser);

    // log user in and await jwt
    const token = await adminController.show(userName, password);

    res.status(201).send(token);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
  // Same as above
  // catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
});

export default router;
