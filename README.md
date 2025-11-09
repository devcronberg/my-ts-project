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

- **`test1.ts`** - Example module with a `runTest()` function
- **`index.ts`** - Imports and runs the test module

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

Try this: Open `test1.ts` and you'll see ESLint warnings about unused variables and `any` types. These are intentional examples to show how the tools work!

### Useful VS Code Shortcuts

- **F5** - Start debugging
- **Ctrl+F5** - Run without debugging
- **Ctrl+Shift+B** - Build (compile TypeScript)
- **Ctrl+`** - Toggle terminal
- **Ctrl+P** - Quick file open
- **F12** - Go to definition
- **Alt+Shift+F** - Format document
- **Ctrl+Space** - Trigger autocomplete

## 📚 What's Included

This starter kit demonstrates:

- ✅ **TypeScript compilation** with strict mode enabled
- ✅ **ES Modules** (modern import/export syntax)
- ✅ **Async/await** - Modern asynchronous JavaScript with fetch example
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

## 🔧 TypeScript Configuration

The project uses strict TypeScript settings for best practices:

- `strict: true` - All strict type-checking options enabled
- `noUncheckedIndexedAccess: true` - Safer array/object access
- `exactOptionalPropertyTypes: true` - Stricter optional properties
- Source maps and declaration files enabled

