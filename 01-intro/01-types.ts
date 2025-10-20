// 7 Primitive Types in JS
// Boolean, Number, String, null, undefined, Symbol, BigInt

// Symbol(7) === Symbol(7)

// Non-primitive
// Object -> Function
//        -> Array

// Any -> don't type this!  Never

{
  let name: string = "Kevin";
  name = 5;

  // any, unknown, void, never
  let world: any; // opting out of the typing system

  world = "Earth";

  // no-implicit any
  function add(a: number, b: number): number {
    return a + b;
  }

  // unknown - putting the type system on hold
  function addUnknown(a, b: unknown): number {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      return 0;
    }
  }

  function printSomething(): void {
    // return type of a function that returns nothing
  }

  // never
  function example(x: string | number) {
    if (typeof x === "string") {
      x;
      return x;
    } else if (typeof x === "number") {
      x;
      return "not a string";
    }
    x;
    throw new Error("Unhandled variable type.");
  }
}

const enum STATUS_CODE {
  "OK" = 200,
  "NOT_FOUND" = 404,
  "UNAUTHORIZED" = 403,
}

console.log(STATUS_CODE.NOT_FOUND);
