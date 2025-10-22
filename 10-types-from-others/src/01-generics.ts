// Generics -> can feel quite scary!

function firstElement<Type>(a: Type[]): Type | undefined {
  return a[0];
}

const a_s = ["a", "b", "c"];
const a_n = [1, 2, 3];
const a_m = ["one", 2, "three"];

const getSecondElement = <T>(a: T[]) => a[1];

getSecondElement(a_s);
getSecondElement(a_n);

// extends
// utility -> TS
// conditionals -> tenary
// keyin
// keyof
