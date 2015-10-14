// Setup Map, center di Bandung
var map = L.map('map').setView([-6.9114791,107.6354606], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
		maxZoom: 18
		}).addTo(map);