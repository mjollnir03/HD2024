function initMap() {
  const mapId = '8536bb05e1accc3d'; // Ensure this is the correct map ID from your Google Cloud Platform console
  const position = { lat: 38.540000, lng: -121.750000 }; // Coordinates for the garden

  const mapOptions = {
      zoom: 14,
      center: position,
      mapId: mapId  // mapId directly within options as per Google Maps API
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Using standard Marker for now
  const marker = new google.maps.Marker({
      map: map,
      position: position,
      title: "Garden 1"
  });
}

// Call initMap to initialize the map
initMap();

// Function to create a marker at a specific position
function createMarker(title, position) {
  const marker = new google.maps.Marker({
      map: map,
      position: position,  // {lat: value, lng: value}
      title: title
  });
}
