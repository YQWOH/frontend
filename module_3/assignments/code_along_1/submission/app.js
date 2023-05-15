const checkEven = (input) => {
    return new Promise((resolve, reject) => {
        if (input % 2 === 0) {
            resolve("input is even");
        } else {
            reject("input is not even");
        }
    })
}

checkEven(5)
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

checkEven(6)
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

const checkTypeIsString = (input) => {
    return new Promise((resolve, reject) => {
        if (typeof input === "string") {
            resolve("type is a string");
        } else {
            reject("type is not a string")
        }
    })
}

checkTypeIsString("ivan")
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

checkTypeIsString(7)
    .then((data) => console.log(data))
    .catch((error) => console.log(error))