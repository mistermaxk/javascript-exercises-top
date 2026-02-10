const removeFromArray = function(arr, toRemove) {
    for (const arg of arguments) {
        if (arr.includes(arg)) {
            arr = arr.filter(num => num !== arg);
        }
    }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
