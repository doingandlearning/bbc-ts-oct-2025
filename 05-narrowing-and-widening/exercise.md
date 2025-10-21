# Practice Lab - TypeScript Type System Fundamentals

In this module, we explore TypeScript's type inference system, explicit type annotations, and advanced type system features. Each exercise is designed to enhance your understanding of when and how to use TypeScript's type system effectively.

## Getting Started

This exercise includes starter code in the `student/` folder:
- **Individual exercises**: `exercise1.ts` through `exercise9.ts` - Complete each exercise step by step
- **Complete practice**: `type-system-practice.ts` - All exercises in one file for comprehensive practice

## Learning Objectives

By the end of this exercise, you will understand:
- When TypeScript can infer types vs when explicit annotations are needed
- How to create and use interfaces effectively
- Function return type inference and explicit annotations
- Discriminated unions for type-safe state management with exhaustive checking
- Excess property checks and when to bypass them
- Comprehensive type guards (typeof, instanceof, in operator, custom predicates)
- Optional chaining and null safety patterns
- The `satisfies` operator for type checking without type widening
- Integration of multiple TypeScript concepts in real-world scenarios

Follow the instructions for each task and ensure to run and compile your code to see the results.

---

## Exercise 1: Basic Type Inference

**Objective:** Understand and practice basic type inference in TypeScript.

**Tasks:**

1. Define a variable `a` with an explicit type annotation of `boolean` and assign it a value of `true`.
2. Define a variable `b` without an explicit type annotation and assign it a value of `42`.
3. Think why TypeScript can infer the type of `b` but an explicit type is provided for `a`.

---

## Exercise 2: Using Type Inference with Complex Objects

**Objective:** Practice using type inference with complex objects.

**Tasks:**

1. Define an object `book` with explicit type annotations for each property, including nested properties.
2. Create an interface `Book` and refactor the object definition using this interface.
3. Assign values to `book` and log the properties to the console.

---

## Exercise 3: Function Return Types

**Objective:** Learn to use type inference and explicit return types in functions.

**Tasks:**

1. Define a function `multiply` that takes an array of numbers and returns an array with each element multiplied by 2.
2. Explain why TypeScript infers the return type correctly.
3. Add an explicit return type to the `multiply` function.

---

## Exercise 4: Discriminated Unions

**Objective:** Understand and use discriminated unions in TypeScript.

**Tasks:**

1. Define interfaces `SuccessResponse` and `ErrorResponse` with a common property `status`.
2. Create a type alias `ApiResponse` that can be either `SuccessResponse` or `ErrorResponse`.
3. Write a function `handleResponse` that processes the `ApiResponse` using a switch statement.
4. Add a default case to the switch statement to handle unexpected response types.

---

## Exercise 5: Excess Property Checks

**Objective:** Understand and use excess property checks in TypeScript.

**Tasks:**

1. Define an interface `Car` with properties `make`, `model`, and `year`.
2. Create an object `car` that conforms to the `Car` interface.
3. Assign additional properties to the `car` object and observe TypeScript's response.

---

## Exercise 6: Comprehensive Type Guards

**Objective:** Practice using various type guards to refine types.

**Tasks:**

1. Use `typeof` operator to check for different primitive types.
2. Use `instanceof` operator to distinguish between class instances.
3. Use `in` operator to check for object properties.
4. Create custom type predicates using the `is` keyword.
5. Combine multiple type guards for complex validation.

---

## Exercise 7: Optional Chaining & Null Safety

**Objective:** Learn to handle null/undefined values safely.

**Tasks:**

1. Use `document.getElementById()` and handle the null case.
2. Compare optional chaining (`?.`) with non-null assertion (`!`).
3. Demonstrate control flow analysis with if/else statements.
4. Use optional chaining for nested object access.
5. Create functions that safely handle potentially null values.

---

## Exercise 8: Satisfies Operator

**Objective:** Learn to use the `satisfies` operator for type checking without type widening.

**Tasks:**

1. Compare `satisfies` with type annotations.
2. Use `satisfies` with configuration objects.
3. Apply `satisfies` to API response validation.
4. Use `satisfies` with form schemas.
5. Demonstrate the benefits over type assertions.

---

## Exercise 9: Integration Exercise

**Objective:** Combine multiple TypeScript concepts in a real-world scenario.

**Tasks:**

1. Create a News Article Management System.
2. Use discriminated unions for article status.
3. Implement comprehensive type guards.
4. Apply optional chaining for safe property access.
5. Use the `satisfies` operator for configuration.
6. Integrate all concepts in a cohesive system.

---
