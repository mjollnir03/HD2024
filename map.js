let map;

async function initMap() {
  const mapId = '8536bb05e1accc3d';
  const position = { lat: 38.540000, lng: -121.750000 };   ///MARKER POSITION USE FOR GARDEN LOCATION
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const mapOptions = {
    zoom: 14,
    center: position,
    options: "mapIdOptions",
    mapId: mapId,
    MapOptions: { mapId: "8536bb05e1accc3d" }
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Garden 1",
    });
}
initMap();


function createpointer(title, position){
  const marker = new AdvancedmarkerElement({
    map: getElementById('map'),
    map:map,
    position:position,  //position {lat:value, lng:value}
    title:title,
  });
}