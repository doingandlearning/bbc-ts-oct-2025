import type { ValidShape, Circle } from "./shape.types.js";

const PI = 3.14;

function isCircle(shape: ValidShape): shape is Circle {
  return shape.type === "circle";
}

function getCircleArea(radius: number) {
  return radius * radius * PI;
}

function getRectangleArea(length: number, width: number) {
  return length * width;
}

function getSquareArea(width: number) {
  return getRectangleArea(width, width);
}

function getRightTriangleArea(base: number, height: number) {
  return (base * height) / 2;
}

function getArea(shape: ValidShape) {
  if (isCircle(shape)) {
    shape;
  }
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape.radius);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape.length, shape.width);
      break;
    case "square":
      shape.area = getSquareArea(shape.width);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape.base, shape.height);
      break;
  }
}

export { getArea };
