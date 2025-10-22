// Step 1: Define the overload signatures for the getValue function

// Your overload signatures here
// function getValue(targetString: string): string;
// function getValue(targetNumber: number): number;
// function getValue(obj: boolean): boolean;
function getValue<T>(obj: T): T;
function getValue<T>(obj: T[], index: number): T;
function getValue<T extends object, K extends keyof T>(obj: T, key: K): T[K];

// Step 2: Implement the getValue function to handle the different cases
function getValue(obj: any, index?: number): any {
  if (Array.isArray(obj) && typeof index === "number") {
    return obj[index];
  } else if (
    typeof obj === "object" &&
    obj != null &&
    typeof index === "string"
  ) {
    return obj[index];
  }
  return obj;
}

// Step 3: Test Cases

const strVal = getValue("hello"); // Should return "hello"
const numVal = getValue(42); // Should return 42
const arrVal = getValue([10, 20, 30, "40"], 1); // Should return 20
const boolVal = getValue(true);
const objVal = getValue({ name: 42, location: "Belfast" }, "name");

console.log(strVal);
console.log(numVal);
console.log(arrVal);
console.log(boolVal);
console.log(objVal);
