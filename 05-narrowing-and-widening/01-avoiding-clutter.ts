import { Person } from "./types";

const person: Person = {}; // Wider or Narrower

person.name = "Kelly";
person.location = "Glasgow";

type ValidLocations =
  | "Belfast"
  | "Salford"
  | "Glasgow"
  | "London"
  | "Newcastle";

let location: ValidLocations = "Belfast";
