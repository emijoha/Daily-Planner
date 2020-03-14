
// Creating time/date variables
var currentDate = moment().format("dddd, MMMM Do");
var currentTime = moment().format("LTS");

console.log(currentDate);
console.log(currentTime);

// Display current date
$("#current-date").text(currentDate);