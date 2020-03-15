// Setting global variables
// ________________________________________________________________________________________________________________________
var currentDate = moment();
// currentHour and textTime are a number value of 24hr clock. HTML text and displays will be in 12hr clock, but JS times will be in 24hr clock to better set up conditionals
var currentHour = parseInt(currentDate.format("HH"));
var textTime;

// Grabbing elements from the DOM
// ________________________________________________________________________________________________________________________
var currentDateDisplay = $("#current-date");
var currentTimeDisplay = $("#current-time");
// Textareas for each timeblock
var text9 = $("#event9");
var text10 = $("#event10");
var text11 = $("#event11");
var text12 = $("#event12");
var text1 = $("#event13");
var text2 = $("#event14");
var text3 = $("#event15");
var text4 = $("#event16");
var text5 = $("#event17");
var textareas = [text9, text10, text11, text12, text1, text2, text3, text4, text5];

// Defining functions
// ________________________________________________________________________________________________________________________
var updateDateTime = function () {
    //call moment() to access current time
    currentDate = moment();
    currentDateDisplay.text(currentDate.format("dddd, MMMM Do"));
    currentTimeDisplay.text(currentDate.format("h : mm A"));
};

var timeColorCode = function () {
    for (var i = 0; i < textareas.length; i++) {
        textTime = parseInt(textareas[i][0].dataset.time);
        if (textTime === currentHour) {
            textareas[i].addClass("current-time").removeClass("future-time past-time");
        }
        else if (textTime < currentHour) {
            textareas[i].addClass("past-time").removeClass("future-time current-time");
        }
        else if (textTime > currentHour) {
            textareas[i].addClass("future-time").removeClass("current-time past-time");
        }
    }
}

// Getting the document ready. Functions defined above will be called/run below
// ________________________________________________________________________________________________________________________
$(document).ready(function () {
    // Update and render the current date and time
    updateDateTime();
    timeColorCode();
    // Setting the update to happen every second so that the time is dynmically changing itself in the browser
    setInterval(updateDateTime, 1000);
    setInterval(timeColorCode, 1000);
});



