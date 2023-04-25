// MENU

const menuButton = document.querySelector('.menu-button')
const dropdownMenu = document.querySelector('.dropdown-menu')
const closeButton = document.querySelector('.close-button')
menuButton.addEventListener('click', () => {
  dropdownMenu.style.display = "flex"
})
closeButton.addEventListener('click', () => {
  dropdownMenu.style.display = "none"
})




// MAP

let markers = []
const spanishSwim = document.getElementById('spanish-swim')
const classicBeauty = document.getElementById('classic-beauty')
const linkSwim = "https://www.wildswimming.co.uk/best-secret-beaches-coves-in-spain-for-wild-swimming/"
//   [{ lat: , lng: }, ""],
const secretLocations = [
  [{ lat: 43.3631, lng: -8.3463}, "Praia Das Margaritas, Oleiros", `${linkSwim}`],
  [{ lat: 38.8175, lng: 0.1673 }, "La Cova Tallada, Costa Blanca"],
  [{ lat: 42.7922, lng: -9.0351}, "Praia Abelleira, Costa Galacia"],
  [{ lat: 41.7863, lng: 3.0447 }, "Cala Maset, Costa Brava"],
  [{ lat: 39.7542, lng: 3.4115 }, "Cala Estreta"],
  [{ lat: 43.4429, lng: -4.8537}, "Playa De Torimba, Costa Verde Asturias"],
  [{ lat: 37.5539, lng: -1.1264}, "Cala Del Pozo De La Avispa, Costa Calida"],
  [{ lat: 39.9268, lng: 3.9028 }, "Cala Des Talaier, Menorca"],
]

const secretLocations2 = [  [{ lat: 37.9838, lng: 23.7275}, "Acropolis Museum, Athens"],
  [{ lat: 48.8584, lng: 2.2945 }, "Eiffel Tower, Paris"],
  [{ lat: 40.7851, lng: -73.9683}, "Central Park, New York"],
  [{ lat: 51.5074, lng: -0.1278 }, "Big Ben, London"],
  [{ lat: -22.9519, lng: -43.2105 }, "Christ the Redeemer, Rio de Janeiro"],
  [{ lat: 55.7558, lng: 37.6173}, "Red Square, Moscow"],
  [{ lat: -33.8599, lng: 151.2093}, "Sydney Opera House, Sydney"],
  [{ lat: 37.7749, lng: -122.4194 }, "Golden Gate Bridge, San Francisco"],
]

const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 3.0,
  center: { lat: 49.102, lng: 12.847 },
});

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
  printMarkers(secretLocations, map)
})

classicBeauty.addEventListener('click', () => {
  printMarkers(secretLocations2, map)
})