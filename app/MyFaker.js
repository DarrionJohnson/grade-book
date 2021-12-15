import faker from "faker";
import { promises as fs } from "fs";

fs.writeFile(
  "db.json",
  JSON.stringify(
    Array.from({ length: 500 }, () => ({
      "Player Name": faker.name.firstName() + " " + faker.name.lastName(),
      "Team Name": faker.helpers.randomize([
        "Atlanta Hawks",
        "Boston Celtics",
        "Brooklyn Nets",
        "Charlotte Hornets",
        "Chicago Bulls",
        "Cleveland Cavaliers",
        "Dallas Mavericks",
        "Denver Nuggets",
        "Detroit Pistons",
        "Golden State Warriors",
        "Houston Rockets",
        "Indiana Pacers",
        "Los Angeles Clippers",
        "Los Angeles Lakers",
        "Memphis Grizzlies",
        "Miami Heat",
        "Milwaukee Bucks",
        "Minnesota Timberwolves",
        "New Orleans Pelicans",
        "New York Knicks",
        "Oklahoma City Thunder",
        "Orlando Magic",
        "Philadelphia 76ers",
        "Phoenix Suns",
        "Portland Trail Blazers",
        "Sacramento Kings",
        "San Antonio Spurs",
        "Toronto Raptors",
        "Utah Jazz",
        "Washington Wizards",
      ]),
      "Player Number": faker.datatype.number(99),
      Position: faker.helpers.randomize(["PG", "C", "SF", "PF", "SG"]),
      "Average score a game": faker.datatype.number({
        min: 10.7,
        max: 27.2,
        precision: 1,
      }),
      "Card Brand": faker.company.companyName(),
      "Print Date": faker.datatype.number({
        min: 1978,
        max: 2010,
      }),
      "Signed Copies": faker.helpers.randomize([
        [
          faker.datatype.number(4) + 1,
          "Minimal Bid Price: $" + faker.commerce.price(780.0, 3000.0),
        ],
        ["No", "Minimal Bid Price: As Posted Below"],
      ]),
      Price: "$" + faker.commerce.price(0.0, 300.0),
      Quantity: faker.datatype.number(30),
    })),
    null,
    2
  ),
  "utf8"
);
