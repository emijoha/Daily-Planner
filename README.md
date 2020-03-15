# Daily-Planner

https://emijoha.github.io/Daily-Planner/

A simple calendar application that allows the user to save events for each hour of the work day. This app runs in the browser and features dynically updated HTML and CSS powered by jQuery, and uses Moment.js. 

The planner displays the day, date, and time. Text areas are available for scheduling events for all office hours, 9am to 5pm. Events logged are saved in local storage, can be edited and re-saved, and reset at 1 am the next day, so that a fresh daily planner is available for the user every day.

## User Story

```
AS AN employee with a busy schedule...
I WANT to add important events to a daily planner...
SO THAT I can manage my time effectively.
```

## Details

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day, date, and time is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
  IF the timeblock is gray
  THEN the timeblock is in the past
  AND the option save and edit events is disabled
  IF the timeblock is yellow
  THEN it is the current time
  AND events can be saved and edited
  IF the timeblock is green
  THEN it is in the future
  AND events can saved and edited
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
WHEN it is 1 AM on the next day
THEN the planner will reset and remove the last day's events
SO that I can schedule new events
```
