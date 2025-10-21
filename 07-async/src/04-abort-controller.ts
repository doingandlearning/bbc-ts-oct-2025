const ac = new AbortController();
const ac2 = new AbortController();

async function run() {
  try {
    const response = await fetch(
      "https://api.github.com/users/doingandlearning",
      { signal: ac.signal }
    );
    if (!response.ok) {
      throw new Error(`Something went wrong, ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.log("Operation aborted: " + error.message);
      } else {
        console.log(error);
      }
    }
  }
}

const result = run();
setTimeout(() => {
  ac.abort();
}, 10);

console.log(await result);
