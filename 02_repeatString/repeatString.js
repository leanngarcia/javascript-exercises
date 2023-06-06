const repeatString = function (string, number) {
  let word = string;

  if (number < 0) return "ERROR";

  if (number === 0) return "";

  for (let i = 1; i < number; i++) {
    string = string + word;
  }

  return string;
};
// Do not edit below this line
module.exports = repeatString;
