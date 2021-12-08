import dotenv from "dotenv";

dotenv.config();

export default {
  baseUrl: process.env.BASE_URI || "http://localhost",
  db: {
    name: "gradeBookDB",
    uri: process.env.MONGODB_URI,
  },
  encryption: {
    saltRounds: process.env.SALT_ROUNDS || 10,
    secret: process.env.ENCRYPTION_SECRET || "secret",
  },
  port: process.env.PORT || 3000,
};
