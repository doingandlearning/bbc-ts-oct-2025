// 4. Optional Chaining and Nullish Coalescing
// Modern JavaScript features essential for TypeScript development

// ===== BEFORE: Traditional null/undefined checking =====

interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
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

const user1: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
  role: "user",
  address: {
    street: "123 Main St",
    city: "London",
    country: {
      code: "UK",
      name: "United Kingdom",
    },
  },
};

const user2: User = {
  id: 2,
  name: "Jane",
  email: "jane@example.com",
  role: "user",
  // No address or preferences
};

// BEFORE: Verbose null checking
function getUserCountryCode(user: User): string {
  // tried to access property of undefined/null
  if (user.address && user.address.country && user.address.country.code) {
    return user.address.country.code;
  }
  return "Unknown";
}

function getUserTheme(user: User): string {
  if (user.preferences && user.preferences.theme) {
    return user.preferences.theme;
  }
  return "light"; // default
}

// BEFORE: Complex conditional logic
function displayUserInfo(user: User): string {
  let info = `Name: ${user.name}\n`;

  if (user.address) {
    info += `Address: ${user.address.street || "No street"}`;
    if (user.address.city) {
      info += `, ${user.address.city}`;
    }
    if (user.address.country) {
      info += `, ${
        user.address.country.name ||
        user.address.country.code ||
        "Unknown country"
      }`;
    }
    info += "\n";
  } else {
    info += "Address: Not provided\n";
  }

  if (user.preferences) {
    info += `Theme: ${user.preferences.theme || "light"}\n`;
    info += `Notifications: ${
      user.preferences.notifications !== undefined
        ? user.preferences.notifications
        : "Not set"
    }\n`;
  } else {
    info += "Preferences: Not set\n";
  }

  return info;
}

console.log("=== BEFORE: Traditional null checking ===");
console.log(getUserCountryCode(user1)); // "UK"
console.log(getUserCountryCode(user2)); // "Unknown"
console.log(getUserTheme(user1)); // "light"
console.log(getUserTheme(user2)); // "light"
console.log(displayUserInfo(user1));
console.log(displayUserInfo(user2));

// ===== AFTER: Optional Chaining and Nullish Coalescing =====

// function getUserCountryCode(user: User): string {
//   // tried to access property of undefined/null
//   if (user.address && user.address.country && user.address.country.code) {
//     return user.address.country.code;
//   }
//   return "Unknown";
// }

// AFTER: Clean optional chaining
function getUserCountryCodeModern(user: User): string {
  return user.address?.country?.code ?? "Unknown";
}

function getUserThemeModern(user: User): string {
  return user.preferences?.theme ?? "light";
}

// test ? true : false
// true ?? false

// AFTER: Concise with optional chaining and nullish coalescing
function displayUserInfoModern(user: User): string {
  const street = user.address?.street ?? "No street";
  const city = user.address?.city;
  const country =
    user.address?.country?.name ??
    user.address?.country?.code ??
    "Unknown country";
  const theme = user.preferences?.theme ?? "light";
  const notifications = user.preferences?.notifications ?? "Not set";

  return `Name: ${user.name}
Address: ${street}${city ? `, ${city}` : ""}${
    user.address ? `, ${country}` : "Not provided"
  }
Theme: ${theme}
Notifications: ${notifications}`;
}

console.log("\n=== AFTER: Optional chaining and nullish coalescing ===");
console.log(getUserCountryCodeModern(user1)); // "UK"
console.log(getUserCountryCodeModern(user2)); // "Unknown"
console.log(getUserThemeModern(user1)); // "light"
console.log(getUserThemeModern(user2)); // "light"
console.log(displayUserInfoModern(user1));
console.log(displayUserInfoModern(user2));

// ===== Additional Examples =====

// Method calls with optional chaining
const users2: User[] = [user1, user2];

// BEFORE: Check if method exists before calling
users2.forEach((user) => {
  if (user.preferences && typeof user.preferences.notifications === "boolean") {
    console.log(
      `User ${user.name} notifications: ${user.preferences.notifications}`
    );
  }
});

// AFTER: Safe method calls
users2.forEach((user) => {
  console.log(
    `User ${user.name} notifications: ${
      user.preferences?.notifications ?? "Not set"
    }`
  );
});

// Array access with optional chaining
const data = {
  users: [
    { name: "Alice", scores: [85, 92, 78] },
    { name: "Bob", scores: [91, 88, 94] },
    { name: "Charlie" }, // No scores
  ],
};

// BEFORE: Multiple checks
data.users.forEach((user) => {
  if (user.scores && user.scores.length > 0) {
    const firstScore = user.scores[0];
    console.log(`${user.name}'s first score: ${firstScore}`);
  }
});

// AFTER: Optional chaining for array access
data.users.forEach((user) => {
  const firstScore = user.scores?.[0];
  console.log(`${user.name}'s first score: ${firstScore ?? "No scores"}`);
});

// Nullish coalescing with function calls
function getConfigValue(key: string): string | undefined {
  const config = {
    apiUrl: "https://api.example.com",
    timeout: "5000",
  };
  return config[key as keyof typeof config];
}

// BEFORE: Check for undefined and null
const apiUrl = getConfigValue("apiUrl");
const timeout = getConfigValue("timeout");
const retries = getConfigValue("retries");

const finalApiUrl =
  apiUrl !== undefined && apiUrl !== null ? apiUrl : "https://default-api.com";
const finalTimeout =
  timeout !== undefined && timeout !== null ? timeout : "3000";
const finalRetries = retries !== undefined && retries !== null ? retries : "3";

// AFTER: Nullish coalescing handles both null and undefined
const finalApiUrlModern = getConfigValue("apiUrl") ?? "https://default-api.com";
const finalTimeoutModern = getConfigValue("timeout") ?? "3000";
const finalRetriesModern = getConfigValue("retries") ?? "3";

console.log("\n=== Configuration values ===");
console.log(`API URL: ${finalApiUrlModern}`);
console.log(`Timeout: ${finalTimeoutModern}`);
console.log(`Retries: ${finalRetriesModern}`);

// TypeScript benefits with optional chaining
interface ApiResponse<T> {
  data?: T;
  error?: string;
  metadata?: {
    timestamp?: string;
    version?: string;
  };
}

function processApiResponse<T>(response: ApiResponse<T>): string {
  // TypeScript knows these are safe operations
  const data = response.data;
  const error = response.error;
  const timestamp = response.metadata?.timestamp;
  const version = response.metadata?.version;

  if (error) {
    return `Error: ${error} (Version: ${version ?? "Unknown"})`;
  }

  if (data) {
    return `Success: Data received at ${timestamp ?? "Unknown time"}`;
  }

  return "No data or error information";
}

const successResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Test" },
  metadata: { timestamp: "2025-01-01T00:00:00Z", version: "1.0.0" },
};

const errorResponse: ApiResponse<never> = {
  error: "Not found",
  metadata: { version: "1.0.0" },
};

console.log("\n=== API Response processing ===");
console.log(processApiResponse(successResponse));
console.log(processApiResponse(errorResponse));

export {};
