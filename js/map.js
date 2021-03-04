/* global L:readonly */
import {enableFields} from './form.js';
import {getData} from './api.js';
import {showGetDataError} from './api-alerts.js';
import {showRealtyAds} from './api-markers.js';

const DEFAULT_LAT = 35.6895;
const DEFAULT_LNG = 139.69200;
const address = document.getElementById('address');

const setDefaultAddress = () => {
  address.value = DEFAULT_LAT + ', ' + DEFAULT_LNG;
}
setDefaultAddress();

const map = L.map('map')
  .on('load', () => {
    getData(showRealtyAds, showGetDataError).then(enableFields);
  })
  .setView([DEFAULT_LAT, DEFAULT_LNG], 13);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52,52],
  iconAnchor: [26,52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52,52],
  iconAnchor: [26,52],
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinMarker = L.marker(
  [35.6895, 139.692],
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = evt.target.getLatLng().lat.toFixed(5) + ', ' + evt.target.getLatLng().lng.toFixed(5);
});

export {setDefaultAddress, mainPinMarker, DEFAULT_LAT, DEFAULT_LNG, map, pinIcon};

