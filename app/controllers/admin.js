import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("admin");

export default {
  async create(username, password) {
    const existingUser = await admin.findOne({ username });

    if (existingUser) {
      throw new Error("Username already exists!");
    }

    const hashedPass = await bcrypt.hash(
      password,
      config.encryption.saltRounds
    );

    return admin.insertOne({ username, password: hashedPass });
  },

  async show(username, password) {
    const existingUser = await admin.findOne({ username });

    const comparison = await bcrypt.compare(password, existingUser.password);

    if (!comparison) {
      throw new Error("Access denied");
    }

    return jwt.sign({ username }, config.encryption.secret, {
      expiresIn: config.encryption.expiration,
    });
  },
};
