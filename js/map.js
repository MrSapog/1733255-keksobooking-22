import {enableFields} from './condition.js';
import {realtyAds} from './generation.js';
import {realtyAdsPopup} from './generation.js';

const address = document.getElementById('address');
const defaultLat = 35.6895;
const defaultLng = 139.692;
address.value = defaultLat + ', ' + defaultLng;

/* global L:readonly */
const map = L.map('map')
  .on('load', () => {
    enableFields();
  })
  .setView([defaultLat, defaultLng], 13);

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

realtyAds.forEach((ad) => {
  const marker = L.marker(
    [ad.location.x, ad.location.y],
    {
      icon: pinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      realtyAdsPopup(ad),
      {
        keepInView: true,
      },
    );
});
