function Nilton(){
    var coord = {lat:-22.8927259 ,lng: -43.2929401};
    var map = new google.maps.Map(document.getElementById('Nilton'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
