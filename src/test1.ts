export function runTest(): void {
    console.log("Running test 1...");

    // Simple math example
    const result = add(5, 3);
    console.log(`5 + 3 = ${result}`);

    // Call async function without await - "fire and forget"
    // The function starts but we don't wait for it to complete
    // Node.js will keep the process alive until all async operations finish
    // Normally, you might want to handle this differently
    fetchRepoInfo();
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

