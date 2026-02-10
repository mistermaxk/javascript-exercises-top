const sumAll = function(a, b) {
    if (a < 0 || !Number.isInteger(a) ||
        b < 0 || !Number.isInteger(b)) {
             return 'ERROR';
        } else {
            if (Math.min(a, b) === b) [a, b] = [b, a];
            let accumulator = 0;
            for (let i = a; i <= b; i++) {
                accumulator += i;
            }
            return accumulator;
    }
};

// Do not edit below this line
module.exports = sumAll;
