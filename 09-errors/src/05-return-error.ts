import readline from "node:readline/promises";

async function ask(): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const answer = await rl.question("When is your birthday?");
  rl.close();
  return answer || "";
}

type ErrorCodes = "E101" | "E121" | "E153";

class BirthdayError extends Error {
  public code: ErrorCodes;

  constructor(message: string, code: ErrorCodes = "E101") {
    super(message); // I now have an Error!
    this.name = "BirthdayError";
    this.code = code;
  }
}

/** This throws custom error `BirthdayError` with error code. */
function parse(birthday: string) {
  const date = new Date(birthday);
  if (!isValidDate(date)) {
    return new BirthdayError(`Couldn't parse date: ${birthday}`, "E121");
  }
  return date;
}

function isValidDate(date: Date): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

async function main() {
  const input = await ask();
  const date = parse(input);

  if (date instanceof BirthdayError) {
    const error = date;
    console.log(`=== Log File ===`);
    console.log(error);
    console.log(`${error.stack}`);
    console.log(error.message);
    console.log(error.code);
    console.log(`=== END LOG FILE === `);
    console.log(
      `If the problem persists contact support with error code ${error.code}`
    );
  } else {
    console.log(`Your birthday is ${date.toISOString()}`);
  }
}

main().catch((error) => {
  console.log("Something unexpected happened: " + error);
});
