import client from "../client.js";
import config from "../config.js";
import students from "./students.js";

const assignments = client.db(config.db.name).collection("assignments");

export default {
  async create(newAssignment) {
    await assignments.insertOne(newAssignment);
    await students.updateMany({}, { $push: { grades: newAssignment } });
  },
};
