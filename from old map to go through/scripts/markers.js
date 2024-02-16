/* add markers to map based on geojson data */
fetch("mapbox-data/features.geojson")
  .then((response) => response.json())
  .then((data) => {
    data.features.forEach((feature) => {
      // Extract properties from geojson //
      const properties = feature.properties;

      // Extract coordinates from geojson //
      const coordinates = feature.geometry.coordinates;

      // add marker to DOM //
      const myMarker = document.createElement("div");
      myMarker.className = "marker";
      myMarker.id = properties.Title;

      // Add myMarker to map//
      var marker = new mapboxgl.Marker(myMarker)
        .setLngLat(coordinates)
        .addTo(map);
    });
  });

// edit marker colours when visited - using set timeout to update every 20ms to check marker colours //
function updateMarkers() {
  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker) => {
    //if visited (i.e. in local storage), green, if not visited red //
    if (localStorage.getItem(marker.id)) {
      marker.style.backgroundColor = "#00BD9D";
    } else {
      marker.style.backgroundColor = "#D81E5B";
    }
  });
}

setInterval(updateMarkers, 20);
