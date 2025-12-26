function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function (tempF) {
  let res = (tempF - 32) * (5 / 9);
  return round(res, 1);
};

const convertToFahrenheit = function (tempC) {
  let res = (9 / 5) * tempC + 32;
  return round(res, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
