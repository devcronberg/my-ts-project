# GitHub Copilot Instructions for TypeScript Starter Kit

This project is a learning environment for TypeScript beginners. When assisting with code:

## Language and Communication

- **Code**: Always write in English (variables, functions, class names, etc.)
- **Comments**: Always write in Danish
- **Keep it simple**: This is for beginners learning TypeScript

## Code Style Guidelines

### Type Annotations
- Always use explicit type annotations for function parameters and return types
- Example:
  ```typescript
  function add(a: number, b: number): number {
      return a + b;
  }
  ```

### Variable Declarations
- Prefer `const` for values that won't change
- Use `let` for values that will change
- Never use `var`
- Always add type annotations for clarity:
  ```typescript
  const name: string = "Alice";
  let count: number = 0;
  ```

### Functions
- Use regular function syntax for exported functions
- Arrow functions are okay for callbacks
- Always specify return types
- Example:
  ```typescript
  export function runTest(): void {
      // Kører test funktionen
      console.log("Test running");
  }
  ```

### Imports/Exports
- Use ES6 import/export syntax
- Remember `.js` extension in imports (ES modules requirement):
  ```typescript
  import { runTest } from "./test1.js"; // Note: .js not .ts
  ```

### Comments in Danish
Add helpful Danish comments for:
- Function purposes (explain what it does)
- Complex logic (why, not just what)
- Non-obvious TypeScript patterns
- Learning notes for beginners

Example:
```typescript
// Beregner summen af to tal
// Returnerer resultatet som et number
function calculateSum(a: number, b: number): number {
    return a + b;
}

// Henter data fra API'et
// Denne funktion er async fordi den venter på netværks-kald
async function fetchData(): Promise<void> {
    // try/catch bruges til at fange fejl fra fetch
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Hvis noget går galt, vises fejlen her
        console.log("Fejl:", error);
    }
}
```

## TypeScript Best Practices for Beginners

### Avoid `any`
- Never use `any` type (ESLint will warn)
- Use specific types or `unknown` if truly unknown
- Example:
  ```typescript
  // ❌ Dårligt
  let data: any = { name: "Alice" };
  
  // ✅ Godt - definer en interface
  interface Person {
      name: string;
  }
  let data: Person = { name: "Alice" };
  ```

### Use Interfaces and Types
- Create interfaces for object shapes
- Keep them simple and clear
- Example:
  ```typescript
  // Interface beskriver strukturen af et objekt
  interface User {
      name: string;
      age: number;
      email: string;
  }
  
  const user: User = {
      name: "Alice",
      age: 25,
      email: "alice@example.com"
  };
  ```

### Handle Errors Properly
- Use try/catch for async operations
- Provide helpful error messages
- Example:
  ```typescript
  try {
      // Forsøg at udføre operationen
      const result = await riskyOperation();
  } catch (error) {
      // Håndter fejlen på en fornuftig måde
      console.log("Der skete en fejl:", error);
  }
  ```

## Project-Specific Patterns

### Test Files Pattern
- Each test file exports a `runTest()` function
- Keep test files simple and focused
- Example:
  ```typescript
  // test2.ts
  export function runTest(): void {
      console.log("Running test 2...");
      
      // Din test-kode her
      const result = calculateSomething();
      console.log("Result:", result);
  }
  ```

### Async Operations
- This project demonstrates "fire and forget" pattern
- When calling async functions without await, add a comment explaining:
  ```typescript
  // Kalder async funktion uden await - "fire and forget"
  // Funktionen starter men vi venter ikke på den er færdig
  // Node.js holder processen kørende indtil alle async operationer er færdige
  fetchRepoInfo();
  ```

### Console Output
- Use `chalk` for colored console output
- Example:
  ```typescript
  import chalk from "chalk";
  
  console.log(chalk.blue("Information"));
  console.log(chalk.green("Success!"));
  console.log(chalk.yellow("Warning"));
  console.log(chalk.red("Error"));
  ```

## Code Organization

### File Structure
- Keep `index.ts` simple - it just imports and runs tests
- Put actual logic in separate test files
- One concept per file

### Naming Conventions
- Functions: `camelCase` (e.g., `runTest`, `fetchData`)
- Variables: `camelCase` (e.g., `userName`, `totalCount`)
- Interfaces/Types: `PascalCase` (e.g., `User`, `ApiResponse`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_COUNT`, `API_URL`)

## When Suggesting Code

1. **Explain the concept** in a Danish comment first
2. **Show the code** with proper TypeScript types
3. **Add inline comments** in Danish for complex parts
4. **Keep it simple** - avoid advanced TypeScript features
5. **Follow the existing patterns** in the project

## Example of Good Suggestion

```typescript
// Funktion der checker om et tal er lige eller ulige
// Returnerer true hvis tallet er lige, false hvis det er ulige
function isEven(num: number): boolean {
    // Modulo operator (%) returnerer resten af en division
    // Hvis resten er 0, er tallet lige
    return num % 2 === 0;
}

// Test funktionen
console.log(isEven(4));  // true
console.log(isEven(7));  // false
```

## Remember
- This is a **learning project** - prioritize clarity over cleverness
- **Explain TypeScript concepts** that might be new to beginners
- **Be encouraging** - TypeScript can be intimidating at first
- **Suggest improvements** gently with explanations
