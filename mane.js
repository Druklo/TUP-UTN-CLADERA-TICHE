function Mane(){
    var coord = {lat:-15.7835191 ,lng: -47.9013997};
    var map = new google.maps.Map(document.getElementById('Mane'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}