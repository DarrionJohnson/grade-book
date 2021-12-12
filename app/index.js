import express from "express";
import config from "./config.js";
import isAuth from "./Middelware/isAuth.js";
import router from "./routes/index.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World from Grade Book");
});

app.use(express.json());
app.use(isAuth);
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: ${config.baseUrl}:${config.port}`);
});
