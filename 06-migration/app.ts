import { getArea } from "./shape.js";
import type {
  Circle,
  Rectangle,
  RightTriangle,
  Square,
} from "./shape.types.js";

const circle: Circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};

getArea(rightTriangle);
console.log(rightTriangle);
