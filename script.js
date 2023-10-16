const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const year = document.querySelector(".year");
year.innerText = currentYear + 1;

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function update() {
  let currentTime = new Date();
  let diff = nextYear - currentTime;
  let daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  let minsLeft = Math.floor(diff / 1000 / 60) % 60;
  let secLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft < 10 ? "0" + daysLeft + " d." : daysLeft + " d.";
  hours.innerText =
    hoursLeft < 10 ? "0" + hoursLeft + " h." : hoursLeft + " h.";
  minutes.innerText = minsLeft < 10 ? "0" + minsLeft + " m." : minsLeft + " m.";
  seconds.innerText = secLeft < 10 ? "0" + secLeft + " s." : secLeft + " s.";
}
(" days");
update();

setInterval(update, 1000);

setTimeout(() => {
  // document.querySelector(".preloader").remove();
  document.querySelector(".countdown").style.display = "flex";
}, 1000);
