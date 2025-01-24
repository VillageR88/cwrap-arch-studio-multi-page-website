import "leaflet";
import * as L from "leaflet";

// Import Leaflet CSS

// Import Leaflet JS

// Initialize the map
const map = L.map("map").setView([34.5, -90.0], 5); // Center on the USA

// Add OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	maxZoom: 19,
	attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add markers
L.marker([32.7767, -96.797]).addTo(map).bindPopup("Dallas, TX");
L.marker([35.9606, -83.9207]).addTo(map).bindPopup("Knoxville, KY");
L.marker([32.7357, -97.1081]).addTo(map).bindPopup("Arlington, TX");
