# Pre-2015: Callbacks

- Async
  - .addHandler("click", () => {})
- Nested callbacks -> callback hell!

# 2015 - Promises

- Promise() -> receipt -> pending <- forever!
  -> settled (rejected, resolved)
- Chained
- .allSettled(), .all()

# 2017 - async/await

- Syntatic sugar -> Promises

# 2023 - AbortController

const {signal, abort} = new AbortController()

# Signals, RxJS, Observables
