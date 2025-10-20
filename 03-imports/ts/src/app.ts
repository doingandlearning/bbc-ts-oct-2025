import { location, company } from "./util.js";

import type { VALID_URL_VALUE } from "./types.js";

import data from "./user.json" with { type: "json" };

console.log("I'm here.");

function sayHello(location: string) {
  console.log(`Hello from ${location}.`);
}

sayHello(location);
console.log(data);

let field1: VALID_URL_VALUE = "12";
console.log(field1);
