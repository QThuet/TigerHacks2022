var toggle = true;
var distance = 0;

let cars = [
  {
     "model": "motorcycle",
     "gpkm": 124.274
   },
   {
     "model": "mini",
     "gpkm": 170.877
   },
   {
     "model": "mid",
     "gpkm": 226.179
   },
   {
     "model": "full",
     "gpkm": 312.550
   },
   {
     "model": "ev",
     "gpkm": 77.711
   }
 ]

 function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
  
      if(name == cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
      }
  }
  
  return null;
}

// Erases a cookie
function eraseCookie(name) {
  document.cookie = name + '=; Max-Age = -1'
}

// Updates the total carbon emissions
// Input: calculated emissions
function updateTotal(emissions) {
  if (document) {
      var value = getCookie("total")
      console.log(document.cookie);
      console.log(emissions)
      if (value) {
          eraseCookie("total");
          total = parseInt(value) + parseInt(emissions);
          document.cookie = "total = " + (total + driving_annual_emissions).toString();
          last_total = value;
      } else {
          document.cookie = "total = " + emissions.toString();
      }
      var cookie = getCookie("total");
      totalTons.innerHTML = "Total Tons: " + parseInt(cookie) + " kg";
  }
}


function getCar(vehicle)
{
    for (var i=0 ; i < cars.length ; i++)
    {
        if (cars[i]["model"] == vehicle) {
            return cars[i];
        }
    }
    
    return;
}

function calculateCarEmissions(distance, vehicle_choice, drive, rt_flag = 0) 
{
    distance = distance * 1.609344;
    console.log(distance)
    var emissions = 0;

    // Get the car and verify
    var car = getCar(vehicle_choice);
    if(!car) {
        return emissions;
    }

    // Calculate emissions based off of driving style
    if (drive == "highway") {
        emissions = (car.gpkm * .8 * distance) + (31.689 * distance);
    } else if (drive == "city") {
        emissions = (car.gpkm * 1.2 * distance) + (31.689 * distance);
    } else {
        emissions = (car.gpkm * distance) + (31.689 * distance);
    }
    
    if(rt_flag) {
        emissions = emissions * 2;
    }
    updateTotal(emissions);
    // Calculations are done for grams, this acts as the final conversion
    return emissions/1000;
}

function carTrip1()
{
  console.log("here")
  var distance = parseInt(document.getElementById("total").innerText)
  if(distance === 0)
  {
    distance = 1
  }
  var vehicle = document.getElementById("carType").value
  calculateCarEmissions(distance, vehicle, "highway", 1)
}

function initMap() {
    var origin = { lat: 38.9404, lng: -92.3246 }
  
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: origin,
    })
  
    new ClickEventHandler(map, origin)
  }
  
  function isIconMouseEvent(e) {
    return "placeId" in e
  }
  
  class ClickEventHandler {
    constructor(map, origin) {
      this.origin = origin
      this.map = map
      this.directionsService = new google.maps.DirectionsService()
      this.directionsRenderer = new google.maps.DirectionsRenderer()
      this.distanceMatrix = new google.maps.DistanceMatrixService()
      this.directionsRenderer.setMap(map)
      this.placesService = new google.maps.places.PlacesService(map)
      this.infowindow = new google.maps.InfoWindow()
      this.infowindowContent = document.getElementById("infowindow-content")
      this.infowindow.setContent(this.infowindowContent)
  
      // Listen for clicks on the map.
      this.map.addListener("click", this.handleClick.bind(this))
    }
  
    handleClick(event) {
      console.log("You clicked on: " + event.latLng)
  
      // If the event has a placeId, use it.
      if (isIconMouseEvent(event)) {
        console.log("You clicked on place:" + event.placeId)
  
        // Calling e.stop() on the event prevents the default info window from
        // showing.
        // If you call stop here when there is no placeId you will prevent some
        // other map click event handlers from receiving the event.
        event.stop()
  
        if (event.placeId) {
            if(toggle === true)
            {
                this.calculateAndDisplayRoute(event.placeId)
                //this.getPlaceInformation(event.placeId)
            }
            else
            {
                this.origin = event.latLng;
            }
        }
      }
    }
  
    calculateAndDisplayRoute(placeId) {
      const me = this
  
      this.directionsService
        .route({
          origin: this.origin,
          destination: { placeId: placeId },
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then(response => {
          me.directionsRenderer.setDirections(response)
          distance = response.routes[0].legs[0].distance.text;
        })
        .catch(e => window.alert("Directions request failed due to " + status))
    }
  
    getPlaceInformation(placeId) {
      const me = this
  
      this.placesService.getDetails({ placeId: placeId }, (place, status) => {
        if (
          status === "OK" &&
          place &&
          place.geometry &&
          place.geometry.location
        ) {
          me.infowindow.close()
          me.infowindow.setPosition(place.geometry.location)
          me.infowindowContent.children["place-icon"].src = place.icon
          me.infowindowContent.children["place-name"].textContent = place.name
          me.infowindowContent.children["place-id"].textContent = place.place_id
          me.infowindowContent.children["place-address"].textContent =
            place.formatted_address
          me.infowindow.open(me.map)
        }
      })
    }
  }
  window.initMap = initMap
  export {}
document.getElementById("abButton").addEventListener("click", function(){
    toggle = !toggle;
    if(toggle)
    {
        document.getElementById("abButton").innerText = "Set Orgin"
    }
    else
    {
        document.getElementById("abButton").innerText = "Set End Point"
    }
    });


document.getElementById("submit").addEventListener("click", function(){
    document.getElementById("total").innerText = distance;
    carTrip1()
});