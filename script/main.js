document.addEventListener("DOMContentLoaded", ()=>{

// Connecting the IDs to the JS.
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// Finding the current date.
const today = new Date();

// Assigning the weekDays. (Index)
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// Assigning the Months. (Index)
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "October", "November", "December"]

// Transforming the Assigned ones to the names.
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
// date.innerHTML = today.getDate();  | To show the current date on single digit if its under 10.
// (today.getDate()<10?"0":"")  | To add the "0" if the date is under 10.
});