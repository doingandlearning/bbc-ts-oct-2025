type APIResponse<DataType> = {
  statusCode: number;
  statusText: string;
  results?: number;
  data: Array<DataType>;
};

type IncompleteResponse<T> = Partial<APIResponse<T>>;

type InCompleteResponseTwo<T> = {
  readonly [K in keyof APIResponse<T>]?: K extends "statusCode" | "statusText"
    ? string
    : APIResponse<T>[K];
};
