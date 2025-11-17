export function runTest(): void {
    console.log("Running test 1...");

    // Simpelt matematik eksempel
    const result = add(5, 3);
    console.log(`5 + 3 = ${result}`);

    // Array manipulation eksempel
    const numbers: number[] = [1, 2, 3, 4, 5];
    // Fordobler tallene
    const doubled = numbers.map((num) => num * 2);
    // Udskriver de originale og fordoblede tal
    console.log(`Original numbers: ${numbers}`);
    console.log(`Doubled numbers: ${doubled}`);

    // Kalder async funktion uden await - "fire and forget"
    // Funktionen starter men vi venter ikke på den er færdig
    // Node.js holder processen kørende indtil alle async operationer er færdige
    // Normalt ville man måske håndtere dette anderledes
    fetchRepoInfo();

    // Opretter en instans af Person klassen
    const alice = new Person("Alice", 30);
    alice.printInfo();
    console.log();
    console.log("Test 1 completed!");
}

async function fetchRepoInfo(): Promise<void> {
    console.log("\nFetching repository info from GitHub...");
    try {
        const response = await fetch("https://api.github.com/repos/devcronberg/my-ts-project");
        const data = await response.json();
        console.log(`Repository: ${data.name}`);
        console.log(`Description: ${data.description || "No description"}`);
    } catch (error) {
        console.log("Failed to fetch repository info:", error);
    }
}

function add(a: number, b: number): number {
    return a + b;
}

class Person {
    constructor(private name: string, private age: number) {}

    // Metode til at få personens navn
    getName(): string {
        return this.name;
    }

    // Metode til at få personens alder
    getAge(): number {
        return this.age;
    }

    printInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
