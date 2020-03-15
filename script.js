// Setting global variables
// ________________________________________________________________________________________________________________________
var currentDate = moment();
// currentHour is a number value of 24hr clock. 
// HTML text and displays will be in 12hr clock, but JS times will be in 24hr clock to better set up conditionals
var currentHour = parseInt(currentDate.format("HH"));


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
// Buttons Images for each timeblock
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
// button ELEMENTS of each timeblock
var btnEl9 = $(".9");
var btnEl10 = $(".10");
var btnEl11 = $(".11");
var btnEl12 = $(".12");
var btnEl13 = $(".13");
var btnEl14 = $(".14");
var btnEl15 = $(".15");
var btnEl16 = $(".16");
var btnEl17 = $(".17");
var btnElements = [btnEl9, btnEl10, btnEl11, btnEl12, btnEl13, btnEl14, btnEl15, btnEl16, btnEl17];

// Defining functions
// ________________________________________________________________________________________________________________________
// getting the current date and time from moment.js and setting displays to match
var updateDateTimeColor = function () {
    //call moment() to access current time
    currentDate = moment();
    currentDateDisplay.text(currentDate.format("dddd, MMMM Do"));
    currentTimeDisplay.text(currentDate.format("h : mm A"));
    // Check hour stamp of each timeblock to assign color code
    // hardcoding "9" instead of array length for ease, as it is also 9 in other for loops
    for (var i = 0; i < 9; i++) {
        // textTime is number value of textareas' data-time in 24hr clock
        var textTime = parseInt(textareas[i][0].dataset.time);
        if (textTime === currentHour) {
            textareas[i].addClass("current-time").removeClass("future-time past-time");
            textareas[i].removeProp("disabled");
            btnElements[i].removeProp("disabled");
        }
        else if (textTime < currentHour) {
            textareas[i].addClass("past-time").removeClass("future-time current-time");
            // adding "disabled" to all past/outside office hours timeblocks
            textareas[i].prop("disabled", true);
            btnElements[i].prop("disabled", true);
        }
        else if (textTime > currentHour) {
            textareas[i].addClass("future-time").removeClass("current-time past-time");
            textareas[i].removeProp("disabled");
            btnElements[i].removeProp("disabled");
        }
    }
};

// Save the cooresponing timeblock Input of each button click
var saveEvent = function () {
    event.preventDefault();

    for (var i = 0; i < 9; i++) {
        // creating variables that grab the button and the textarea's matching ids
        var buttonId = event.target.dataset.match;
        var textId = textareas[i][0].id;
        // will create localStorage key for particular button click AND ONLY its text input
        if (buttonId === textId) {
            var textInput = textareas[i][0].value;
            var eventHour = "event" + (i + 9);
            localStorage.setItem(eventHour, textInput);
        }
    }
    // render events that were just saved
    renderEvents();
};

// This function, which renders events, will be called inside the click event fucntion (saveEvent)
// it will also be called on its own to rerender saved events if page is refreshed
var renderEvents = function () {
    for (var i = 0; i < 9; i++) {
        var eventHour = "event" + (i + 9);
        var textDisplay = textareas[i];
        textDisplay[0].value = localStorage.getItem(eventHour);
    }
}



// Getting the document ready. Functions defined above will be called/run below
// ________________________________________________________________________________________________________________________
$(document).ready(function () {
    // Update and render the current date and time, and timeblock color code
    updateDateTimeColor();
    // render previously saved events for all timeblocks
    renderEvents();
    // timeColorCode();
    // Setting the update to happen every second so that the time and color codes are dynmically changing
    setInterval(updateDateTimeColor, 1000);
    // setInterval(timeColorCode, 1000);
    // click event set for all buttons (which are images), with saveEvent function 
    $("img").on("click", saveEvent);
});



