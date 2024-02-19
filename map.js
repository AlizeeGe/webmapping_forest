// Origin center
const initialCoords = [43.6000, 1.4330];

// Leaflet maps
const maplvl3 = L.map('maplvl3').setView(initialCoords, 10);

// OpenStreetMap
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
{ attribution: '© Esri, HERE, Garmin, FAO, USGS, NGA, EPA, NPS'
}).addTo(maplvl3);

// Couche GeoServer
L.tileLayer.wms('https://www.geotests.net/geoserver/AGermain/wms?', {
    layers: 'carte_essences_lvl3',
    format: 'image/png',
    transparent: true,
    attribution: 'Autrices : Kanto Andrianarivony, Anne-Sophie Pinna, Chloé Morgat et Alizée Germain'
}).addTo(maplvl3);

// Echelle
L.control.scale().addTo(maplvl3);

// Fullscreen
maplvl3.addControl(new L.Control.Fullscreen());

// Legend
var legend_lvl3 = L.control({ position: 'bottomright' });
legend_lvl3.onAdd = function (maplvl3) {
  let divlegend = L.DomUtil.create('div', 'legend');
  divlegend.innerHTML = (
    '<div id="legend-content3">' +
    '<strong>Classes de niveau 3</strong><br>' +
    '<img id="leg_maplvl3" src="https://www.geotests.net/geoserver/AGermain/ows?service=WMS&version=1.3.0&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=carte_essences_lvl3" alt="">' +
    '</div>' +
    '<style>#leg_map_lvl3 {width: 100%; display: block; padding: 5px; border-radius: 5px;}</style>' + // Adjusted the styles
    '<style>#legend-content3 {font-size: 9.5px; width: 200px; display: block; background-color: rgba(255, 255, 255, 0.8); padding: 5px; border-radius: 5px;}</style>'
  );
  return divlegend;
};
legend_lvl3.addTo(maplvl3);
