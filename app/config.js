import dotenv, { config } from "dotenv";

dotenv.config();

export default {
  baseUrl: process.env.BASE_URI || "http://localhost",
  db: {
    name: "gradeBookDB",
    uri: process.env.MONGODB_URI,
  },
  port: process.env.PORT || 3000,
};
