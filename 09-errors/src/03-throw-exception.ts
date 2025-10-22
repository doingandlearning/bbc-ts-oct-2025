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

Error();
TypeError();
EvalError();
URIError();
SyntaxError();
RangeError();
ReferenceError();

/** Will throw `TypeError` when things go wrong */
function parse(birthday: string) {
  const date = new Date(birthday);
  if (!isValidDate(date)) {
    throw new TypeError(`Couldn't parse date: ${birthday}`);
  }
  return date;
}

function isValidDate(date: Date): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

async function main() {
  const input = await ask();
  try {
    const date = parse(input);
    console.log(`Your birthday is ${date.toISOString()}`);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log(`=== Log File === ${error} === `);
      console.log(`${error.stack}`);
      console.log(error.message);
    } else {
      throw error;
    }
  }
}

main().catch((error) => {
  console.log("Something unexpected happened: " + error);
});
