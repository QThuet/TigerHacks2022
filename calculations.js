var json = require('./airports.json');
var cars = require('./cars.json');

// Checks if the given latitude and longitude coordinates are valid
// Input: two pairs of latitude and longitude in degrees
// Output: On success, true
// Output: On failure, false
function validateCoordinates(lat1, long1, lat2, long2)
{
    // Lat is between -90 and 90
    if (!(-90 <= lat1 && lat1 <= 90))
    {
        return false;
    }
    if (!(-90 <= lat2 && lat2 <= 90))
    {
        return false;
    }
    // long is between -180 and 180
    if (!(-180 <= long1 && long1 <= 180))
    {
        return false;
    }
    if (!(-180 <= long2 && long2 <= 180))
    {
        return false;
    }

    return true;
}

// Gets the flight distance from two points on earth
// Input: two pairs of latitude and longitude in degrees
// Output: On success, flight distance
// Output: On failure, 0
function getFlightDistance(lat1, long1, lat2, long2) 
{
    distance = 0;
    if (validateCoordinates(lat1, long1, lat2, long2))
    {
        // Haversine Distance formula
        // Returns shortests flight path in kilometers
        radlat1 = Math.PI * lat1/180;
        radlat2 = Math.PI * lat2/180;
        theta = long1-long2;
        radtheta = Math.PI * theta/180;
        distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (distance > 1) {
            distance = 1;
        }
        distance = Math.acos(distance);
        distance = distance * 180/Math.PI;
        distance = distance * 60 * 1.1515 * 1.609344;

        // Corrective routing modifier
        // Accounts for weather, traffic control, etc
        distance = distance * 1.08;
    }

    return distance;
}

// Gets an Airports data from the JSON file based off its IATA code
// Input: IATA Code
// Output: On success, airport data
// Output: On failure, empty
function getAirport(code)
{
    for (i=0 ; i < json.length ; i++)
    {
        if (json[i]["IATA"] == code) {
            return json[i];
        }
    }
    
    return;
}

// Calculate emissions from a given flight
// Input: two airport codes
// Output: on success, CO2 emissions in kg
// Output: on failure, 0
function calculateFlightEmissions(code1, code2)
{
    // Get the airports and check validity
    emissions = 0;
    airport1 = getAirport(code1);
    airport2 = getAirport(code2);
    
    if (!(airport1 && airport2))
    {
        return emissions;
    }
    
    // Calculate the given distance
    distance = getFlightDistance(airport1.LATITUDE, airport1.LONGITUDE, airport2.LATITUDE, airport2.LONGITUDE);

    // Makes a distinction between short and long distance flights as different planes and infrastructure is used
    // Calculate carbon emissions
    if (distance < 2000 && distance > 0) {
        emissions = (.1782 * distance) + 85.95
    } else if (distance > 2000) {
        emissions = (.00000176 * distance * distance) + (.1255 * distance) + 100.5077;
    }

    return emissions
}

// Gets an Airports data from the JSON file based off its IATA code
// Input: IATA Code
// Output: On success, airport data
// Output: On failure, empty
function getCar(vehicle)
{
    for (i=0 ; i < cars.length ; i++)
    {
        if (cars[i]["model"] == vehicle) {
            return cars[i];
        }
    }
    
    return;
}

// Calculates the emissions of a car trip
// Input: distance driven, selected vehicle, driving style
// Output: On success, the cars emissions in Kg
// Output: On failure, 0
function calculateCarEmissions(distance, vehicle_choice, drive) 
{
    emissions = 0;

    // Get the car and verify
    car = getCar(vehicle_choice);
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
    
    // Calculations are done for grams, this acts as the final conversion
    return emissions/1000;
}

// Calculates the annual emmissions of a car based off a weekly estimate
// Input: weekly estimate, selected vehicle
// Output: On success, the cars emissions in Kg
// Output: On failure, 0
function calculateAnnualCarEmissions(distance, vehicle_choice) 
{
    emmissions = calculateCarEmissions(distance, vehicle_choice, "city");
    emmissions = emmissions * 52;

    return emmissions;
}