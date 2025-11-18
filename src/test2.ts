export function runTest(): void {
    console.log("Running test 2 - ESLint & SonarJS demo...");

    // Uncomment code smells nedenfor for at se ESLint & SonarJS warnings

    // CODE SMELL 1: Duplicate strings (SonarJS vil advare)
    // console.log("Welcome to the application");
    // console.log("Welcome to the application");
    // console.log("Welcome to the application");
    // console.log("Welcome to the application");

    // CODE SMELL 2: Cognitive complexity - for mange nested conditions
    // _checkComplexLogic(5, 10, true);

    // CODE SMELL 3: Identiske funktioner (duplicate code)
    // const result1 = _calculatePrice1(100);
    // const result2 = _calculatePrice2(100);
    // console.log("Prices:", result1, result2);

    // CODE SMELL 4: Identiske conditions
    // const value = 42;
    // if (value > 10) {
    //     console.log("Greater than 10");
    // } else if (value > 10) {
    //     // Samme condition som ovenfor - SonarJS vil advare!
    //     console.log("This will never execute");
    // }

    console.log("Test 2 completed - uncomment code smells og kør 'npm run lint' for at se warnings!");
}

// Kognitiv kompleksitet - for mange nested conditions
function _checkComplexLogic(a: number, b: number, flag: boolean): void {
    if (a > 0) {
        if (b > 0) {
            if (flag) {
                if (a > b) {
                    if (a > 10) {
                        console.log("Very complex logic");
                    }
                }
            }
        }
    }
}

// Duplicate function 1
function _calculatePrice1(amount: number): number {
    const tax = 0.25;
    const total = amount * (1 + tax);
    return total;
}

// Duplicate function 2 - identisk med function 1
// eslint-disable-next-line sonarjs/no-identical-functions
function _calculatePrice2(amount: number): number {
    const tax = 0.25;
    const total = amount * (1 + tax);
    return total;
}
