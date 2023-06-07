const convertToCelsius = function (farenheitTemp) {
  let celciusTemp = (farenheitTemp - 32) * (5 / 9);

  celciusTemp = Math.round(celciusTemp * 10) / 10;

  return celciusTemp;
};

const convertToFahrenheit = function (celciusTemp) {
  let farenheitTemp = (celciusTemp * (9 / 5)) + 32;

  farenheitTemp = Math.round(farenheitTemp * 10) / 10;
  return farenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
