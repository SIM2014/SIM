// JavaScript Document

function initialize() {
    var mapOptions = {
        zoom: 5,
        center: new google.maps.LatLng(22.3440504, -102.5512092),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googlemaps"), mapOptions);
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCCclSluhRYjitnzSy7Z_IWgZs-VT5JZEM&sensor=TRUE&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;