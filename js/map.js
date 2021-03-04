/* global L:readonly */
import {filterForm, checkType, enableFields} from './form.js';
import {createRealtyAdsPopup} from './generation.js';

const FILTERED_REALTY_ADS_COUNT = 10;
const DEFAULT_LAT = 35.6895;
const DEFAULT_LNG = 139.69200;
const address = document.getElementById('address');

const setDefaultAddress = () => {
  address.value = DEFAULT_LAT + ', ' + DEFAULT_LNG;
}
setDefaultAddress();

const map = L.map('map')
  .on('load', () => {
    enableFields();
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

const showRealtyAds = (realtyAds) => {
  const filteredRealtyAds = realtyAds
    .slice()
    .filter(ad => checkType(ad))
    .slice(0, FILTERED_REALTY_ADS_COUNT);

  filteredRealtyAds.forEach((ad) => {
    const marker = L.marker(
      [ad.location.lat, ad.location.lng],
      {
        icon: pinIcon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        createRealtyAdsPopup(ad),
        {
          keepInView: true,
        },
      );

    filterForm.addEventListener('change', () => {
      map.removeLayer(marker);
    });
  });
}

export {showRealtyAds, setDefaultAddress, mainPinMarker, DEFAULT_LAT, DEFAULT_LNG};

