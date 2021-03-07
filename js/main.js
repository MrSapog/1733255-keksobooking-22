import './map.js';
import './form.js';
import {showRealtyAds, markersLayer} from './api-markers.js';
import {showGetDataError} from './api-alerts.js';
import {adForm, getData} from './api.js';
import {filterForm} from './form.js';
import {map, resetFormsAndMarkers} from './map.js';

const RERENDER_DELAY = 500;

const debounce = (cb, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      cb(...args);
    }, delay)
  }
}

const renderRealtyAds = () => getData(showRealtyAds, showGetDataError);
const debouncedRealtyAdsRendering = debounce(renderRealtyAds, RERENDER_DELAY);

filterForm.addEventListener('change', () => {
  map.removeLayer(markersLayer);
  debouncedRealtyAdsRendering();
})

adForm.addEventListener('reset', () => {
  resetFormsAndMarkers();
  map.removeLayer(markersLayer);
  debouncedRealtyAdsRendering();
})









