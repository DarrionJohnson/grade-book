import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("admin");

export default {
<<<<<<< HEAD
  async create(userName, password) {
    // check for an existing user in the DB

    console.log(
      "User Name:",
      userName,
      " || ",
      "Password:",
      password,
      "from Admin Controller."
    );
    // Check for existing user(s)
    const existingUser = await admin.findOne({ userName });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const encrypt = await bcrypt.hash(password, config.encryption.saltRounds);

    return admin.insertOne({ userName, password: encrypt });
  },

  async show(userName, password) {
    const existingUser = await admin.findOne({ userName });

    const compare = await bcrypt.compare(password, existingUser.password);

    if (!compare) {
      throw Error("Access Denied");
    }

    // const user = await admin.findOne({ userName });

    // if (!user) {
    //   throw Error("User not found");
    // }

    // const match = await bcrypt.compare(password, user.password);

    // if (!match) {
    //   throw Error("Passwords does not match");
    // }

    return jwt.sign({ userName }, config.encryption.secret, {
      expiresIn: config.encryption.expiresIn,
=======
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
>>>>>>> ac762aa4621e34b193cdd1298082ac167b3246df
    });
  },
};
