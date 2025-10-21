// Colors
const colors: Record<string, string> = {
  red: "#ff0000",
  green: "#00FF00",
  blue: "#0000ff",
  purple: "#800080",
};

interface Theme {
  primary: string;
  secondary: string;
  success: string;
}

// Themes
const theme = {
  primary: "#3b82f6",
  secondary: "#64748b",
  success: "#10b981",
} as const satisfies Theme;

theme.primary;

interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  ssl: boolean;
  timeout: number;
  retries: number;
}

const dbConfigOld = {
  host: "localhost",
  port: 5432,
  database: "myapp",
  ssl: false,
  timeout: 5000,
  retries: 3,
} as const satisfies DatabaseConfig;

dbConfigOld;
