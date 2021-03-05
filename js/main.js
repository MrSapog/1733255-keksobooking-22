import './map.js';
import './form.js';
import {showRealtyAds, markersLayer} from './api-markers.js';
import {showGetDataError} from './api-alerts.js';
import {adForm, getData} from './api.js';
import {filterForm} from './form.js';
import {map, resetFormsAndMarkers} from './map.js';

filterForm.addEventListener('change', () => {
  map.removeLayer(markersLayer);
  return getData(showRealtyAds, showGetDataError);
})

adForm.addEventListener('reset', () => {
  resetFormsAndMarkers();
  map.removeLayer(markersLayer);
  return getData(showRealtyAds, showGetDataError);
})











