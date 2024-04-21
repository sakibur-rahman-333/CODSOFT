// Input expression
let inputExpression = "";
let mathExpression = "";
let expLength = 15;
let size = 25;
let ans = 0;

// Display
let displayArea = document.getElementById("display_area");

// Digits
let btnZero = document.getElementById("btn_zero");
let btnOne = document.getElementById("btn_one");
let btnTwo = document.getElementById("btn_two");
let btnThree = document.getElementById("btn_three");
let btnFour = document.getElementById("btn_four");
let btnFive = document.getElementById("btn_five");
let btnSix = document.getElementById("btn_six");
let btnSeven = document.getElementById("btn_seven");
let btnEight = document.getElementById("btn_eight");
let btnNine = document.getElementById("btn_nine");

// Operators
let btnPlus = document.getElementById("btn_plus");
let btnMinus = document.getElementById("btn_minus");
let btnMultiplication = document.getElementById("btn_multiplication");
let btnDivision = document.getElementById("btn_division");
let btnClear = document.getElementById("btn_clear");
let btnEqual = document.getElementById("btn_equal");
let btnPoint = document.getElementById("btn_point");

// Functions

function showExpression() {
  if (inputExpression === "") {
    displayArea.innerText = "0";
  } else {
    if (inputExpression.length > expLength) {
      displayArea.style.fontSize = size + "px";
      size = size / 2;
      expLength = expLength + 15;
    }
    displayArea.innerText = inputExpression;
  }
}

function makeExpression(exp) {
  if (exp === "*") {
    inputExpression += "x";
  } else {
    inputExpression += exp;
  }
  mathExpression += exp;
  showExpression();
}

function clearExpression(exp) {
  inputExpression = exp;
  mathExpression = exp;
  expLength = 15;
  size = 25;
  ans = 0;
  displayArea.style.fontSize = 45 + "px";
  showExpression();
}

function solveExpression() {
  if (mathExpression === "") {
    ans = "0";
  } else {
    try {
      ans = eval(mathExpression);
    } catch (e) {
      ans = "Syntaxt error";
    }
    mathExpression = ans.toString();
    inputExpression = ans.toString();
  }
  displayArea.style.fontSize = 45 + "px";
  displayArea.innerHTML = ans;
}

// Addind event listener
btnZero.addEventListener("click", (e) => {
  makeExpression("0");
});
btnOne.addEventListener("click", (e) => {
  makeExpression("1");
});
btnTwo.addEventListener("click", (e) => {
  makeExpression("2");
});
btnThree.addEventListener("click", (e) => {
  makeExpression("3");
});
btnFour.addEventListener("click", (e) => {
  makeExpression("4");
});
btnFive.addEventListener("click", (e) => {
  makeExpression("5");
});
btnSix.addEventListener("click", (e) => {
  makeExpression("6");
});
btnSeven.addEventListener("click", (e) => {
  makeExpression("7");
});
btnEight.addEventListener("click", (e) => {
  makeExpression("8");
});
btnNine.addEventListener("click", (e) => {
  makeExpression("9");
});
btnPlus.addEventListener("click", (e) => {
  makeExpression("+");
});
btnMinus.addEventListener("click", (e) => {
  makeExpression("-");
});
btnMultiplication.addEventListener("click", (e) => {
  makeExpression("*");
});
btnDivision.addEventListener("click", (e) => {
  makeExpression("/");
});
btnClear.addEventListener("click", (e) => {
  clearExpression("");
});
btnEqual.addEventListener("click", (e) => {
  solveExpression();
});
btnPoint.addEventListener("click", (e) => {
  makeExpression(".");
});

showExpression();
