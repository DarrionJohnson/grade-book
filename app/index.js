import express from "express";
import config from "./config.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World from Grade Book");
});

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: ${config.baseUrl}:${config.port}`);
});
