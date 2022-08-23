let drivers = ["Antonia", "Nuru", "Amari", "Mo"]

let returnFirstTwoDrivers = function (array){
    return array.slice(0,2);
}

let returnLastTwoDrivers = function (array){
    return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function (rate){
    return function(fare){
        return fare * rate;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = function (array, rate){
    return rate(array);
}