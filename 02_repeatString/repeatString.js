const repeatString = function(inputString, iterations) {
    if (iterations < 0) {
        return "ERROR";
    }
    
    let finalString = "";
    for (let i = 0; i < iterations; i++) {
        finalString += inputString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
