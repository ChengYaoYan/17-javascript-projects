const tensScope = document.getElementById("tens");
const secondsScope = document.getElementById("seconds");
const startBtn = document.getElementById("button-start");
const stopBtn = document.getElementById("button-stop");
const resetBtn = document.getElementById("button-reset");

var seconds = 0;
var tens = 0;
var intervalId = null;

const format = (num) => {
  if (num < 10) {
    return "0" + num;
  }
  return String(num);
};

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    tens++;
    if (tens >= 100) {
      seconds++;
      tens = 0;
    }
    tensScope.textContent = format(tens);
    secondsScope.textContent = format(seconds);
  }, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  tens = 0;
  seconds = 0;
  tensScope.textContent = "00";
  secondsScope.textContent = "00";
});
