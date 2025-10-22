// Step 1: Define the overload signatures
function getValue(obj: string): string;
function getValue(obj: number): number;
function getValue(obj: any[], index: number): any;

// Step 2: Implement the function
function getValue(obj: any, index?: number): any {
  if (Array.isArray(obj) && typeof index === "number") {
    return obj[index];
  }
  return obj;
}

// Step 3: Test Cases
const strVal = getValue("hello"); // "hello"
const numVal = getValue(42); // 42
const arrVal = getValue([10, 20, 30], 1); // 20
