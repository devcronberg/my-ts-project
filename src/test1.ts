export function runTest(): void {
    console.log("Running test 1...");

    const result = add(5, 3);
    console.log(`5 + 3 = ${result}`);

    // This variable is declared but never used - ESLint will catch this!
    // const unusedVariable = "I'm not being used!";

    // This uses 'any' type - ESLint will warn about this
    // const data: any = { name: "TypeScript" };
    
}

function add(a: number, b: number): number {
    return a + b;
}

