// Exercise 9: Integration Exercise
// Combine multiple TypeScript concepts in a real-world scenario

// TODO: Create a News Article Management System
// This exercise combines type inference, interfaces, discriminated unions, type guards, and optional chaining

// TODO: Define Article and Author interfaces
// Article should have: id, title, content, author, status, publishedAt, tags
// Author should have: id, name, email, bio?, socialMedia?

// TODO: Create discriminated union for article status
// Status should be: "draft" | "published" | "archived" | "deleted"
// Each status should have different properties:
// - draft: has lastModified
// - published: has publishedAt, views
// - archived: has archivedAt, reason
// - deleted: has deletedAt, deletedBy

// TODO: Create type guards for article status
// Write functions to check if an article is in a specific status
// Use the `is` keyword for type predicates

// TODO: Create a function to process articles
// Use discriminated unions and type guards to handle different article statuses
// Show how TypeScript narrows types in each case

// TODO: Add optional chaining for safe property access
// Handle cases where author bio or social media might be missing
// Use optional chaining to safely access nested properties

// TODO: Create a function to validate article data
// Use type guards to check if data matches expected structure
// Handle validation errors gracefully

// TODO: Use the satisfies operator for configuration
// Create a configuration object for the news system
// Use satisfies to ensure type safety while preserving literal types

// TODO: Test your system with sample data
// Create articles in different statuses
// Test all your functions with various data scenarios

export {};
