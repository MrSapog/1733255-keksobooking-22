const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterFields = mapFilter.querySelectorAll('select, fieldset');

const disableFields = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.disabled = true;
  });
  mapFilter.classList.add('map__filters--disabled');
  mapFilterFields.forEach((field) => {
    field.disabled = true;
  });
}

const enableFields = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFields.forEach((field) => {
    field.disabled = false;
  });
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterFields.forEach((field) => {
    field.disabled = false;
  });
}

disableFields();

export {enableFields};


