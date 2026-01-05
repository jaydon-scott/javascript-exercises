const palindromes = function (inputStr) {
  // For handling uppercase words
  inputStr = inputStr.toLowerCase();

  // For handling punctuation (e.g. !, .)
  inputStr = inputStr.replaceAll("!", "");
  inputStr = inputStr.replaceAll(".", "");
  inputStr = inputStr.replaceAll(",", "");

  // For handling multiple words
  inputStr = inputStr.replaceAll(" ", "");

  return inputStr === [...inputStr].reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
