// Exercise 6: Comprehensive Type Guards
// Practice using various type guards to refine types

// Basic typeof guards
let value: unknown = "Hello, TypeScript!";

if (typeof value === "string") {
  console.log(`String value: ${value}`);
} else if (typeof value === "number") {
  console.log(`Number value: ${value}`);
} else if (typeof value === "boolean") {
  console.log(`Boolean value: ${value}`);
}

// instanceof guards
class User {
  constructor(public name: string, public email: string) {}
}

class Admin extends User {
  constructor(name: string, email: string, public permissions: string[]) {
    super(name, email);
  }
}

const user = new User("John", "john@example.com");
const admin = new Admin("Jane", "jane@example.com", ["read", "write"]);

function processUser(user: User | Admin): string {
  if (user instanceof Admin) {
    // TypeScript knows this is Admin
    return `Admin ${user.name} has ${user.permissions.length} permissions`;
  } else {
    // TypeScript knows this is User
    return `User ${user.name} (${user.email})`;
  }
}

console.log(processUser(user));
console.log(processUser(admin));

// in operator guards
interface Apple {
  isGoodForBaking: boolean;
  ripe: boolean;
}

interface Orange {
  numOfSegments: number;
  ripe: boolean;
}

function pickFruit(fruit: Apple | Orange): string {
  if ("isGoodForBaking" in fruit) {
    // TypeScript knows this is Apple
    return `Apple is ${fruit.ripe ? 'ripe' : 'not ripe'} and ${fruit.isGoodForBaking ? 'good for baking' : 'not good for baking'}`;
  } else {
    // TypeScript knows this is Orange
    return `Orange has ${fruit.numOfSegments} segments and is ${fruit.ripe ? 'ripe' : 'not ripe'}`;
  }
}

const apple: Apple = { isGoodForBaking: true, ripe: true };
const orange: Orange = { numOfSegments: 8, ripe: false };

console.log(pickFruit(apple));
console.log(pickFruit(orange));

// Custom type predicates
interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}

function isSuccessResponse(response: unknown): response is ApiResponse & { success: true; data: any } {
  return (
    typeof response === 'object' &&
    response !== null &&
    'success' in response &&
    (response as any).success === true &&
    'data' in response
  );
}

function isErrorResponse(response: unknown): response is ApiResponse & { success: false; error: string } {
  return (
    typeof response === 'object' &&
    response !== null &&
    'success' in response &&
    (response as any).success === false &&
    'error' in response
  );
}

function handleApiResponse(response: unknown): string {
  if (isSuccessResponse(response)) {
    // TypeScript knows this is a success response
    return `Success: ${JSON.stringify(response.data)}`;
  } else if (isErrorResponse(response)) {
    // TypeScript knows this is an error response
    return `Error: ${response.error}`;
  } else {
    return "Unknown response format";
  }
}

const successResponse = { success: true, data: { id: 1, name: "Test" } };
const errorResponse = { success: false, error: "Not found" };

console.log(handleApiResponse(successResponse));
console.log(handleApiResponse(errorResponse));

export {}