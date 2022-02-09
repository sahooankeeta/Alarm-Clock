import { getCurrentTime } from "./helpers.js";
let array = [];
export const activateAlarm = function (e) {
  e.target.closest(".alarm-card").classList.add("active");

  array.push({
    id: e.target.closest(".alarm-card").id,
    time: e.target.closest(".alarm-card").dataset.time,
  });
  array.sort(function (a, b) {
    return new Date("1970/01/01 " + a.time) - new Date("1970/01/01 " + b.time);
  });
};
export const deactivateAlarm = function (id) {
  document.getElementById(id).classList.remove("active");
  array = array.filter((el) => el.id != id);
};
(function snooze() {
  if (array.length > 0) {
    let time = array[0].time;
    let id = array[0].id;
    let t = time.split(":").join(",").split(" ").join(",").split(",");
    let ring = setInterval(function () {
      const currentTime = getCurrentTime();

      if (
        parseInt(currentTime.hours) == t[0] &&
        parseInt(currentTime.m) == t[1] &&
        currentTime.ampm == t[2]
      ) {
        const sound = new Audio("./alarm-sound.wav");

        sound.loop = false;
        sound.play();

        clearInterval(ring);
        deactivateAlarm(id);
      }
    }, 1000);
  }
  setTimeout(snooze, 1000);
})();
