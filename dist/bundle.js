/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./coordinates.js":
/*!************************!*\
  !*** ./coordinates.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allLocations\": () => (/* binding */ allLocations),\n/* harmony export */   \"cyprusLocations\": () => (/* binding */ cyprusLocations),\n/* harmony export */   \"devonLocations\": () => (/* binding */ devonLocations),\n/* harmony export */   \"spanishLocations\": () => (/* binding */ spanishLocations),\n/* harmony export */   \"worldLocations\": () => (/* binding */ worldLocations)\n/* harmony export */ });\n\r\n//   [{ lat: , lng: }, \"\"],\r\nconst spanishLocations = [    \r\n    [{ lat: 43.3631, lng: -8.3463}, \"Praia Das Margaritas, Oleiros\"],\r\n    [{ lat: 38.8175, lng: 0.1673 }, \"La Cova Tallada, Costa Blanca\"],\r\n    [{ lat: 42.7922, lng: -9.0351}, \"Praia Abelleira, Costa Galacia\"],\r\n    [{ lat: 41.7863, lng: 3.0447 }, \"Cala Maset, Costa Brava\"],\r\n    [{ lat: 39.7542, lng: 3.4115 }, \"Cala Estreta\"],\r\n    [{ lat: 43.4429, lng: -4.8537}, \"Playa De Torimba, Costa Verde Asturias\"],\r\n    [{ lat: 37.5539, lng: -1.1264}, \"Cala Del Pozo De La Avispa, Costa Calida\"],\r\n    [{ lat: 39.9268, lng: 3.9028 }, \"Cala Des Talaier, Menorca\"],\r\n    ]\r\n  \r\nconst worldLocations = [      \r\n    [{ lat: 37.9838, lng: 23.7275}, \"Acropolis Museum, Athens\"],\r\n    [{ lat: 48.8584,  lng: 2.2945   }, \"Eiffel Tower, Paris\"],\r\n    [{ lat: 51.5074,  lng: -0.1278  }, \"Big Ben, London\"],\r\n    [{ lat: 55.7558,  lng: 37.6173  }, \"Red Square, Moscow\"],\r\n    ]\r\n  \r\nconst devonLocations = [    \r\n    [{ lat: 50.7063, lng: -4.0367}, \"Meldon Reservoir\"],\r\n    ]\r\n\r\nconst cyprusLocations = [\r\n    [{ lat: 34.8711, lng: 32.4357}, \"Adonis Baths Waterfalls\"],\r\n    [{ lat: 34.8553, lng: 32.4332}, \"Tala View\"],\r\n    [{ lat: 34.8571, lng: 32.4089}, \"Mavrokolympos Dam\"]\r\n]\r\n\r\nconst allLocations = spanishLocations.concat(\r\n    worldLocations, \r\n    devonLocations,\r\n    cyprusLocations);\r\n\n\n//# sourceURL=webpack://secret-coord-main/./coordinates.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _coordinates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinates.js */ \"./coordinates.js\");\n\r\n\r\n\r\n\r\n\r\n// MAP\r\n\r\nlet markers = []\r\nconst spanishSwim = document.getElementById('spanish-swim')\r\nconst classicBeauty = document.getElementById('classic-beauty')\r\nconst mainContainer = document.querySelector('.main-container')\r\n\r\nconst devonBtn = document.createElement('button');\r\ndevonBtn.innerHTML = \"Devon Beauty Spots!\";\r\ndevonBtn.classList.add(\"location-button\");\r\nmainContainer.appendChild(devonBtn)\r\n\r\nconst allBtn = document.createElement('button');\r\nallBtn.innerHTML = \"All Beauty Spots!\";\r\nallBtn.classList.add(\"location-button\");\r\nmainContainer.appendChild(allBtn)\r\n\r\n\r\nfunction initMapWithMarker(array) {\r\n  printMarkers(array, map)\r\n}\r\n\r\nconst map = new google.maps.Map(document.getElementById(\"map\"), {\r\n  zoom: 3.3,\r\n  center: { lat: 55.4636, lng: 11.6206 },\r\n});\r\n\r\nfunction printMarkers(array, map) {\r\n  markers.forEach((marker) => marker.setMap(null));\r\n  markers = [];\r\n  array.forEach(([position, title, reference], i) => {\r\n    const marker = new google.maps.Marker({\r\n      position,\r\n      map,\r\n      draggable: false,\r\n      animation: google.maps.Animation.DROP,\r\n      title: `${i + 1}. ${title}`,\r\n      reference: `${i + 1}. ${reference}`,\r\n      label: `${i + 1}`,\r\n      optimized: false\r\n    })\r\n    const infoWindow = new google.maps.InfoWindow();\r\n\r\n    marker.addListener(\"click\", () => {\r\n      infoWindow.close();\r\n      infoWindow.setContent(marker.getTitle());\r\n      infoWindow.open(marker.getMap(), marker);\r\n    });\r\n    markers.push(marker);\r\n  })\r\n}\r\n\r\n\r\nspanishSwim.addEventListener('click', () => {\r\n  const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n    zoom: 5.5,\r\n    center: { lat: 40.4165, lng: -3.7026 },\r\n  });\r\n  printMarkers(_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.spanishLocations, map)\r\n})\r\n\r\nclassicBeauty.addEventListener('click', () => {\r\n  const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n    zoom: 1.0,\r\n    center: { lat: 0, lng: 0 },\r\n  });\r\n  printMarkers(_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.worldLocations, map)\r\n})\r\n\r\ndevonBtn.addEventListener('click', () => {\r\n  const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n    zoom: 8.0,\r\n    center: { lat: 50.734377, lng: -3.883316 },\r\n  });\r\n  printMarkers(_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.devonLocations, map)\r\n})\r\n\r\nallBtn.addEventListener('click', () => {\r\n  const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n    zoom: 3.3,\r\n    center: { lat: 55.4636, lng: 11.6206 },\r\n  });\r\n  printMarkers(_coordinates_js__WEBPACK_IMPORTED_MODULE_0__.allLocations, map)\r\n})\n\n//# sourceURL=webpack://secret-coord-main/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;