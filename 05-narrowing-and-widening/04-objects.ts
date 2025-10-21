interface Apple {
  isGoodForBaking: boolean;
  ripe: boolean;
  color: "red" | "green";
}

interface Orange {
  numOfSegments: number;
  ripe: boolean;
}

function pickFruit(fruit: Apple | Orange) {
  if ("isGoodForBaking" in fruit) {
    return fruit;
  } else {
    return fruit;
  }
  fruit;
}

// Discriminating Union

interface LoadingState {
  status: "loading";
  progress?: number;
}

interface SuccessState<DataType> {
  status: "success";
  data: DataType;
  timestamp: Date;
}

interface ErrorState {
  status: "error";
  error: string;
  retryable: boolean;
}

type States<DataType> = LoadingState | SuccessState<DataType> | ErrorState;
function evaluateState<T>(state: States<T>) {
  switch (state.status) {
    case "loading":
      state;
      break;
    case "error":
      state;
      break;
    case "success":
      state;
      break;
    default:
      state;
  }
}
