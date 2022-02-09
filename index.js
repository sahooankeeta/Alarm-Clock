import * as newAlarm from "./newAlarm.js";
import * as alarmFunctions from "./alarmFunctions.js";
import {
  getCurrentTime,
  togglButton,
  prevSlide,
  nextSlide,
} from "./helpers.js";
const loader_item = document.querySelectorAll(".loader-item");
const welcome = document.querySelector(".welcome");
const weekdays = document.querySelector(".weekdays");

//LIVE CLOCK
const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const weekdayMarkup = weekday
  .map((item) => `<li class="weekday">${item}</li>`)
  .join("");
weekdays.insertAdjacentHTML("beforeend", weekdayMarkup);
(function displayCurrentTime() {
  const { hours, m, s, ampm, day } = getCurrentTime();

  document.querySelector(".clock-time").innerHTML = `${hours} : ${m} : ${s}`;
  document.querySelector(".ampm").innerHTML = ampm;
  if (!document.querySelectorAll(".weekday")[day].classList.contains("today"))
    document.querySelectorAll(".weekday")[day].classList.add("today");
  setTimeout(displayCurrentTime, 1000);
})();
////////// LIVE CLOCK
//CREATE NEW ALARM
document
  .querySelector(".create-new-alarm")
  .addEventListener("click", function () {
    togglButton();
    nextSlide();
  });
document
  .querySelector(".reset-alarm")
  .addEventListener("click", newAlarm.resetAlarm);
document.querySelector(".submit-alarm").addEventListener("click", function (e) {
  e.preventDefault();
  newAlarm.setNewAlarm();
});

///////

//ACTIVATE OR DEACTIVATE ALARM
document.addEventListener("click", function (e) {
  if (e.target.closest(".slide")) {
    if (e.target.closest(".alarm-card").classList.contains("active")) {
      alarmFunctions.deactivateAlarm(e.target.closest(".alarm-card").id);
    } else {
      alarmFunctions.activateAlarm(e);
    }
  }
});

//DELETE ALARM
document.addEventListener("click", function (e) {
  if (e.target.closest(".alarm-delete")) {
    alarmFunctions.deactivateAlarm(e.target.closest(".alarm-card").id);
    e.target.closest(".alarm-card").remove();
  }
});
