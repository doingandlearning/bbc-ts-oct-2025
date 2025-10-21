interface SuccessResponse<T> {
  status: "success";
  data: T;
  timestamp: Date;
}

interface ErrorResponse {
  status: "error";
  message: string;
  code: number;
  retryable: boolean;
}

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

function handleResponse<T>(response: ApiResponse<T>): string {
  switch (response.status) {
    case "success":
      // TypeScript knows this is SuccessResponse<T>
      return `Success: ${JSON.stringify(response.data)} at ${response.timestamp}`;
    case "error":
      // TypeScript knows this is ErrorResponse
      return `Error ${response.code}: ${response.message}${response.retryable ? ' (retryable)' : ''}`;
    default:
      // Exhaustive checking - TypeScript ensures all cases are handled
      const _exhaustiveCheck: never = response;
      return _exhaustiveCheck;
  }
}

// Example usage with different data types
interface UserData {
  id: number;
  name: string;
  email: string;
}

const successResponse: ApiResponse<UserData> = {
  status: "success",
  data: { id: 1, name: "John Doe", email: "john@example.com" },
  timestamp: new Date()
};

const errorResponse: ApiResponse<UserData> = {
  status: "error",
  message: "User not found",
  code: 404,
  retryable: true
};

console.log(handleResponse(successResponse));
console.log(handleResponse(errorResponse));
