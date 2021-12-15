import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("admin");

export default {
  async create({ userName, password, role }) {
    const existingUser = await admin.findOne({ userName });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const encrypt = await bcrypt.hash(password, config.encryption.saltRounds);

    return admin.insertOne({ userName, password: encrypt, role });
  },

  async show({ userName, password }) {
    const existingUser = await admin.findOne({ userName });

    if (!existingUser) {
      throw new Error("Access Denied");
    }

    const compare = await bcrypt.compare(password, existingUser.password);

    if (!compare) {
      throw new Error("Access Denied");
    }

    return jwt.sign(
      { userName, role: existingUser.role },
      config.encryption.secret,
      {
        expiresIn: config.encryption.expiresIn,
      }
    );
  },
};
