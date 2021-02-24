import {createRealtyAds} from './data.js';
const cardTemplate = document.getElementById('card').content.querySelector('article');
const realtyAds = createRealtyAds();

const realtyAdsPopup = (element) => {
  const realtyAd = cardTemplate.cloneNode(true);
  realtyAd.querySelector('.popup__title').textContent = element.offer.title;
  realtyAd.querySelector('.popup__text--address').textContent = element.offer.address;
  realtyAd.querySelector('.popup__text--price').innerHTML = element.offer.price + ' ₽/ночь';

  // Переводим тип жилья на русский
  const translateOfferType = () => {
    let offerType = element.offer.type;
    switch (offerType) {
      case 'flat':
        offerType = 'Квартира';
        break;
      case 'bungalow':
        offerType = 'Бунгало';
        break;
      case 'house':
        offerType = 'Дом';
        break;
      case 'palace':
        offerType = 'Дворец'
        break;
    }
    return offerType;
  }
  realtyAd.querySelector('.popup__type').textContent = translateOfferType();

  // Исправляем склонение "комнат"
  const correctRoomsGrammar = () => {
    let rooms = 'комнат';
    if (element.offer.rooms === 1) {
      rooms = 'комната';
    } else if (element.offer.rooms >= 2 && element.offer.rooms <=4) {
      rooms = 'комнаты';
    }
    return rooms;
  }
  realtyAd.querySelector('.popup__text--capacity').innerHTML = `${element.offer.rooms} ${correctRoomsGrammar()} для ${element.offer.guests} гостей`;
  realtyAd.querySelector('.popup__text--time').innerHTML = 'Заезд после ' + element.offer.checkin + ', выезд до ' + element.offer.checkout;

  // Выводим доступные удобства, предварительно убрав все
  const templateFeaturesList = realtyAd.querySelector('.popup__features');
  const templateFeatures = templateFeaturesList.querySelectorAll('li');
  const realtyAdFeatures = element.offer.features;
  const realtyAdFeaturesFragment = document.createDocumentFragment();
  templateFeatures.forEach((templateFeature) => {
    templateFeature.remove();
    realtyAdFeatures.forEach((realtyAdFeature) => {
      if (templateFeature.classList.contains(`popup__feature--${realtyAdFeature}`)) {
        realtyAdFeaturesFragment.appendChild(templateFeature);
      }
    })
  })
  templateFeaturesList.appendChild(realtyAdFeaturesFragment);

  realtyAd.querySelector('.popup__description').textContent = element.offer.description;

  // Выводим фото
  const templatePhotosList = realtyAd.querySelector('.popup__photos');
  const templatePhoto = templatePhotosList.querySelector('img');
  const realtyAdPhotos = element.offer.photos;
  templatePhotosList.querySelector('img').remove();
  realtyAdPhotos.forEach((realtyAdPhoto) => {
    const templatePhotoClone = templatePhoto.cloneNode(false);
    templatePhotoClone.src = realtyAdPhoto;
    templatePhotosList.appendChild(templatePhotoClone);
  })

  realtyAd.querySelector('.popup__avatar').src = element.author.avatar;
  return realtyAd;
}

export {realtyAds, realtyAdsPopup};

