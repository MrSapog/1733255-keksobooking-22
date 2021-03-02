import {adForm, filterForm} from './form.js';
import {showPostDataError, showPostDataSuccess} from './api-alerts.js';

const getData = (onSuccess, onFail) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
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

/*
Не могу отправить данные на сервер академии. Решение в учебных материалах найти не смог.

При этом прекрасно отправляется на адрес из учебника 'https://jsonplaceholder.typicode.com/posts/'

Ошибка:
Access to fetch at 'https://22.javascript.pages.academy/keksobooking' from origin
'http://localhost:63342' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
header is present on the requested resource. If an opaque response serves your needs,
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
 */
const sendData = () => {
  fetch(
    'https://jsonplaceholder.typicode.com/posts/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: new FormData(adForm),
    },
  )
    .then((response) => {
      if (response.ok) {
        filterForm.reset();
        adForm.reset();
        showPostDataSuccess();
      } else {
        showPostDataError();
      }
    });
}

export {getData, sendData, adForm};
