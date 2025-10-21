// Exercise 6: Comprehensive Type Guards
// Practice using various type guards to refine types

// TODO: Basic typeof guards
// Define a variable `value` of type `unknown` and assign it a value
// Try different types of values: string, number, boolean, object, array
// Use typeof operator to check for different types

// TODO: instanceof guards
// Create classes `User` and `Admin` (Admin extends User)
// User should have: name, email
// Admin should have: name, email, permissions (string array)
// Write a function that uses instanceof to distinguish between User and Admin

// TODO: in operator guards
// Create interfaces `Apple` and `Orange` with different properties
// Apple: isGoodForBaking (boolean), ripe (boolean)
// Orange: numOfSegments (number), ripe (boolean)
// Write a function that uses the `in` operator to check for properties

// TODO: Custom type predicates
// Create an interface `ApiResponse` with success, data?, error?
// Write custom type predicates `isSuccessResponse` and `isErrorResponse`
// Use the `is` keyword to create type predicates
// Write a function that uses these predicates to handle different response types

// TODO: Test all your type guards with different values
// This demonstrates how type guards help with type safety and runtime checking

export {};
