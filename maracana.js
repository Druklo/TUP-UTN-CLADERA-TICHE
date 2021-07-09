function Maracana(){
    var coord = {lat:-22.9121089 ,lng: -43.2301558};
    var map = new google.maps.Map(document.getElementById('Maracana'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}