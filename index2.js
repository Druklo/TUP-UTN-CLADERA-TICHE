/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=Maracana"> */
/* Al div se le pone id="Maracana", "Nilton", "Pedro", "Mane"*/

function Maracana(){
    var coord = {lat:-22.9121089 ,lng: -43.2301558};
    var map = new google.maps.Map(document.getElementById('Maracana'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

function Nilton(){
    var coord = {lat:-22.8927259 ,lng: -43.2929401};
    var map = new google.maps.Map(document.getElementById('Nilton'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

function Pedro(){
    var coord = {lat:-16.6707516 ,lng: -16.6707516};
    var map = new google.maps.Map(document.getElementById('Pedro'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

function Mane(){
    var coord = {lat:-15.7835191 ,lng: -47.9013997};
    var map = new google.maps.Map(document.getElementById('Mane'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}