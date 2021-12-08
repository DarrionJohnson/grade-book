import client from "../client.js";
import config from "../config.js";
import bcrypt from "bcrypt";

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

    // TODO: Use insertOne to insert an admin into database
  },
  async SharedWorker(userName, password) {},
};
