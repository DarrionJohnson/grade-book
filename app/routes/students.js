import client from "../client.js";
import config from "../config.js";

const StudentClient = client
  .db(config.db.name)
  .collection(config.db.collection);

export default {
  index() {
    return StudentClient.find().toArray();
  },
};
