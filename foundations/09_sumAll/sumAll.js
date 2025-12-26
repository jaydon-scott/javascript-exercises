const sumAll = function (a, b) {
  // Check if either input is negative
  if (a < 0 || b < 0) {
    return "ERROR";
  }

  // Check if either input is a valid number
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return "ERROR";
  }

  if (a > b) {
    // Flip a and b if a is larger than b
    [a, b] = [b, a];
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
