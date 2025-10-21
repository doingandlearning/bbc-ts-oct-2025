// Exercise 7: Optional Chaining & Null Safety
// Practice handling null/undefined values safely with optional chaining and control flow analysis

// DOM Element Null Handling
const elem = document.getElementById("headline");
// elem is HTMLElement | null

// Without null checking - TypeScript error
// elem.textContent = "New headline"; // Error: Object is possibly 'null'

// With optional chaining - safe
elem?.textContent = "New headline";

// Optional Chaining vs Non-null Assertion
console.log("Optional chaining:", elem?.textContent); // Safe, returns undefined if null
console.log("Non-null assertion:", elem!.textContent); // Unsafe, could throw at runtime

// Control Flow Analysis
if (elem) {
  // TypeScript knows elem is not null here
  elem.textContent = "Updated headline";
  elem.style.color = "blue";
} else {
  // TypeScript knows elem is null here
  console.log("Element not found");
}

// Nested Object Access
interface User {
  id: number;
  name: string;
  email: string;
  address?: {
    street?: string;
    city?: string;
    country?: {
      code?: string;
      name?: string;
    };
  };
  preferences?: {
    theme?: string;
    notifications?: boolean;
  };
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
  // address and preferences are optional
};

// Safe nested access with optional chaining
const countryName = user.address?.country?.name ?? "Unknown";
const theme = user.preferences?.theme ?? "light";
const notifications = user.preferences?.notifications ?? true;

console.log(`Country: ${countryName}, Theme: ${theme}, Notifications: ${notifications}`);

// Function with Null Safety
function updateElementContent(element: HTMLElement | null, content: string): string {
  // Approach 1: Optional chaining
  element?.textContent = content;
  
  // Approach 2: If/else with control flow analysis
  if (element) {
    element.textContent = content;
    return "Updated successfully";
  } else {
    return "Element not found";
  }
  
  // Approach 3: Non-null assertion (dangerous!)
  // element!.textContent = content; // Could throw at runtime
}

// Real-world Example: User Data Processing
function processUserData(user: User): string {
  const address = user.address?.street 
    ? `${user.address.street}, ${user.address.city || 'Unknown City'}`
    : 'No address provided';
    
  const country = user.address?.country?.name || 'Unknown Country';
  const theme = user.preferences?.theme || 'light';
  const notifications = user.preferences?.notifications ? 'enabled' : 'disabled';
  
  return `
    User: ${user.name}
    Email: ${user.email}
    Address: ${address}
    Country: ${country}
    Theme: ${theme}
    Notifications: ${notifications}
  `;
}

console.log(processUserData(user));

// Advanced: Chaining with Methods
const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com", address: { city: "London" } }
];

// Safe method chaining
const firstUserAddress = users[0]?.address?.city ?? "No address";
const secondUserAddress = users[1]?.address?.city ?? "No address";

console.log(`First user city: ${firstUserAddress}`);
console.log(`Second user city: ${secondUserAddress}`);

// Nullish Coalescing with Optional Chaining
const defaultTheme = "dark";
const userTheme = user.preferences?.theme ?? defaultTheme;
console.log(`User theme: ${userTheme}`);

export {};
