const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (const number of arr) {
    sum += number;
  }

  return sum;
};

const multiply = function (arr) {
  let mult = 1;
  for (const number of arr) {
    mult *= number;
  }
  return mult;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let mult = 1;
  for (i = 1; i <= num; i++) {
    mult *= i;
  }
  return mult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
