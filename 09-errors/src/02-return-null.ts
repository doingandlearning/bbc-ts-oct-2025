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

function parse(birthday: string) {
  const date = new Date(birthday);
  if (!isValidDate(date)) {
    // Add logging ...
    return null;
  }
  return date;
}

function isValidDate(date: Date): date is Date {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

async function main() {
  const input = await ask();
  const date = parse(input);
  if (date) {
    console.log(`Your birthday is ${date.toISOString()}`);
  } else {
    console.log("I don't understand that date: " + input);
  }
}

main();
