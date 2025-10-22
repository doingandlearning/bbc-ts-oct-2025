// @ts-nocheck -> whole file and has to be at the top
import { test, expect, vi } from "vitest";
import { add } from "./add.js";

// vi.spyOn()

test("adds numbers correctly", () => {
  // Arrange  - Given
  const a = 2;
  const b = 3;
  const expected = 5;
  // Act      - When
  const result = add(a, b);
  // Assert   - Then
  expect(result).toEqual(expected);
  expect(add(4, 4)).toEqual(8);
});

const testCases = [
  { a: -1, b: 0, result: -1 },
  { a: 0.3, b: 0.2, result: 0.5 },
  { a: -10, b: -3, result: -13 },
  { a: 0, b: 0, result: 0 },
  { a: Number.MAX_SAFE_INTEGER, b: -1, result: Number.MAX_SAFE_INTEGER - 1 },
];

test.each(testCases)("add($a, $b) = $result", ({ a, b, result }) => {
  expect(add(a, b)).toEqual(result);
});

test("error if i try to add non-numbers", () => {
  expect(() => add([], [])).toThrow();
  expect(() => add([], 2)).toThrowErrorMatchingInlineSnapshot(
    `[TypeError: Both arguments should be numbers.]`
  );
  expect(() => add(5, [] as any)).toThrowErrorMatchingSnapshot();
});
