
//   [{ lat: , lng: }, ""],
export const spanishLocations = [    
    [{ lat: 43.3631, lng: -8.3463}, "Praia Das Margaritas, Oleiros"],
    [{ lat: 38.8175, lng: 0.1673 }, "La Cova Tallada, Costa Blanca"],
    [{ lat: 42.7922, lng: -9.0351}, "Praia Abelleira, Costa Galacia"],
    [{ lat: 41.7863, lng: 3.0447 }, "Cala Maset, Costa Brava"],
    [{ lat: 39.7542, lng: 3.4115 }, "Cala Estreta"],
    [{ lat: 43.4429, lng: -4.8537}, "Playa De Torimba, Costa Verde Asturias"],
    [{ lat: 37.5539, lng: -1.1264}, "Cala Del Pozo De La Avispa, Costa Calida"],
    [{ lat: 39.9268, lng: 3.9028 }, "Cala Des Talaier, Menorca"],
    ]
  
export const worldLocations = [      
    [{ lat: 37.9838, lng: 23.7275}, "Acropolis Museum, Athens"],
    [{ lat: 48.8584,  lng: 2.2945   }, "Eiffel Tower, Paris"],
    [{ lat: 51.5074,  lng: -0.1278  }, "Big Ben, London"],
    [{ lat: 55.7558,  lng: 37.6173  }, "Red Square, Moscow"],
    ]
  
export const devonLocations = [    
    [{ lat: 50.7063, lng: -4.0367}, "Meldon Reservoir"],
    ]

export const cyprusLocations = [
    [{ lat: 34.8711, lng: 32.4357}, "Adonis Baths Waterfalls"],
    [{ lat: 34.8553, lng: 32.4332}, "Tala View"],
    [{ lat: 34.8571, lng: 32.4089}, "Mavrokolympos Dam"]
]

export const germanLocations = [
    [{ lat: 50.5969, lng: 6.4255}, "Monschau Eifel National Park"],
    [{ lat: 50.1498, lng: 7.7216}, "Sankt Goarshausen"],
    [{ lat: 51.2195, lng: 6.9756}, "Neanderthal Valley"],
    [{ lat: 50.9754, lng: 11.022}, "Erfurt "],
    [{ lat: 51.9386, lng: 7.6172}, "Münster"],
    [{ lat: 49.0103, lng: 12.106}, "Regensburg"],
    [{ lat: 47.4906, lng: 11.096}, "Garmisch-Partenkirchen"],
    [{ lat: 48.4163, lng: 9.7838}, "Blautopf, Blaubeuren"],
    [{ lat: 47.5855, lng: 11.350}, "Walchensee"],
    [{ lat: 50.1310, lng: 6.9257}, "Pulvermaar "],
    [{ lat: 48.3142, lng: 8.1850}, "Schwarzwald"],
    [{ lat: 47.5579, lng: 10.750}, "Schloss Neuschwanstein"],
    [{ lat: 47.5527, lng: 12.918}, "Berchtesgaden National Park"],
]

export const allLocations = spanishLocations.concat(
    worldLocations, 
    devonLocations,
    cyprusLocations,
    germanLocations);
