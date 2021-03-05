import {adForm} from './form.js';
import {showPostDataError, showPostDataSuccess} from './api-alerts.js';
import {resetFormsAndMarkers} from './map.js';

const getData = (onSuccess, onFail) => {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onFail('Ошибка запроса данных с сервера!');
    })
}

const sendData = () => {
  return fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: new FormData(adForm),
    },
  )
    .then((response) => {
      if (response.ok) {
        resetFormsAndMarkers();
        adForm.reset();
        showPostDataSuccess();
      } else {
        showPostDataError();
      }
    });
}

export {getData, sendData, adForm};
