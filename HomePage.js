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
    
    console.log(airTripDiv.style.display);
}

//var layoverCount = 0;
//
//function addLayover() {
//    
//    var arrowDiv1 = document.getElementById("arrowDiv1");
//    var arrowDiv2 = document.getElementById("arrowDiv2");
//    var arrowDiv3 = document.getElementById("arrowDiv3");
//    var arrowDiv4 = document.getElementById("arrowDiv4");
//
//    if(layoverCount == 3) {
//        alert("Bruh");
//    }
//    else {
//        layoverCount++;
//        console.log(arrowDiv1.style.display);
//        
//        if(arrowDiv1.style.display === "none"){
//            console.log("AIDS");
//        }
//        
//        if(arrowDiv1.style.display != "inline-block" && arrowDiv2.style.display == "none" && arrowDiv3.style.display == "none" && arrowDiv4.style.display == "none"){
//            console.log("YAAAAAY");
//            arrowDiv2.style.display = "inline-block";
//        }
//        if(arrowDiv1.style.display === "inline-block" && arrowDiv2.style.display === "inline-block" && arrowDiv3.style.display === "none" && arrowDiv4.style.display === "none"){
//            arrowDiv3.style.display = "inline-block";
//        }
//        if(arrowDiv1.style.display === "inline-block" && arrowDiv2.style.display === "inline-block" && arrowDiv3.style.display === "inline-block" && arrowDiv4.style.display === "none"){
//            arrowDiv3.style.display = "inline-block";
//        }
//    }
//}

// function removeLayover() {
//     if(layoverCount == 0) {
//         alert("Cant go lower bub")
//     }
//     else {
//         layoverCount--;
//         console.log(layoverCount);
//     }
// }
