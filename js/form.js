const price = document.getElementById('price');
const type = document.getElementById('type');
const timeForm = document.querySelector('.ad-form__element--time');
const timeInSelector = timeForm.elements.timein;
const timeOutSelector = timeForm.elements.timeout;

const setPriceValue = (priceValue) => {
  price.setAttribute('min', priceValue);
  price.setAttribute('placeholder', priceValue);
}

const setTypePrice = () => {
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

setTypePrice();

type.addEventListener('input', () => {
  setTypePrice();
})

timeOutSelector.value = timeInSelector.value;

timeInSelector.addEventListener('input', () => {
  timeOutSelector.value = timeInSelector.value;
});

timeOutSelector.addEventListener('input', () => {
  timeInSelector.value = timeOutSelector.value;
});












// const adForm = document.querySelector('.ad-form');
// adForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//
//   const formData = new FormData(evt.target);
//
//   fetch(
//     'https://22.javascript.pages.academy/keksobooking',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData,
//     },
//   )
// })

