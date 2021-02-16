const getRandom = function(min, max) {
  // Меняем местами параметры, если первый больше второго https://stackoverflow.com/questions/16201656/how-to-swap-two-variables-in-javascript
  if (min > max) {
    [min, max] = [max, min]
  }
  // Превращаем в положительные https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  // Часть функции с сайта MDN https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = function(min, max, digits) {
  if (min > max) {
    [min, max] = [max, min]
  }
  min = Math.abs(min);
  max = Math.abs(max);
  return (Math.random() * (max - min) + min).toFixed(digits);
}

const getRandomItem = function (someString) {
  return someString[getRandom(1, someString.length - 1)]
}

const getRandomCombination = function (array) {
  let randomCombinations = array.map(feature => {
    if (getRandom(0, 1)) {
      return;
    }
    return feature;
  });
  randomCombinations = randomCombinations.filter(feature => feature !== undefined);
  return randomCombinations;
}

export {getRandom, getRandomFloat, getRandomItem, getRandomCombination};
