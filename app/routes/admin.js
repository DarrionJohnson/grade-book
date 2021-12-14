import { Router } from "express";
import adminController from "../controllers/admin.js";
import Admin from "../Models/Users/Admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World from Grade Book Admin");
});

router.post("/register", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    console.log(admin);
    const error = admin.validate();

    if (error.length) {
      throw new Error(error.join("\n"));
    }

    const newUser = await adminController.create(admin);
    console.log("Post Requested" + newUser);

    // log user in and await jwt
    const token = await adminController.show(admin);

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
