const checkEven = (int) => {
    return new Promise((resolve, reject) => {
        if (Number(int) % 2 === 0) {
            resolve(`${int} is even number.`);
        } else {
            reject(`${int} is odd number.`);
        }
    })
}

// input is not even
checkEven(5)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

// input is even
checkEven(6)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

const checkTypeIfString = (input) => {
    return new Promise((resolve, reject) => {
        if (typeof input === "string") {
            resolve(`${input} is a string.`);
        } else {
            reject(`${input} is not a string.`);
        }
    })
}

// type is string
checkTypeIfString("tim")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })

// type is not a string
checkTypeIfString(5)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })