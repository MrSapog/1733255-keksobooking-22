import './map.js';
import './form.js';
import {showRealtyAds} from './map.js';
import {showGetDataError} from './api-alerts.js';
import {getData} from './api.js';
import {setFormSubmit, filterForm} from './form.js';

getData(showRealtyAds, showGetDataError);
setFormSubmit();

filterForm.addEventListener('change', () => {
  getData(showRealtyAds, showGetDataError);
})










