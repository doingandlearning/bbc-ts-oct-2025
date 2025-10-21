// Exercise 4: Discriminated Unions
// Understand and use discriminated unions in TypeScript

// TODO: Define interfaces `SuccessResponse<T>` and `ErrorResponse` with a common property `status`
// SuccessResponse should have:
// - status: "success"
// - data: T (generic type)
// - timestamp: Date
// ErrorResponse should have:
// - status: "error"
// - message: string
// - code: number
// - retryable: boolean

// TODO: Create a type alias `ApiResponse<T>` that can be either `SuccessResponse<T>` or `ErrorResponse`
// Use a union type to combine the two interfaces

// TODO: Write a function `handleResponse<T>` that processes the `ApiResponse<T>` using a switch statement
// The function should:
// - Take an `ApiResponse<T>` parameter
// - Use a switch statement on the `status` property
// - Handle each case appropriately (return formatted strings)
// - Show how TypeScript narrows types in each case

// TODO: Add a default case with exhaustive checking using `never` type
// This ensures TypeScript catches missing cases at compile time

// TODO: Create sample responses for testing
// Create instances of both response types with different data types and test your function

export {};
