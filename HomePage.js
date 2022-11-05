function msg() {
    alert("Hey there!");
}

function displayAir() {
    var autoButton = document.getElementById("autoButton");
    var airButton = document.getElementById("airButton");
    
    var autoTripDiv = document.getElementById("autoTrip");
    var carType = document.getElementById("carType");
    var tripOrWeeklyButton = document.getElementById("tripOrWeeklyButton");
    var milesLabel = document.getElementById("milesLabel");
    var milesInput = document.getElementById("milesInput");
    var autoTripSubmitButton = document.getElementById("autoTripSubmitButton");

    autoTripDiv.style.display = "none";
    carType.style.display = "none";
    tripOrWeeklyButton.style.display = "none";
    milesLabel.style.display = "none";
    milesInput.style.display = "none";
    autoTripSubmitButton.style.display = "none";
    autoButton.style.backgroundColor = "red";
    airButton.style.backgroundColor = "green";
}