const squares = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#color-display");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
const easyButton = document.querySelector(".mode");

var numSquares = 6;
var colors = [];
var pickedColor = "";

const makeColor = () => {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const genRandomColors = (num) => {
  var arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(makeColor());
  }
  return arr;
};

const chooseColor = () => {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

const changeColors = () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = pickedColor;
    h1.style.backgroundColor = pickedColor;
  }
};

const reset = () => {
  colors = genRandomColors(numSquares);
  pickedColor = chooseColor();

  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "#2C8E99";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
};

const setupMode = () => {
  modeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      var clickedBtn = e.target;
      numSquares = clickedBtn.textContent == "Easy" ? 3 : 6;
      modeButtons.forEach((button) => {
        button.classList.remove("selected");
      });
      clickedBtn.classList.add("selected");
      reset();
    });
  });
};

const setupSquares = () => {
  squares.forEach((square, index) => {
    square.style.backgroundColor = colors[index];
    square.addEventListener("click", (e) => {
      var clickedColor = e.target.style.backgroundColor;
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again";
        changeColors(pickedColor);
      } else {
        e.target.style.backgroundColor = "#232323";
        messageDisplay.textContent = "try again";
      }
    });
  });
};

function init() {
  colorDisplay.textContent = pickedColor;
  reset();
  setupMode();
  setupSquares();
  resetButton.addEventListener("click", reset);
}

init();
