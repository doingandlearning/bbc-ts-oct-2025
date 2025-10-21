// enum AxisEnum {
//   "x",
//   "y",
//   "z",
// }

// type Vector3Enum = {
//   x: AxisEnum;
//   y: AxisEnum;
//   z: AxisEnum;
// };

// function getComponentEnum(vector: Vector3, axis: AxisEnum) {
//   return vector[axis];
// }

type Vector3 = {
  x: number;
  y: number;
  z: number;
};

type Axis = "x" | "y" | "z";

function getComponent(vector: Vector3, axis: Axis) {
  return vector[axis];
}

let vec = { x: 10, y: 20, z: 30 };
let axis: Axis = "x";
const axis2 = "x";

getComponent(vec, axis as Axis); // Type Assertion - heavy hammer!
getComponent(vec, axis);
getComponent(vec, axis2);
