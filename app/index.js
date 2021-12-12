import express from "express";
import config from "./config.js";
<<<<<<< HEAD
import isAuth from "./Middleware/isAuth.js";
=======
import isAuth from "./middleware/isAuth.js";
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
import router from "./routes/index.js";

const app = express();

app.get("/", (_, res) => {
<<<<<<< HEAD
  res.send("Hello World from Grade Book");
=======
  res.send("Hello World!");
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
});

app.use(express.json());
app.use(isAuth);
app.use("/api", router);

app.listen(config.port, () => {
<<<<<<< HEAD
  console.log(`Server 🏃🏾‍♂️ at: ${config.baseUrl}:${config.port}`);
=======
  console.log(`Server running: ${config.baseUrl}:${config.port}`);
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
});
