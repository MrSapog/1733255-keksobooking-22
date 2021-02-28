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

// const sendData = () => {
//   fetch(
//     'https://22.javascript.pages.academy/keksobooking',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body,
//     },
//   )
// }

export {getData};
