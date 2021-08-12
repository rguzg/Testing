export const PromisedFunction = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Peanut Butter"), 3000);
    });

    return promise;
}

export const PromisedFunctionThatFails = () => {
    let promise = new Promise((resolve, reject) => {
        reject("No peanut butter for you >:v");
    });

    return promise;
}
