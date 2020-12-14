function showtime() {
  const date = new Date();

  var hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  if (hours == 12) {
    session = "PM";
  }

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "MyClockDisplay"
  ).innerHTML = `<p>${hours}:${minutes}:${seconds} ${session}</p>`;

  setTimeout(showtime, 1000);
}

window.addEventListener("load", showtime);
