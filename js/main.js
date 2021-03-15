import './map.js';
import './form.js';
import {showRealtyAds, markersLayer} from './api-markers.js';
import {showGetDataError} from './api-alerts.js';
import {adForm, getData} from './api.js';
import {filterForm} from './form.js';
import {map, resetFormsAndMarkers} from './map.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;
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









