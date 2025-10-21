// Exercise 8: Satisfies Operator
// Learn to use the `satisfies` operator for type checking without type widening

// Basic Satisfies vs Type Annotations
interface Theme {
  primary: string;
  secondary: string;
  accent: string;
}

// Type annotation - widens the type
const themeWithAnnotation: Theme = {
  primary: "#ff0000",
  secondary: "#00ff00", 
  accent: "#0000ff"
};
// themeWithAnnotation.primary is string, not "#ff0000"

// Satisfies operator - preserves literal types
const themeWithSatisfies = {
  primary: "#ff0000",
  secondary: "#00ff00",
  accent: "#0000ff"
} satisfies Theme;
// themeWithSatisfies.primary is "#ff0000", not just string

console.log("Type annotation primary:", themeWithAnnotation.primary);
console.log("Satisfies primary:", themeWithSatisfies.primary);

// Configuration Objects
interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
  headers: Record<string, string>;
}

const apiConfig = {
  baseUrl: "https://api.example.com/v1",
  timeout: 5000,
  retries: 3,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
  }
} satisfies ApiConfig;

// The exact URL and timeout values are preserved
console.log("API Base URL:", apiConfig.baseUrl);
console.log("Timeout:", apiConfig.timeout);

// API Response Validation
interface UserResponse {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending";
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}

const userApiResponse = {
  success: true,
  data: {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "active" as const
  },
  timestamp: "2024-01-15T10:30:00Z"
} satisfies ApiResponse<UserResponse>;

// The exact status literal is preserved
console.log("User status:", userApiResponse.data.status);

// Form Schema Validation
interface FormSchema {
  fields: {
    name: { required: boolean; minLength: number };
    email: { required: boolean; pattern: string };
    age: { required: boolean; min: number; max: number };
  };
  validation: {
    strict: boolean;
    showErrors: boolean;
  };
}

const formConfig = {
  fields: {
    name: { required: true, minLength: 2 },
    email: { required: true, pattern: "^[^@]+@[^@]+\\.[^@]+$" },
    age: { required: false, min: 0, max: 120 }
  },
  validation: {
    strict: true,
    showErrors: true
  }
} satisfies FormSchema;

// Exact validation rules are preserved
console.log("Email pattern:", formConfig.fields.email.pattern);
console.log("Age range:", formConfig.fields.age.min, "-", formConfig.fields.age.max);

// Object Literal Patterns
interface EventHandlers {
  onClick: (event: MouseEvent) => void;
  onKeyDown: (event: KeyboardEvent) => void;
  onFocus: (event: FocusEvent) => void;
}

const handlers = {
  onClick: (event: MouseEvent) => console.log("Clicked at", event.clientX, event.clientY),
  onKeyDown: (event: KeyboardEvent) => console.log("Key pressed:", event.key),
  onFocus: (event: FocusEvent) => console.log("Focused on", event.target)
} satisfies EventHandlers;

// The exact function implementations are preserved
console.log("Handlers configured:", Object.keys(handlers));

// Advanced Patterns with Generic Types
interface ResourceConfig<T> {
  endpoint: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  data?: T;
  headers: Record<string, string>;
}

const userResource = {
  endpoint: "/api/users",
  method: "GET" as const,
  headers: {
    "Accept": "application/json"
  }
} satisfies ResourceConfig<never>;

const createUserResource = {
  endpoint: "/api/users",
  method: "POST" as const,
  data: {
    name: "New User",
    email: "new@example.com"
  },
  headers: {
    "Content-Type": "application/json"
  }
} satisfies ResourceConfig<{ name: string; email: string }>;

// The exact HTTP methods are preserved
console.log("User resource method:", userResource.method);
console.log("Create user method:", createUserResource.method);

// Complex Nested Objects
interface AppSettings {
  theme: {
    mode: "light" | "dark";
    colors: {
      primary: string;
      secondary: string;
    };
  };
  features: {
    notifications: boolean;
    analytics: boolean;
    experimental: boolean;
  };
  api: {
    baseUrl: string;
    version: string;
    timeout: number;
  };
}

const appSettings = {
  theme: {
    mode: "dark" as const,
    colors: {
      primary: "#1a1a1a",
      secondary: "#ffffff"
    }
  },
  features: {
    notifications: true,
    analytics: false,
    experimental: true
  },
  api: {
    baseUrl: "https://api.myapp.com",
    version: "v2",
    timeout: 10000
  }
} satisfies AppSettings;

// All literal types are preserved
console.log("Theme mode:", appSettings.theme.mode);
console.log("API version:", appSettings.api.version);
console.log("Primary color:", appSettings.theme.colors.primary);

// Benefits over Type Assertions
// Type assertion - no runtime checking, can be wrong
const badConfig = {
  baseUrl: "not-a-url",
  timeout: "not-a-number" // This would be wrong but TypeScript won't catch it
} as ApiConfig;

// Satisfies - TypeScript checks the structure at compile time
// const goodConfig = {
//   baseUrl: "not-a-url",
//   timeout: "not-a-number" // TypeScript error: string is not assignable to number
// } satisfies ApiConfig;

export {};
