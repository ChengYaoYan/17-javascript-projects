const input = document.getElementById("input"),
  numbers = document.querySelectorAll(".numbers div"),
  operators = document.querySelectorAll(".operators div"),
  clear = document.getElementById("clear"),
  result = document.getElementById("result");

var resultDisplayed = false;
const operatorChars = ["+", "-", "×", "÷"];

// number should do what
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // × ÷
    if (!resultDisplayed) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed && operatorChars.indexOf(lastChar) != -1) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = e.target.innerHTML;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (currentString.length == 0) {
      console.log("enter a number first");
    } else if (operatorChars.indexOf(lastChar) != -1) {
      let newString =
        currentString.substring(0, currentString.length - 1) +
        e.target.innerHTML;
      input.innerHTML = newString;
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
});

result.addEventListener("click", () => {
  var inputString = input.innerHTML;

  var numbers = inputString.split(/\+|\-|\×|\÷/g);
  var operators = inputString.replace(/[0-9.]/g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("-------------------------------");

  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(
      add,
      2,
      parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
    );
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0];

  resultDisplayed = true;
});

clear.addEventListener("click", () => {
  input.innerHTML = "";
});
