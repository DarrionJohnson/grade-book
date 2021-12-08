import bcrypt from "bcrypt";
import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("admin");

export default {
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

    const existingUser = await admin.findOne({ userName });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const encrypt = bcrypt.hash(password, 10);

    return admin.insertOne({ userName, password: encrypt });
  },
  async SharedWorker(userName, password) {},
};
