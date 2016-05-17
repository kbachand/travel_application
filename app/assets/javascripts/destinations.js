$(document).ready(function () {

  function initialize() {
    var myLatLng = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        center: myLatLng,
        zoom: 10,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions
      );
    
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: address
    });

    var contentString = '<h2>' + address + '</h2>' + '<p>' + description + '</p>';
    
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    google.maps.event.addListener(marker, 'click', function(){
      infowindow.open(map, marker);
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
