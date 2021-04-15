//select the button
var testButton = document.querySelector("#test-button")

//add an event listener to the button that calls getLocation
testButton.addEventListener("click", getLocation)

//
function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error, options)
    // console.log("this is the position", position)
}

var locationDisplay = document.querySelector("#current-loc")

//get the user's current location
function success(pos){
    var crd = pos.coords;
    var lat = crd.latitude;
    var lon=crd.longitude;
    console.log("this is the coordinates", crd);
    console.log("this is the latitude:", lat);
    console.log("this is the longitude:", lon);

    locationDisplay.textContent = lat + ", " + lon;
}

const options = {
    enableHighAccuracy: true,
  };

function error(){
    console.log("this did not work")
}
