//create map
const map = L.map("mapid").setView([-27.5953613,-48.5249761], 15);

//create and tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon


//create and add marker
L.marker([-27.5953613,-48.5249761])
.addTo(map)
.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
.openPopup();
