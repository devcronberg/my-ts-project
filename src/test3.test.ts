// Test suite for Calculator klassen
// Bruger Node.js' indbyggede test framework (node:test)
// Kør tests med: npm test

import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { Calculator } from "./test3.js";

describe("Calculator", () => {
    const calc = new Calculator();

    describe("add()", () => {
        test("skal kunne lægge to positive tal sammen", () => {
            assert.equal(calc.add(5, 3), 8);
        });

        test("skal kunne lægge negative tal sammen", () => {
            assert.equal(calc.add(-5, -3), -8);
        });

        test("skal kunne håndtere nul", () => {
            assert.equal(calc.add(0, 5), 5);
            assert.equal(calc.add(5, 0), 5);
        });
    });

    describe("subtract()", () => {
        test("skal kunne trække to positive tal fra hinanden", () => {
            assert.equal(calc.subtract(10, 4), 6);
        });

        test("skal kunne trække negative tal", () => {
            assert.equal(calc.subtract(5, -3), 8);
        });

        test("skal kunne håndtere nul", () => {
            assert.equal(calc.subtract(5, 0), 5);
            assert.equal(calc.subtract(0, 5), -5);
        });
    });
});
