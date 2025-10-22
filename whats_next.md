# 🎯 What’s Next in Your TypeScript Practice

You’ve completed the course — now it’s about turning knowledge into engineering impact.
Here’s how to build on what you’ve learned inside the BBC codebase and beyond.

---

## 🚀 The Next Two Weeks — Consolidate and Apply

### 1. **Apply It in Real Code**

* Refactor a **component, service, or utility** from `any` to strong types.
* Add **strict mode** to one repo and fix the resulting errors methodically.
* Pair with a colleague to review **type design**, not just runtime behaviour.

### 2. **Reflect and Document**

* Capture one *before/after* example of improved safety or clarity from your own code.
* Add a short **developer note or ADR** explaining a typing decision (e.g. `satisfies`, discriminated unions).

### 3. **Share Knowledge**

* Post one internal message on what you’ve learned — Slack, Teams, or a short demo.
* Offer a 15-minute “Type Tip” in your next team meeting.

---

## 📚 Deepening Expertise — Over the Next Month

### **Key Technical Areas**

| Focus                        | Why It Matters at the BBC                                                    |
| ---------------------------- | ---------------------------------------------------------------------------- |
| **Type-Safe APIs**           | Most systems exchange JSON; infer types from OpenAPI or GraphQL schemas.     |
| **Type Inference Mastery**   | Reduce duplication in shared libraries and test suites.                      |
| **Refining Types for React** | Improve component props, context, and custom hooks typing.                   |
| **Toolchain Understanding**  | How `tsc`, `vite`, or `webpack` integrate with BBC build and test pipelines. |

### **Practice Projects**

* Create a **type-safe data model** for one existing REST API.
* Write a **utility type** that replaces a common runtime check in your code.
* Explore **Zod** or **io-ts** for runtime schema validation.

---

## 🧭 The Next Quarter — Professional Maturity

### **Architectural Typing**

* Use **mapped + conditional types** to model domain rules (permissions, editorial states, etc.).
* Design **internal type libraries** — shared utilities for your team’s services.
* Evaluate **monorepo patterns** (`tsconfig.paths`, project references, build isolation).

### **Testing & Tooling**

* Add **type tests** (e.g. `expect-type`, `tsd`) for public utilities.
* Strengthen **linting and pre-commit** checks with `@typescript-eslint`.
* Use **type-driven TDD**: write the types before you write the code.

---

## 🧩 Integrate with BBC Workflows

* Align types across **frontend and backend contracts** using shared schema generation.
* Review how **Playwright** or **Jest** tests can infer types automatically.
* Ensure new projects start with a **minimal strict `tsconfig.json`** template.
* Help maintain **internal TypeScript guidelines** — idioms, naming, file structure.

---

## 🧠 Keep Learning

| Resource                                 | Why It’s Worth Your Time                               |
| ---------------------------------------- | ------------------------------------------------------ |
| **Effective TypeScript** (Dan Vanderkam) | Pragmatic patterns for large codebases.                |
| **Total TypeScript** (Matt Pocock)       | Deep dives and exercises on advanced inference.        |
| **Type Challenges**                      | Daily 10-minute puzzles to sharpen type-level fluency. |

Also follow:

* [TypeScript blog](https://devblogs.microsoft.com/typescript/)
* [typescript-eslint releases](https://github.com/typescript-eslint/typescript-eslint/releases)

---

## 🤝 Contribute and Lead

* Review PRs for **type clarity and correctness**, not just logic.
* Open internal tickets where **types can express intent** more clearly.
* Share snippets or patterns that reduce duplication across teams.
* Consider contributing type definitions to **DefinitelyTyped** or BBC open-source repos.

---

## 🧭 Milestones

| Stage                      | Evidence of Growth                                                       |
| -------------------------- | ------------------------------------------------------------------------ |
| **Confident Practitioner** | You design and refactor types without breaking builds.                   |
| **Team Resource**          | Colleagues ask you to sanity-check their type decisions.                 |
| **TypeScript Advocate**    | You help set team standards, introduce new TS tooling, or mentor others. |

---

## ✨ Final Thought

TypeScript isn’t just about correctness — it’s about **communication**.
Strong types make intent explicit, accelerate onboarding, and prevent hidden coupling.
Keep typing the boundaries, simplifying the internals, and sharing what you learn.

**Next week, pick one place in BBC code that hurts to refactor — and make it type-safe.**
That’s how you keep levelling up.
