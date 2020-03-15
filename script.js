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
var text13 = $("#event13");
var text14 = $("#event14");
var text15 = $("#event15");
var text16 = $("#event16");
var text17 = $("#event17");
var textareas = [text9, text10, text11, text12, text13, text14, text15, text16, text17];
var btn9 = $("#btn9");
var btn10 = $("#btn10");
var btn11 = $("#btn11");
var btn12 = $("#btn12");
var btn13 = $("#btn13");
var btn14 = $("#btn14");
var btn15 = $("#btn15");
var btn16 = $("#btn16");
var btn17 = $("#btn17");
var buttonImages = [btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17];
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
        // textTime is number value of textareas' data-time in 24hr clock
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

var saveEvent = function () {
    for (var i = 0; i < buttonImages.length; i++) {
        console.log(buttonImages[i][0].id);
        // if (event.target.id === )
    }
};

// Getting the document ready. Functions defined above will be called/run below
// ________________________________________________________________________________________________________________________
$(document).ready(function () {
    // Update and render the current date and time
    updateDateTime();
    timeColorCode();
    // Setting the update to happen every second so that the time is dynmically changing itself in the browser
    setInterval(updateDateTime, 1000);
    setInterval(timeColorCode, 1000);

    $("img").on("click", saveEvent)
});



