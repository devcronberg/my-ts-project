# TypeScript Starter Kit

A simple TypeScript starter project for learning and experimentation.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [VS Code](https://code.visualstudio.com/) (recommended)

### Installation

1. Clone or download this project
2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run dev
```

You should see colored output showing the test results!

## 📦 Project Structure

```
my-ts-project/
├── src/
│   ├── index.ts          # Main entry point
│   └── test1.ts          # Example test module
├── dist/                 # Compiled JavaScript (generated)
├── .vscode/              # VS Code configuration
│   ├── launch.json       # Debug configurations
│   ├── tasks.json        # Build tasks
│   ├── settings.json     # Project settings
│   ├── extensions.json   # Recommended extensions
│   └── typescript.code-snippets  # Custom code snippets
├── eslint.config.js      # ESLint configuration
├── .prettierrc           # Prettier configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript compiler options
```

## 🎯 Working with Test Files

The project is organized around simple test modules that you can experiment with:

- **`test1.ts`** - Basic TypeScript examples (classes, async, fetch)
- **`test2.ts`** - ESLint & SonarJS code smell demonstrations
- **`test3.ts`** - Calculator class with GitHub Copilot demo
- **`test3.test.ts`** - Test suite for Calculator class
- **`index.ts`** - Imports and runs all test modules

### Adding Your Own Tests

1. Create a new file: `src/test2.ts`
2. Export a `runTest()` function:
   ```typescript
   export function runTest(): void {
       console.log("Running test 2...");
       // Your code here
   }
   ```
3. Import it in `index.ts`:
   ```typescript
   import { runTest as runTest2 } from "./test2.js";
   ```
4. Call it:
   ```typescript
   runTest2();
   ```
5. Run with `npm run dev`

You can create `test2.ts`, `test3.ts`, `test4.ts`, etc. and experiment freely!

### ⚠️ Important Note about Imports

Notice the `.js` extension in imports:
```typescript
import { runTest } from "./test1.js";  // .js, not .ts!
```

This is correct! When using ES Modules in TypeScript:
- You write code in `.ts` files
- TypeScript compiles them to `.js` files in `dist/`
- Import statements are **not changed** by the compiler
- So you must use `.js` extensions even though the source files are `.ts`

This is a TypeScript quirk with ES modules that often confuses beginners.

## 🛠️ Available Scripts

### Build and Run

```bash
npm run build    # Compile TypeScript to JavaScript
npm run watch    # Watch mode - auto-recompile on changes
npm start        # Run the compiled program
npm run dev      # Build and run in one command
```

### Testing

```bash
npm test         # Compile and run tests with Node.js test runner
```

### Code Quality

```bash
npm run lint       # Check code with ESLint
npm run lint:fix   # Auto-fix ESLint issues
npm run format     # Format code with Prettier
```

### Quick Start

The easiest way to run the project:

```bash
npm run dev
```

## 🐛 Debugging

### In VS Code:

- **F5** - Start debugging (with breakpoints)
- **Ctrl+F5** - Run without debugging
- Or use the Run menu and select "Debug Program"

### Setting Breakpoints:

1. Open a `.ts` file in `src/`
2. Click in the left margin to add a red breakpoint
3. Press **F5** to start debugging
4. Execution will pause at your breakpoint

## ⚡ VS Code Features

### Code Snippets

This project includes useful shortcuts to speed up your coding:

- **`ts_log`** → `console.log();`
- **`ts_logl`** → `console.log('label:', variable);`
- **`ts_fn`** → Create a function
- **`ts_af`** → Create an arrow function
- **`ts_expfn`** → Export a function
- **`ts_int`** → Create an interface
- **`ts_type`** → Create a type
- **`ts_for`** → Simple for loop

Just type `ts_` and you'll see all available snippets! Press **Tab** or **Enter** to use them.

### Recommended Extensions

When you open this project, VS Code will suggest installing:

- **ESLint** - Code quality and style checking (catches unused variables, `any` types, etc.)
- **Prettier** - Automatic code formatting
- **TypeScript Next** - Latest TypeScript features
- **Error Lens** - Inline error messages (very helpful!)

You can install them by clicking the notification or opening the Extensions panel (Ctrl+Shift+X).

### Automatic Code Quality

This project is configured to help you write better code automatically:

- **Format on Save** - Your code is automatically formatted when you save
- **ESLint Auto-Fix** - Many issues are fixed automatically on save
- **Inline Warnings** - Error Lens shows problems directly in your code
- **SonarJS** - Code smell detection (duplicate code, complexity, etc.)

### Code Quality Demo - Test 2

**Test 2 demonstrerer ESLint og SonarJS code smell detection!**

I `src/test2.ts` finder du eksempler på code smells (kommenteret ud):
- 🔴 **Duplicate strings** - Samme tekst gentaget mange gange
- 🔴 **Cognitive complexity** - For mange nested if-statements
- 🔴 **Identical functions** - To funktioner med samme kode
- 🔴 **Duplicate conditions** - Samme betingelse i if-else

**Prøv det selv:**
1. Åbn `src/test2.ts`
2. Uncomment de kommenterede code smells
3. Kør `npm run lint` for at se warnings
4. Læs fejlbeskeder og forstå hvad der er galt
5. Ret fejlene for at lære best practices

Dette lærer dig at skrive renere og mere vedligeholdelig kode!

### Useful VS Code Shortcuts

- **F5** - Start debugging
- **Ctrl+F5** - Run without debugging
- **Ctrl+Shift+B** - Build (compile TypeScript)
- **Ctrl+`** - Toggle terminal
- **Ctrl+P** - Quick file open
- **F12** - Go to definition
- **Alt+Shift+F** - Format document
- **Ctrl+Space** - Trigger autocomplete

## 🤖 GitHub Copilot Demo - Test 3

**Test 3 demonstrerer hvordan GitHub Copilot kan hjælpe dig med at skrive kode!**

### Calculator Challenge

I `src/test3.ts` finder du en `Calculator` klasse:
- ✅ `add()` metoden er færdig og virker
- ❌ `subtract()` metoden mangler implementation (smider en fejl)

### Sådan bruger du Copilot til at færdiggøre koden:

1. **Åbn `src/test3.ts`**
2. **Find `subtract()` metoden** (linje ~59)
3. **Slet linjen** `throw new Error("Not implemented yet...");`
4. **Skriv `return`** og vent på Copilot's forslag (grå tekst)
5. **Tryk Tab** for at acceptere forslaget
6. **Gem filen** og kør `npm test` for at verificere

**Forventet Copilot-forslag:**
```typescript
return _a - _b;
```

### Built-in Prompts for AI Agents

Filen indeholder to prompts i kommentarer til brug med AI agents eller Copilot:

**PROMPT 1: Fix Implementation**
- Implementer manglende metoder
- Kør tests og ret fejl
- Fix alle lint warnings
- Bliv ved indtil alt er grønt

**PROMPT 2: Add Missing Methods**
- Tilføj nye metoder (multiply, divide, power, squareRoot)
- Skriv tests for hver metode
- Håndter edge cases (division med 0, negative tal)
- Verificer med tests og lint

Disse prompts guider AI til at arbejde systematisk gennem opgaver.

### Test-Driven Development

Projektet inkluderer tests i `src/test3.test.ts`:
- ✅ 3 tests for `add()` (passerer)
- ❌ 3 tests for `subtract()` (fejler indtil du implementerer metoden)

**Kør tests:**
```bash
npm test          # Se testresultater
npm run dev       # Kør demo i konsollen
npm run lint      # Verificer kode kvalitet
```

### Sådan virker det

Copilot lærer fra:
- **Eksisterende kode** - `add()` metoden viser mønstret
- **Kommentarer** - Danske kommentarer forklarer hvad koden skal gøre
- **Tests** - Test cases viser forventet funktionalitet
- **Kontekst** - Klasse navn, metode navne, parameter typer

Dette gør Copilot i stand til at foreslå korrekt implementation!

## 📚 What's Included

This starter kit demonstrates:

- ✅ **TypeScript compilation** with strict mode enabled
- ✅ **ES Modules** (modern import/export syntax)
- ✅ **Async/await** - Modern asynchronous JavaScript with fetch example
- ✅ **Node.js test runner** - Built-in testing (no external dependencies)
- ✅ **Test-Driven Development** - Write tests, implement code, verify
- ✅ **GitHub Copilot demo** - Learn how AI can assist your coding
- ✅ **AI Agent prompts** - Built-in prompts for automated development
- ✅ **SonarJS** - Code smell detection and quality analysis
- ✅ **Source maps** for debugging
- ✅ **ESLint** - Code quality and linting
- ✅ **Prettier** - Automatic code formatting
- ✅ **NPM package usage** (chalk for colored console output)
- ✅ **Module system** with test files
- ✅ **VS Code integration** with debugging support
- ✅ **Custom code snippets** for faster development
- ✅ **Format on save** and auto-fix on save

## 📖 Learning Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [VS Code TypeScript Tutorial](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
- [Node.js Test Runner Documentation](https://nodejs.org/api/test.html)
- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [SonarJS Rules](https://github.com/SonarSource/eslint-plugin-sonarjs)

## 🔧 TypeScript Configuration

The project uses strict TypeScript settings for best practices:

- `strict: true` - All strict type-checking options enabled
- `noUncheckedIndexedAccess: true` - Safer array/object access
- `exactOptionalPropertyTypes: true` - Stricter optional properties
- Source maps and declaration files enabled

