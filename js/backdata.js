import {realtyAdsGeneration} from './map.js';
import {showAlert} from './data.js';

fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((ads) => {
    realtyAdsGeneration(ads);
  })
  .catch(() => {
    showAlert('Ошибка запроса данных с сервера!');
  })

