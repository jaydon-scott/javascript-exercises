const fibonacci = function (fibIndex) {
  fibIndex = parseInt(fibIndex);
  if (fibIndex === 0) return 0;
  if (fibIndex === 1) return 1;
  if (fibIndex < 0) return "OOPS";

  let fibonnaciList = [1, 1];

  while (fibonnaciList.length != fibIndex) {
    fibonnaciList.push(fibonnaciList.at(-1) + fibonnaciList.at(-2));
  }
  return fibonnaciList.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
