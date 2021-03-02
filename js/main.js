import './condition.js';
import './map.js';
import './form.js';
import {showRealtyAds} from './map.js';
import {showGetDataError} from './api-alerts.js';
import {getData} from './api.js';
import {setFormSubmit} from './form.js';

getData(showRealtyAds, showGetDataError);
setFormSubmit();











