// Exercise 7: Optional Chaining & Null Safety
// Practice handling null/undefined values safely with optional chaining and control flow analysis

// TODO: DOM Element Null Handling
// Use document.getElementById() to get an element (it returns HTMLElement | null)
// Try to access properties without null checking - see what TypeScript tells you
// Then use optional chaining (?.) to safely access properties

// TODO: Optional Chaining vs Non-null Assertion
// Compare optional chaining (elem?.property) with non-null assertion (elem!.property)
// Show the difference in safety and when each should be used

// TODO: Control Flow Analysis
// Use if/else statements to check for null/undefined
// Show how TypeScript narrows types inside the if block
// Demonstrate that TypeScript knows the element is not null inside the if block

// TODO: Nested Object Access
// Create an object with nested optional properties
// Use optional chaining to safely access deeply nested properties
// Show how optional chaining short-circuits on null/undefined

// TODO: Function with Null Safety
// Write a function that takes a potentially null element
// Use different approaches: optional chaining, if/else, non-null assertion
// Show the trade-offs between each approach

// TODO: Real-world Example
// Create a function that processes user data with optional properties
// Use optional chaining to safely access user preferences, address, etc.
// Handle cases where data might be missing

export {};
