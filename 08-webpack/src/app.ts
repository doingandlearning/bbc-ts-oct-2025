type CallbackFn = () => void;

/** Call with string and dependencies */
function task(name: string, dependencies: string[]): void;
/** Call with string, dependencies and callback */
function task(name: string, dependencies: string[], callback: CallbackFn): void;
/** Call with string and callback */
function task(name: string, callback: CallbackFn): void;
function task(name: string, arg2: string[] | CallbackFn, arg3?: CallbackFn) {
  if (Array.isArray(arg2) && !arg3) {
    arg2;
  } else if (Array.isArray(arg2) && arg3) {
    arg3;
  } else if (!Array.isArray(arg2)) {
    arg2;
  }
}

task("default", ["styles, scripts"]);
task("scripts", ["lint"], () => {});
task("styles", () => {});

// task(
//   "disallows",
//   () => {},
//   () => {}
// );
