export interface Shape {
  type: "circle" | "rectangle" | "rightTriangle" | "square";
}

export interface Circle {
  type: "circle";
  area?: number;
  radius: number;
}

export interface Rectangle {
  length: number;
  width: number;
  area?: number;

  type: "rectangle";
}

export interface RightTriangle {
  base: number;
  area?: number;
  height: number;
  type: "rightTriangle";
}

export interface Square {
  area?: number;
  width: number;
  type: "square";
}

export type ValidShape = Circle | Square | RightTriangle | Rectangle;
