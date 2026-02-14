const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1);
};

const power = function(base, exp) {
	let total = base;
  for (let i = 1; i < exp; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
	return Array.from( {length: num}, (v, i) => i + 1)
              .reduceRight((accum, item) => accum *= item, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
