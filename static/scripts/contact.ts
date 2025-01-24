import "leaflet";
import * as L from "leaflet";
const mapLink1 = document.getElementById("map-link-1");
const mapLink2 = document.getElementById("map-link-2");

const map = L.map("map").setView([34.5, -90.0], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add markers
L.marker([32.7767, -96.797])
	.addTo(map)
	.bindPopup(`
	<b>Main Office</b><br>
	Mail: archone@mail.com<br>
	Address: 1892 Chenoweth Drive TN<br>
	Phone: 123-456-3451
`);
L.marker([35.9606, -83.9207])
	.addTo(map)
	.bindPopup(`
	<b>Office II</b><br>
	Mail: archtwo@mail.com<br>
	Address: 3399 Wines Lane TX<br>
	Phone: 832-123-4321
`);

mapLink1?.addEventListener("click", () => {
	map.setView([32.7767, -96.797], 10);
});

mapLink2?.addEventListener("click", () => {
	map.setView([35.9606, -83.9207], 10);
});
