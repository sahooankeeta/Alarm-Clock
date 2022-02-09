import { togglButton, nextSlide } from "./helpers.js";
const form = document.querySelector(".set-alarm");
const inputHour = document.querySelector(".select-hour");
const inputMin = document.querySelector(".select-min");
const inputAmpm = document.querySelector(".select-ampm");
const alarmContainer = document.querySelector(".alarms");
function renderClock() {
  let hr = "",
    min = "";
  for (let i = 0; i <= 12; i++) {
    hr =
      hr +
      `<option value=${i < 10 ? "0" + i : i}>${i < 10 ? "0" + i : i}</option>`;
  }
  for (let i = 0; i <= 59; i++) {
    min =
      min +
      `<option value=${i < 10 ? "0" + i : i}>${i < 10 ? "0" + i : i}</option>`;
  }

  document.querySelector(".select-hour").insertAdjacentHTML("beforeend", hr);
  document.querySelector(".select-min").insertAdjacentHTML("beforeend", min);
}
function renderNewAlarmMarkup(time) {
  

  const markup = ` <div id=${new Date().getTime()} class="alarm-card" data-time="${
    time.hr
  }:${time.min} ${time.ampm}">
  <div class="alarm-display">
    <div class="alarm-header">
      <div class="alarm-timeset">
        <span class="alarm-time">${time.hr}:${time.min}</span>
        <span class="ampm">${time.ampm}</span>
      </div>
      <div class="slider">
        <span class="slide" ></span>
      </div>
    </div>
    <div class="alarm-footer">
    <svg class="alarm-icon">
      <use
        xlink:href="image/sprite.svg#icon-${
          time.ampm === "am" ? "brightness-contrast" : "moon"
        }"
      ></use>
    </svg>

    <svg class="alarm-icon alarm-delete">
      <use xlink:href="image/sprite.svg#icon-bin"></use>
    </svg>
  </div>
  </div>`;
  return markup;
}
renderClock();

export const resetAlarm = function () {
  form.reset();
};
export const setNewAlarm = function () {
  const hr = inputHour.value;
  const min = inputMin.value;
  nextSlide();
  const ampm = inputAmpm.value;

  const markup = renderNewAlarmMarkup({
    hr,
    min,
    ampm,
  });
  alarmContainer.insertAdjacentHTML("beforeend", markup);
  resetAlarm();
  togglButton();
};
