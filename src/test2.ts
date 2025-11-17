export function runTest(): void {
    console.log("Running test 2 - ESLint demo...");

    // Denne variabel er deklareret men bruges aldrig - ESLint vil advare!
    // const unusedVariable: string = "I'm not being used!";

    // Denne funktion bruger 'any' type - ESLint vil advare!
    // function processData(data: any): void {
    //     console.log(data);
    // }

    // Kald funktionen med noget data
    // processData({ message: "ESLint should warn about the 'any' type above" });

    console.log("Test 2 completed - check 'npm run lint' to see warnings!");
}
