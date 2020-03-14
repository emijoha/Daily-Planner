// Setting global variable
var date;

// Grabbing elements from the DOM
var currentDate = $("#current-date");
var currentTime = $("#current-time");

// Defining functions
var updateDateTime = function () {
    date = moment();
    currentDate.text(date.format("dddd, MMMM Do"));
    currentTime.text(date.format("h : mm A"));
};

// Getting the document ready. Functions defined above will be called/run below
$(document).ready(function(){
    // Update and render the current date and time
    updateDateTime();
    // Setting the update to happen every second so that the time is dynmically changing itself in the browser
    setInterval(updateDateTime, 1000);
});



