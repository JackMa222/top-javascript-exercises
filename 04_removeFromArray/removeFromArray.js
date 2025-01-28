const removeFromArray = function(inputArray, ...toRemove) {
    for (const remove of toRemove) {
        currentArrayLength = inputArray.length;
        for (let i = 0; i < currentArrayLength; i++) {
            if (inputArray[i] === remove) {
                inputArray.splice(i, 1);
                i--;
                currentArrayLength--;
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
