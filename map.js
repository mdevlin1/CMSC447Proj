var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.255, lng: -76.710},
    zoom: 15,
    size: "600x600"
});
}

function umbc() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.255, lng: -76.710},
    zoom: 15,
    size: "600x600"
});
}

function london() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.507, lng: -0.127},
    zoom: 10,
    size: "600x600"
});
}

function nyc() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.712, lng: -74.005},
    zoom: 10,
    size: "600x600"
});
}

function la() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.052, lng: -118.243},
    zoom: 10,
    size: "600x600"
});
}