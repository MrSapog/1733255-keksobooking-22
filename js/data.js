import {getRandom, getRandomFloat, getRandomItem, getRandomCombination} from './util.js';

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

