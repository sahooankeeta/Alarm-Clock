export const getCurrentTime = function () {
  let h = new Date().getHours();
  let ap = "am";
  if (h >= 12 && h < 24) ap = "pm";
  let m = new Date().getMinutes();

  let s = new Date().getSeconds();
  let hours = parseInt((h % 12) + m / 60 + s / 3600).toString();
  m = m.toString();
  s = s.toString();
  if (hours.length != 2) hours = "0" + hours;
  if (m.length != 2) m = "0" + m;
  if (s.length != 2) s = "0" + s;
  return {
    hours,
    m,
    s,
    ampm: ap,
    day: new Date().getDay(),
  };
};
export const togglButton = function () {
  if (document.querySelector(".create-new-alarm").innerHTML == "+")
    document.querySelector(".create-new-alarm").innerHTML = `&#8592;`;
  else document.querySelector(".create-new-alarm").textContent = "+";
};
const slides = document.querySelectorAll(".screen");
let cur = 0;
const maxSlide = slides.length - 1;
slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});
export const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);
export const nextSlide = function () {
  if (maxSlide == cur) cur = 0;
  else cur++;

  goToSlide(cur);
};
export const prevSlide = function () {
  if (cur == 0) {
    cur = maxSlide;
  } else cur--;

  goToSlide(cur);
};
