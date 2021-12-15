export default class Assignment {
  constructor({ title, possiblePoints }) {
    this.title = title;
    this.possiblePoints = possiblePoints;
  }

  validate() {
    const error = [];

    if (!this.title) {
      error.push("An assignment Title is Required");
    }

    if (!this.possiblePoints) {
      error.push("The number of Possible Points to earn is Required");
    }

    if (this.possiblePoints < 0) {
      error.push(
        "The number of Possible Points to earn, must be greater then 0."
      );
    }

    return error;
  }
}
