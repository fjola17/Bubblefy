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

// The marshalls preserve objects that may be in localStorage for other various reasons
// This is done with the bubbles:: prefix
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

const unmarshallStorage = (json) => {
    var storedObject = JSON.parse(json);
    var keys = Object.keys(storedObject).filter(
        (key) => {
            return key.includes("bubbles::")
        }
    )
    
    var previousKeys = Object.keys(localStorage).filter(
        (key) => {
            return key.includes("bubbles::")
        }
    )

    for(i = 0; i < previousKeys.length; i++) {
        localStorage.removeItem(previousKeys[i])
    }

    for(i = 0; i < keys; i++) {
        localStorage.setItem(key, storedObject[key]);
    }
}

export {
    productGet,
    productIncrement,
    marshallStorage
}