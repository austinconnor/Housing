function initMap(){
  var ucf = {lat:28.6024, lng:-81.2001};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucf,
    zoom: 14
  });

  addMarker();
  function addMarker(){
    var marker = new google.maps.Marker({
      position: ucf,
      map:map,
      title:'University of Central Florida'
    })
  }
}
