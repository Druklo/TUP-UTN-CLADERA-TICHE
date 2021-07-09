function Pedro(){
    var coord = {lat:-16.6707516 ,lng: -49.2646216};
    var map = new google.maps.Map(document.getElementById('Pedro'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}