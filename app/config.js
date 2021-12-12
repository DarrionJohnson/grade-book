import dotenv from "dotenv";

dotenv.config();

export default {
<<<<<<< HEAD
  baseUrl: process.env.BASE_URI || "http://localhost",
=======
  baseUrl: process.env.BASE_URL || "http://localhost",
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
  db: {
    name: "gradeBookDB",
    uri: process.env.MONGODB_URI,
  },
  encryption: {
<<<<<<< HEAD
    expiresIn: process.env.EXPIRES_IN || "1d",
    saltRounds: process.env.SALT_ROUNDS || 10,
    secret: process.env.ENCRYPTION_SECRET || "secret",
=======
    expiration: process.env.EXPIRATION || "1d",
    saltRounds: process.env.SALT_ROUNDS || 10,
    secret: process.env.SECRET || "secret",
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
  },
  port: process.env.PORT || 3000,
};
