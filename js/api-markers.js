/* global L:readonly */
import {checkType, checkPrice, checkRooms, checkGuests,
  checkWifi, checkDishwasher, checkParking, checkWasher, checkElevator, checkConditioner} from './form.js';
import {createRealtyAdsPopup} from './generation.js';
import {map, pinIcon} from './map.js';

const FILTERED_REALTY_ADS_COUNT = 10;
let markersLayer;

const showRealtyAds = (realtyAds) => {
  let markersArray = [];

  const filteredRealtyAds = realtyAds
    .filter(ad =>
      checkType(ad) &&
      checkPrice(ad) &&
      checkRooms(ad) &&
      checkGuests(ad) &&
      checkWifi(ad) &&
      checkDishwasher(ad) &&
      checkParking(ad) &&
      checkWasher(ad) &&
      checkElevator(ad) &&
      checkConditioner(ad))
    .slice(0, FILTERED_REALTY_ADS_COUNT);

  if (!filteredRealtyAds[0]) {
    return;
  }

  filteredRealtyAds.forEach((ad) => {
    const marker = L.marker(
      [ad.location.lat, ad.location.lng],
      {
        icon: pinIcon,
      },
    );

    marker
      .bindPopup(
        createRealtyAdsPopup(ad),
        {
          keepInView: true,
        },
      );

    markersArray.push(marker);
    markersLayer = L.layerGroup(markersArray);
  });
  markersLayer.addTo(map)
}

export {showRealtyAds, markersLayer};
