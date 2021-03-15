import {sendData} from './api.js';

const ANY_FILTER_TAG = 'any';
const MIDDLE_PRICE_TAG = 'middle';
const LOW_PRICE_TAG = 'low';
const HIGH_PRICE_TAG = 'high';
const MIN_MIDDLE_PRICE = 10000;
const MAX_MIDDLE_PRICE = 50000;
const MIN_TITLE_LENGTH = 30;
const adForm = document.querySelector('.ad-form');
const filterForm = document.querySelector('.map__filters');
const title = document.getElementById('title');
const type = document.getElementById('type');
const price = document.getElementById('price');
const timeForm = document.querySelector('.ad-form__element--time');
const timeInSelector = timeForm.elements.timein;
const timeOutSelector = timeForm.elements.timeout;
const roomNumberOptions = document.getElementById('room_number');
const capacityOptions = document.getElementById('capacity');
const adFormFields = adForm.querySelectorAll('fieldset');
const filterFormFields = filterForm.querySelectorAll('select, fieldset');
const filterType = filterForm.querySelector('[name="housing-type"]');
const filterPrice = filterForm.querySelector('[name="housing-price"]');
const filterRooms = filterForm.querySelector('[name="housing-rooms"]');
const filterGuests = filterForm.querySelector('[name="housing-guests"]');
const filterWifi = document.getElementById('filter-wifi');
const filterDishwasher = document.getElementById('filter-dishwasher');
const filterParking = document.getElementById('filter-parking');
const filterWasher = document.getElementById('filter-washer');
const filterElevator = document.getElementById('filter-elevator');
const filterConditioner = document.getElementById('filter-conditioner');

// Фильтры
const checkType = (ad) => {
  return filterType.value === ANY_FILTER_TAG || filterType.value === ad.offer.type;
}

const checkPrice = (ad) => {
  return filterPrice.value === ANY_FILTER_TAG ||
    filterPrice.value === MIDDLE_PRICE_TAG && (ad.offer.price >= MIN_MIDDLE_PRICE && ad.offer.price < MAX_MIDDLE_PRICE) ||
    filterPrice.value === LOW_PRICE_TAG && ad.offer.price < MIN_MIDDLE_PRICE ||
    filterPrice.value === HIGH_PRICE_TAG && ad.offer.price >= MAX_MIDDLE_PRICE;
}

const checkRooms = (ad) => {
  return filterRooms.value === ANY_FILTER_TAG || filterRooms.value === ad.offer.rooms.toString();
}

const checkGuests = (ad) => {
  return filterGuests.value === ANY_FILTER_TAG || filterGuests.value === ad.offer.guests.toString();
}

const checkFeature = (filter, ad) => {
  return !filter.checked || filter.checked && ad.offer.features.includes(filter.value);
}
const checkWifi = (ad) => checkFeature(filterWifi, ad);
const checkDishwasher = (ad) => checkFeature(filterDishwasher, ad);
const checkParking = (ad) => checkFeature(filterParking, ad);
const checkWasher = (ad) => checkFeature(filterWasher, ad);
const checkElevator = (ad) => checkFeature(filterElevator, ad);
const checkConditioner = (ad) => checkFeature(filterConditioner, ad);

const checkFilters = (ad) =>
  checkType(ad) &&
  checkPrice(ad) &&
  checkRooms(ad) &&
  checkGuests(ad) &&
  checkWifi(ad) &&
  checkDishwasher(ad) &&
  checkParking(ad) &&
  checkWasher(ad) &&
  checkElevator(ad) &&
  checkConditioner(ad);

// Активация и деактивация полей
const disableFields = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.disabled = true;
  });
  filterForm.classList.add('map__filters--disabled');
  filterFormFields.forEach((field) => {
    field.disabled = true;
  });
}
disableFields();

const enableFields = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.disabled = false;
  });
  filterForm.classList.remove('map__filters--disabled');
  filterFormFields.forEach((field) => {
    field.disabled = false;
  });
}

// Валидации полей в форме объявления
const validateTitle = () => {
  if (title.value.length < MIN_TITLE_LENGTH) {
    title.setCustomValidity('Заголовок должен содержать больше ' + title.getAttribute('minlength') + ' символов');
  } else {title.setCustomValidity('')}
  title.reportValidity();
}
title.addEventListener('input', validateTitle);

const setPriceValue = (priceValue) => {
  price.setAttribute('min', priceValue);
  price.setAttribute('placeholder', priceValue);
}

const validatePrice = () => {
  let priceValue;
  switch (type.value) {
    case 'bungalow':
      priceValue = 0;
      setPriceValue(priceValue);
      break;
    case 'flat':
      priceValue = 1000;
      setPriceValue(priceValue);
      break;
    case 'house':
      priceValue = 5000;
      setPriceValue(priceValue);
      break;
    case 'palace':
      priceValue = 10000;
      setPriceValue(priceValue);
      break;
  }
}
validatePrice();
type.addEventListener('input', () => {
  validatePrice();
  price.reportValidity();
})
price.addEventListener('input', price.reportValidity);

timeOutSelector.value = timeInSelector.value;
timeInSelector.addEventListener('input', () => timeOutSelector.value = timeInSelector.value);
timeOutSelector.addEventListener('input', () => timeInSelector.value = timeOutSelector.value);

const validateCapacity = () => {
  if (roomNumberOptions.value === '1' && (capacityOptions.value === '2' || capacityOptions.value === '3' || capacityOptions.value === '0')) {
    capacityOptions.setCustomValidity('В 1 комнате может разместиться только 1 гость');
  } else if (roomNumberOptions.value === '2' && (capacityOptions.value === '3' || capacityOptions.value === '0')) {
    capacityOptions.setCustomValidity('В 2 комнатах может разместиться не больше 2 гостей');
  } else if (roomNumberOptions.value === '3' && capacityOptions.value === '0') {
    capacityOptions.setCustomValidity('В 3 комнатах может разместиться не больше 3 гостей');
  } else if (roomNumberOptions.value === '100' && (capacityOptions.value === '1' || capacityOptions.value === '2' || capacityOptions.value === '3')) {
    capacityOptions.setCustomValidity('Так это отель уже!');
  } else {
    capacityOptions.setCustomValidity('');
  }
  roomNumberOptions.reportValidity();
  capacityOptions.reportValidity();
}
validateCapacity();
roomNumberOptions.addEventListener('input', validateCapacity);
capacityOptions.addEventListener('input', validateCapacity);
//

const setFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    return sendData();
  })
}
setFormSubmit();



export {enableFields, adForm, filterForm, checkFilters};




