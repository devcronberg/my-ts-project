import chalk from "chalk";
import { runTest as runTest1 } from "./test1.js";

console.log(chalk.blue("=== TypeScript Starter Kit ===\n"));

runTest1();

console.log(chalk.green("\n✓ Test completed!"));