const leapYears = function(year) {
    // divisible by 4 and 400, but not 100
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
