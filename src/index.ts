import chalk from "chalk";
import { runTest as runTest1 } from "./test1.js";
import { runTest as runTest2 } from "./test2.js";
import { runTest as runTest3 } from "./test3.js";

console.log(chalk.blue("=== TypeScript Starter Kit ===\n"));

runTest1();
console.log();
runTest2();
console.log();
runTest3();

console.log(chalk.green("\n✓ All tests completed!"));