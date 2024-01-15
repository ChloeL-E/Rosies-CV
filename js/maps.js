
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 40.78325271606445,
            lng: -73.97003936767578
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }
    ];
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    // Options to pass along to the marker clusterer
    const clusterOptions = {
        imagePath: "https:///Users/chloelivingstone-evans/Rosies-CV/images/images/m",
        gridSize: 30,
        zoomOnClick: false,
        maxZoom: 10,
    };

    // Add a marker clusterer to manage the markers.
    const markerClusterer = new MarkerClusterer(map, markers, clusterOptions);

    // Change styles after cluster is created
    const styles = markerClusterer.getStyles();
    for (let i = 0; i < styles.length; i++) {
        styles[i].textColor = "blue";
        styles[i].textSize = 18;
    }
}
