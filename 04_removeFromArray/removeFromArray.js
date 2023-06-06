const removeFromArray = function (array, item) {
  let nuevoArray = [];

  for (let i = 1; i < arguments.length; i++) {
    console.log(arguments[i]);

    if (array.indexOf(arguments[i]) >= 0) {
      array.splice(array.indexOf(arguments[i]), 1);
    }
  }

  return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
