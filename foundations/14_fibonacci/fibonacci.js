const fibonacci = function(seriesNumber) {
// beginning with 0, sum of two previous numbers
    if (Number(seriesNumber) < 0) return "OOPS";
    let fibArray = [];
    for (let i = 0; i <= Number(seriesNumber); i++) {
        if (i === 0 || i === 1) fibArray.push(i);
        else fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }
    return fibArray[seriesNumber];
};

// Do not edit below this line
module.exports = fibonacci;
