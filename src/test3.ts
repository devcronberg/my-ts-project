// Calculator klasse - demonstrerer hvordan Copilot kan hjælpe med at implementere manglende funktionalitet

/*
PROMPT 1: Fix Implementation
Implementer alle metoder der mangler implementation eller fejler.
Kør 'npm test' for at verificere implementationen.
Ret eventuelle fejl indtil alle tests passerer.
Kør 'npm run lint' og fix alle warnings og errors.
Bliv ved indtil der ikke er fejl eller warnings.
*/

/*
PROMPT 2: Add Missing Methods
Tilføj manglende logiske metoder til Calculator klassen:
- multiply(a, b) - Multiplicer to tal
- divide(a, b) - Divider to tal (håndter division med 0)
- power(base, exponent) - Beregn potens
- squareRoot(n) - Beregn kvadratrod (håndter negative tal)

For hver ny metode:
1. Tilføj metoden til Calculator klassen med danske kommentarer
2. Tilføj tilsvarende tests i test3.test.ts
3. Kør 'npm test' for at verificere
4. Kør 'npm run lint' og fix alle warnings
5. Bliv ved indtil alle tests passerer og der ikke er warnings
*/

export function runTest(): void {
    console.log("Running test 3 - Calculator demo...");

    const calc = new Calculator();

    // Test addition (virker)
    console.log("Addition: 5 + 3 =", calc.add(5, 3)); // 8

    // Test subtraction (ikke implementeret endnu)
    try {
        console.log("Subtraction: 10 - 4 =", calc.subtract(10, 4));
    } catch (error) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }

    console.log("\nTest 3 completed - kør 'npm test' for at se testresultater!");
}

// Calculator klasse med delvis implementation
export class Calculator {
    // Addition metode - denne virker!
    // Tager to tal og returnerer deres sum
    add(a: number, b: number): number {
        return a + b;
    }

    // Subtraction metode - SKAL IMPLEMENTERES
    // Tager to tal og returnerer deres forskel (a - b)
    // TODO: Implementer denne metode ved hjælp af Copilot
    subtract(_a: number, _b: number): number {
        throw new Error("Not implemented yet - use Copilot to implement this!");
    }
}
