import { spanishLocations } from "./coordinates.js"
import { worldLocations } from "./coordinates.js"
import { devonLocations } from "./coordinates.js"

// MAP

let markers = []
const spanishSwim = document.getElementById('spanish-swim')
const classicBeauty = document.getElementById('classic-beauty')
const mainContainer = document.querySelector('.main-container')

const devonBtn = document.createElement('button');
devonBtn.innerHTML = "Devon Beauty Spots!";
devonBtn.classList = "location-button";
mainContainer.appendChild(devonBtn)


function initMapWithMarker(array) {
  printMarkers(array, map)
}

function printMarkers(array, map) {
  markers.forEach((marker) => marker.setMap(null));
  markers = [];
  array.forEach(([position, title, reference], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      title: `${i + 1}. ${title}`,
      reference: `${i + 1}. ${reference}`,
      label: `${i + 1}`,
      optimized: false
    })
    const infoWindow = new google.maps.InfoWindow();

    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
    markers.push(marker);
  })
}


spanishSwim.addEventListener('click', () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5.5,
    center: { lat: 40.4165, lng: -3.7026 },
  });
  printMarkers(spanishLocations, map)
})

classicBeauty.addEventListener('click', () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1.0,
    center: { lat: 0, lng: 0 },
  });
  printMarkers(worldLocations, map)
})

devonBtn.addEventListener('click', () => {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8.0,
    center: { lat: 50.734377, lng: -3.883316 },
  });
  printMarkers(devonLocations, map)
})