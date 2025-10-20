const num: Array<number> = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const num2: number[] = [1, 4, 9, 16, 25, 36, 49, 64];

const nums3 = [...num2]; // Assignment by value or by reference?
nums3.push(81);

console.log(num2);
console.log(nums3);

const people = [{ name: "Duncan" }, { name: "Angel" }];
// let newPeople = JSON.parse(JSON.stringify(people));
let newPeople = structuredClone(people);
newPeople.push({ name: "Kelly" });

console.log(people);
console.log(newPeople);

people[0].name = "DUNCAN";

console.log(people);
console.log(newPeople);

//

newPeople.forEach((person) => console.log(`Hello ${person.name}`));

type UpdatedPerson = {
  name: string;
  nameLength: number;
};

const result = newPeople
  .map<UpdatedPerson>((person) => {
    return {
      name: person.name,
      nameLength: person.name.length,
    };
  })
  .filter((person) => person.nameLength < 6);

console.log(result);
// a=accumulator, c=current
const nextResult = result.reduce<string[]>((a, c) => [...a, c.name], []);
console.log(nextResult);

// nextResult.some()
// nextResult.every(() =>)
// nextResult.find()
nextResult.
