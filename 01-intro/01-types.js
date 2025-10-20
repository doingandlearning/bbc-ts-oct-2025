// 7 Primitive Types in JS
// Boolean, Number, String, null, undefined, Symbol, BigInt
// Symbol(7) === Symbol(7)
// Non-primitive
// Object -> Function
//        -> Array
// Any -> don't type this!  Never
{
    var name_1 = "Kevin";
    name_1 = 5;
    // any, unknown, void, never
    var world = // opting out of the typing system
     void 0; // opting out of the typing system
    world = "Earth";
    // no-implicit any
    function add(a, b) {
        return a + b;
    }
    // unknown - putting the type system on hold
    function addUnknown(a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else {
            return 0;
        }
    }
    function printSomething() {
        // return type of a function that returns nothing
    }
    // never
    function example(x) {
        if (typeof x === "string") {
            x;
            return x;
        }
        else if (typeof x === "number") {
            x;
            return "not a string";
        }
        x;
        throw new Error("Unhandled variable type.");
    }
}
console.log(404 /* STATUS_CODE.NOT_FOUND */);
