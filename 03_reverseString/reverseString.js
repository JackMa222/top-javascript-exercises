const reverseString = function(inputString) {
    const stringArray = inputString.split("");
    let newString = "";

    for (i = 0; i < stringArray.length; i++) {
        newString += stringArray[stringArray.length - i - 1]
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
