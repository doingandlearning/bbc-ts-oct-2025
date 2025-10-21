const ac = new AbortController();

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

run();
setTimeout(() => {
  ac.abort();
}, 10);
