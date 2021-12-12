import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();

router.get("/", (_, res) => {
<<<<<<< HEAD
  res.send("Hello World from Grade Book Admin");
=======
  res.send("Hello World!");
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
});

router.post("/register", async (req, res) => {
  try {
<<<<<<< HEAD
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
=======
    const { username, password } = req.body;
    await adminController.create(username, password);
    const jwt = await adminController.show(username, password);

    res.status(201).send(jwt);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
});

export default router;
