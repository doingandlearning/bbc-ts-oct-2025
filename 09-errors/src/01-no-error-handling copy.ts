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
  return new Date(birthday);
}

async function main() {
  const input = await ask();
  const date = parse(input);
  console.log(date);
  console.log(`Your birthday is ${date.toISOString()}`);
}

main();
