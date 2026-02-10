const convertToCelsius = function(farhenheit) {
  // C = 5/9(F-32)
  let celsius = (5/9 * (farhenheit - 32));
  return Math.round(celsius * 10) / 10;

};

const convertToFahrenheit = function(celsius) {
  // F = (c * 9/5) + 32
  let farhenheit = ((celsius * 9/5) + 32);
  return Math.round(farhenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
