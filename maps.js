var toggle = true;
var distance = 0;
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
        document.getElementById("abButton").innerText = "Orgin"
    }
    else
    {
        document.getElementById("abButton").innerText = "End Point"
    }
    });
document.getElementById("submit").addEventListener("click", function(){
    document.getElementById("total").innerText = distance;
});