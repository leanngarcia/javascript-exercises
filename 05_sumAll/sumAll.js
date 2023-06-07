const sumAll = function (numero1, numero2) {
  if (typeof numero1 !== "number" || typeof numero2 !== "number" || numero1*numero2 < 0) {
    return "ERROR";
  }

  let sumaNumeros = 0;
  let numeroMayor;
  let numeroMenor;

  if (numero2 > numero1) {
    numeroMayor = numero2;
    numeroMenor = numero1;
  } else if (numero2 < numero1) {
    numeroMayor = numero1;
    numeroMenor = numero2;
  } else {
    return numero1 + numero2;
  }

  for (let i = numeroMenor; i <= numeroMayor; i++) {
    sumaNumeros += i;
  }

  return sumaNumeros;
};

console.log(sumAll(2, 5));

// Do not edit below this line
module.exports = sumAll;
