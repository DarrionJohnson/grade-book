import User from "./User.js";

export default class Admin extends User {
  constructor({ userName, password } = {}) {
    super({ userName, password });
    this.role = "ADMIN";
  }

  validate() {
    const error = [];

    if (!this.userName) {
      error.push("A Username is Required");
    }

    if (!this.password) {
      error.push("A Password is Required");
    }

    return error;
  }
}
