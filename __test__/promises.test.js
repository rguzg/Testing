import { describe, expect, test } from '@jest/globals';
import { PromisedFunction, PromisedFunctionThatFails } from "../promised_functions";

// You can return a promise inside a test, this will make Jest wait for the promise to resolve. 
// If the promise is rejected, the test will automatically fail

// In all test functions you need to return the promise so that test can wait for it to resolve before executing the assertion

describe("Promises in a test suite", () => {
    
    test("The data is peanut butter", () => {
        // Verify that only one thing is asserted. This will prevent a fullfilled promise from completing the 
        // test (because no assertions will be run)
        expect.assertions(1);

        return PromisedFunction().then(data => {
            expect(data).toBe("Peanut Butter");
        });
    });

    test("The data is not peanut butter", () => {
        expect.assertions(1);

        return PromisedFunctionThatFails().then(data => {
            expect(data).toBe("Peanut Butter");
        }).catch((data => {
            expect(data).toBe("No peanut butter for you >:v");
        }));
    });
});

describe("Resolves and Rejects in a test suite", () => {
    test("The data is peanut butter", () => {
        return expect(PromisedFunction()).resolves.toBe("Peanut Butter");
    });

    test("The data fetching will fail spectacularly", () => {
        return expect(PromisedFunctionThatFails()).rejects.toBe("No peanut butter for you >:v");
    });
});

describe("Using async/await in a test suite", () => {
    test("The data is peanut butter", async () => {
        const data = await PromisedFunction();
        expect(data).toBe("Peanut Butter");
    });

    test("The data will fail kinda spectacularly", async () => {
        try {
            const data = await PromisedFunctionThatFails();
            expect(data).toBe("Peanut Butter"); // <- This should never be executed!
        } catch (error) {
            expect(error).toBe("No peanut butter for you >:v");
        }
    });
});

describe("This tests have some insane syntax", () => {
    test("The data is peanut butter", async () => {
        await expect(PromisedFunction()).resolves.toBe("Peanut Butter");
    });

    test("The data fetch will error out", async () => {
        await expect(PromisedFunctionThatFails()).rejects.toBe("No peanut butter for you >:v");
    });
});