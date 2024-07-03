// Using callbacks
function callbackFunc(callback) {
    setTimeout(() => {
        callback("hello from callback function");
    }, 3000);
}

// Using promises
function promiseFunc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello from promise function");
        }, 3000);
    });
}

// Using async/await
async function asyncAwaitFunc() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello from async/await function");
        }, 3000);
    });
}

callbackFunc((result) => {
    console.log(result);
});

promiseFunc().then((result) => {
    console.log(result);
});

(async () => {
    const result = await asyncAwaitFunc();
    console.log(result);
})();
