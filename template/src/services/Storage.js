//Returns number of 'productName' in storage
const productGet = (productName) => {
    return localStorage.getItem(`bubbles::${productName}`);
}

//Increments a product by 'productName' in storage
const productIncrement = (productName) => {
    if (localStorage.getItem(`bubbles::${productName}`) === null) {
        localStorage.setItem(`bubbles::${productName}`, 1);
    } else {
        localStorage.setItem(`bubbles::${productName}`, parseInt(localStorage.getItem(`bubbles::${productName}`)) + 1);
    }
}

const marshallStorage = () => {
    var keys = Object.keys(localStorage).filter(
        (key) => {
            return key.includes("bubbles::")
        }
    )

    var relevantStorage = {};

    for(i = 0; i < keys.length; i++) {
        relevantStorage[keys[i]] = localStorage[keys[i]];
    }

    return JSON.stringify(relevantStorage)
}

export {
    productGet,
    productIncrement,
    marshallStorage
}