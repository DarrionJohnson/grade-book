import User from "./User.js";

export default class Admin extends User {
  constructor({ userName, password } = {}) {
    super({ userName, password });
    this.role = "ADMIN";
  }

  validate() {
    const error = [];

    if (!this.userName) {
      console.error(.push("A Username is Required"));
    } if (!this.password) {
      console.error(.push("A Password is Required"));
    }

    return errors;
  }
}
