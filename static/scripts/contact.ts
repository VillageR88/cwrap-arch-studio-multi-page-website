import "leaflet";
import * as L from "leaflet";
const mapLink1 = document.getElementById("map-link-1");
const mapLink2 = document.getElementById("map-link-2");

const map = L.map("map").setView([34.5, -90.0], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: "© OpenStreetMap contributors",
}).addTo(map);

const blackIconSvg = `
<svg width="40" height="49" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.94137 6.74036C-1.90161 14.5372 -1.90162 27.2273 5.94137 35.0241L20 49L34.0586 35.0241C41.9016 27.2273 41.9016 14.5372 34.0586 6.74036C26.2809 -0.991607 13.7191 -0.991607 5.94137 6.74036ZM20.3279 25.1195C22.8629 25.1195 24.918 23.0765 24.918 20.5563C24.918 18.0362 22.8629 15.9932 20.3279 15.9932C17.7928 15.9932 15.7377 18.0362 15.7377 20.5563C15.7377 23.0765 17.7928 25.1195 20.3279 25.1195Z" fill="#1B1D23"/>
</svg>
`;

window.addEventListener("resize", () => {
	const currentZoom = map.getZoom();
	if (window.innerWidth <= 768) {
		if (currentZoom === 6) map.setZoom(5);
	} else {
		if (currentZoom === 5) map.setZoom(6);
	}
});

const blackIcon = new L.DivIcon({
	html: blackIconSvg,
	className: "custom-icon",
	iconSize: [40, 49],
	iconAnchor: [20, 49],
	popupAnchor: [0, -49],
});

// Add markers
L.marker([32.14, -96.2], { icon: blackIcon })
	.addTo(map)
	.bindPopup(`
	<b>Main Office</b><br>
	Mail: archone@mail.com<br>
	Address: 1892 Chenoweth Drive TN<br>
	Phone: 123-456-3451
`);
L.marker([35.6, -83.8], { icon: blackIcon })
	.addTo(map)
	.bindPopup(`
	<b>Office II</b><br>
	Mail: archtwo@mail.com<br>
	Address: 3399 Wines Lane TX<br>
	Phone: 832-123-4321
`);

mapLink1?.addEventListener("click", () => {
	map.flyTo([32.14, -96.2], 10, {
		duration: 2,
	});
});

mapLink2?.addEventListener("click", () => {
	map.flyTo([35.6, -83.8], 10, {
		duration: 2,
	});
});
