function displayAir() {
    var autoButton = document.getElementById("autoButton");
    var airButton = document.getElementById("airButton");
    
    //button color switch
    autoButton.style.backgroundColor = "#395144";
    autoButton.style.color = "gray";
    airButton.style.backgroundColor = "#AA8B56";
    airButton.style.color = "white";
    
    //Auto Trip elements
    var autoTripDiv = document.getElementById("autoTrip");
    var carType = document.getElementById("carType");
    var tripOrWeeklyButton = document.getElementById("tripOrWeeklyButton");
    var milesLabel = document.getElementById("milesLabel");
    var milesInput = document.getElementById("milesInput");
    var autoTripSubmitButton = document.getElementById("autoTripSubmitButton");
    
    //Air Trip elements
    var airTripDiv = document.getElementById("airTrip");
    var airportSelectDiv = document.getElementsByClassName("airportSelectContainer");
    var airportSelectBox = document.getElementsByClassName("airport");
    var layoverArrowDiv = document.getElementsByClassName("layoverArrow");
    var totalDistanceLabel = document.getElementById("airTotalDistanceLabel");
    var roundTripCheckbox = document.getElementById("roundTripCheckbox");
    var roundTripLabel = document.getElementById("roundTripLabel");
    var airTripSumbitButton = document.getElementById("airTripSubmitButton");
    
    //Hide auto elems
    autoTripDiv.style.display = "none";
    carType.style.display = "none";
    tripOrWeeklyButton.style.display = "none";
    milesLabel.style.display = "none";
    milesInput.style.display = "none";
    autoTripSubmitButton.style.display = "none";
    
    //visiblize air elems
    airTripDiv.style.display = "block";
    airportSelectDiv.style.display = "block";
    airportSelectBox.style.display = "block";
    layoverArrowDiv.style.display = "block";
    totalDistanceLabel.style.display = "block";
    roundTripCheckbox.style.display = "block";
    roundTripLabel.style.display = "block";
    airTripSumbitButton.style.display = "block";
}

function displayAuto() {
    var autoButton = document.getElementById("autoButton");
    var airButton = document.getElementById("airButton");
    
    //button color switch
    autoButton.style.backgroundColor = "#AA8B56";
    autoButton.style.color = "white";
    airButton.style.backgroundColor = "#395144";
    airButton.style.color = "gray";
    
    //Auto Trip elements
    var autoTripDiv = document.getElementById("autoTrip");
    var carType = document.getElementById("carType");
    var tripOrWeeklyButton = document.getElementById("tripOrWeeklyButton");
    var milesLabel = document.getElementById("milesLabel");
    var milesInput = document.getElementById("milesInput");
    var autoTripSubmitButton = document.getElementById("autoTripSubmitButton");
    
    //Air Trip elements
    var airTripDiv = document.getElementById("airTrip");
    var airportSelectDiv = document.getElementsByClassName("airportSelectContainer");
    var airportSelectBox = document.getElementsByClassName("airport");
    var layoverArrowDiv = document.getElementsByClassName("layoverArrow");
    var totalDistanceLabel = document.getElementById("airTotalDistanceLabel");
    var roundTripCheckbox = document.getElementById("roundTripCheckbox");
    var roundTripLabel = document.getElementById("roundTripLabel");
    var airTripSumbitButton = document.getElementById("airTripSubmitButton");
    
    //visiblize auto elems
    autoTripDiv.style.display = "block";
    carType.style.display = "block";
    tripOrWeeklyButton.style.display = "block";
    milesLabel.style.display = "block";
    milesInput.style.display = "block";
    autoTripSubmitButton.style.display = "block";
    
    //hide air elems
    airTripDiv.style.display = "none";
    airportSelectDiv.style.display = "none";
    airportSelectBox.style.display = "none";
    layoverArrowDiv.style.display = "none";
    totalDistanceLabel.style.display = "none";
    roundTripCheckbox.style.display = "none";
    roundTripLabel.style.display = "none";
    airTripSumbitButton.style.display = "none";
}

var layoverCount = 0;

function addLayover() {
    if(layoverCount == 3) {
        alert("Bruh");
    }
    else {
        layoverCount++;
        console.log(layoverCount);
    }
}

function removeLayover() {
    if(layoverCount == 0) {
        alert("Cant go lower bub")
    }
    else {
        layoverCount--;
        console.log(layoverCount);
    }
}

function submitForm() {
    var x = document.getElementById("a1Submit");
    x.action="tripData.php";
    x.submit();
}

//function runColorAnimation(carbonAdded) {
//    //1000kilo = 1 second
//    var wait = 0;
//    console.log(carbonAdded);
//    document.body.classList.add("running");
//    console.log("sleeping...");
//    console.log(wait);
//    setTimeout(wait=1, carbonAdded);
//    console.log(wait);
//    if(wait == 1) {
//        console.log("awake!");
//        document.body.classList.remove("running");
//    }
//}