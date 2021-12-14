import User from "./User.js";

export default class Admin extends User {
  constructor({ userName, password }) {
    super({ userName, password });
    this.role = "ADMIN";
  }
}
