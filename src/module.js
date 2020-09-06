async function f() {
    return Promise.resolve("async working")
}
f().then(console.log)