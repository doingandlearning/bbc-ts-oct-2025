// Step 1: Define the overload signatures for the getValue function

// Your overload signatures here

// Step 2: Implement the getValue function to handle the different cases
function getValue(obj: any, index?: number): any {}

// Step 3: Test Cases

const strVal = getValue("hello"); // Should return "hello"
const numVal = getValue(42); // Should return 42
const arrVal = getValue([10, 20, 30], 1); // Should return 20
