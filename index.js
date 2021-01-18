// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers){
    return [arrayOfDrivers[0], arrayOfDrivers[1]]
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    let length = arrayOfDrivers.length
    return [arrayOfDrivers[length - 2], arrayOfDrivers[length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, selectFunction) {
    return selectFunction(arrayOfDrivers);
}