// Часть функции с сайта MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandom(min, max) {

  // Меняем местами параметры, если первый больше второго.
  let correctMin = min;
  let correctMax = max;
  if (min > max) {
    correctMin = max;
    correctMax = min;
  }

  correctMin = Math.abs(Math.ceil(correctMin));
  correctMax = Math.abs(Math.floor(correctMax));
  return Math.floor(Math.random() * (correctMax - correctMin + 1)) + correctMin;
}

function getRandomFloat(min, max, digits) {

  let correctMin = min;
  let correctMax = max;
  if (min > max) {
    correctMin = max;
    correctMax = min;
  }

  correctMin = Math.abs(correctMin);
  correctMax = Math.abs(correctMax);

  return (Math.random() * (correctMax - correctMin) + correctMin).toFixed(digits);
}

