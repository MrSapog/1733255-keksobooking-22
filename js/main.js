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

const TITLES = [
  'Сдаю комнату в палатке',
  '本物のキラー猫の家',
  'Продаётся уютная коробка',
  'Продам 3-х комнатную квартиру в центре Токио',
  'Самый неободранный дом в Гахикабару',
  'Ковёр под мостом с вылизывательным салоном поблизости',
];

const PRICES = [
  10000,
  23000,
  3000,
  8000,
  9000,
  723100,
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Волнующе просторно',
  'Каждая сторона - солнечная, каждый угол - светлый',
  'Не обращайте внимание на шерстяную люстру, это задумка дизайнера',
  'Да, кухня изначально планировалась посередине',
  'Так дорого потому, что был произведён точечный апгрейд феншуем',
  'Все удобства удобны, все неудобства не в кадре',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const createRealtyAdNearby = () => {
  /*
  Прежде константа выглядела так:
    const LOCATION = {
      location {
          x: getRandomFloat(35.65000, 35.70000, 5),
          y: getRandomFloat(139.70000, 139.80000, 5),
    }
  },
  Но почему-то при выводе в консоль я получал и объект такого же вида:
  LOCATION:
    location:
          x: ...,
          y: ...,
  Так у меня на одном уровне были "author, offer и LOCATION". А в LOCATION дублировалось location.
  Поэтому я сократил константу.
   */
  const location = {
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  }
  return {
    author: {
      avatar: 'img/avatars/user' + getRandom(1, 8).toString().padStart(2, '0') + '.png',
    },
    offer: {
      title:       getRandomItem(TITLES),
      address:     Object.values(location).join(', '),
      price:       getRandomItem(PRICES),
      type:        getRandomItem(TYPES),
      rooms:       getRandom(1, 5),
      guests:      getRandom(1, 13),
      checkin:     getRandomItem(CHECKS),
      checkout:    getRandomItem(CHECKS),
      features:    getRandomCombination(FEATURES),
      description: getRandomItem(DESCRIPTIONS),
      photos:      getRandomCombination(PHOTOS),
    },
    location,
  }
};

const realtyAdNearby = new Array(10).fill(null).map(() => createRealtyAdNearby());

realtyAdNearby;













