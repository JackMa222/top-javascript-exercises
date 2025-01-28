const sumAll = function(startingInt, endingInt) {
    let finalInt = 0;

    const ints = [startingInt, endingInt];

    for (const integer of ints) {
        if (!Number.isInteger(integer)) {
            return "ERROR";
        }

        if (integer < 0) {
            return "ERROR";
        }
    }

    if (startingInt > endingInt) {
        temp = startingInt;
        startingInt = endingInt;
        endingInt = temp;
    }

    for (let i = startingInt; i <= endingInt; i++) {
        finalInt += i;
    }

    return finalInt;
};

// Do not edit below this line
module.exports = sumAll;
