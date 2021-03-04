import './map.js';
import './form.js';
import {showRealtyAds, markersLayer} from './api-markers.js';
import {showGetDataError} from './api-alerts.js';
import {adForm, getData} from './api.js';
import {filterForm} from './form.js';
import {DEFAULT_LAT, DEFAULT_LNG, mainPinMarker, map, setDefaultAddress} from './map.js';

filterForm.addEventListener('change', () => {
  map.removeLayer(markersLayer);
  return getData(showRealtyAds, showGetDataError);
})

adForm.addEventListener('reset', () => {
  filterForm.reset();
  map.removeLayer(markersLayer);
  setTimeout(() => {
    setDefaultAddress();
    mainPinMarker.setLatLng([DEFAULT_LAT, DEFAULT_LNG]);
  }, 0)
  return getData(showRealtyAds, showGetDataError);
})











