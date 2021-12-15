import { ObjectID as objectId } from "mongodb";
import client from "../client.js";
import config from "../config.js";

const studentsClient = client.db(config.db.name).collection("students");

export default {
  index() {
    return studentsClient.find().toArray();
  },

  show(id) {
    return studentsClient.find({ _id: objectId(id) });
  },

  async update(id, grade) {
    const studentQuery = {
      _id: objectId(id),
      "grades._id": objectId(grade.id),
    };
    const addGrade = {
      $set: { "grades.$.pointsEarned": grade.pointsEarned },
    };

    return studentsClient.updateOne(studentQuery, addGrade);
  },
};
