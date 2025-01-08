# Unhandled Exception in TypeScript Arithmetic Functions

This repository demonstrates a common error in TypeScript: failing to handle exceptions. The `bug.ts` file contains a set of arithmetic functions (`add`, `subtract`, `multiply`, `divide`). The `divide` function throws an error if division by zero is attempted. However, the main part of the code doesn't include any error handling, leading to an unhandled exception.

The `bugSolution.ts` file shows how to properly handle this exception using a `try...catch` block.

## How to reproduce the bug

1. Clone this repository.
2. Compile and run `bug.ts` using a TypeScript compiler (e.g., `tsc bug.ts && node bug.js`).
3. Observe the unhandled exception.