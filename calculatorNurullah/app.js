const calculator = document.querySelector(".calc-body");
const screen = document.querySelector(".calc-screen");
const screenOperator = document.querySelector("#operator");
let flagNumber = false;
let flagEqual = false;
let number1 = 0;
let number2 = 0;
let islem = "";
let number = "";

calculator.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnNo")) {
    if (screen.innerText == "0" || flagNumber == true || flagEqual == true) {
      screen.innerText = e.target.innerText;
    } else {
      screen.innerText += e.target.innerText;
    }
    flagNumber = false;
    flagEqual = false;
    number += e.target.innerText;
  } else if (e.target.classList.contains("btnOperator")) {
    console.log(number1, number2, islem);
    screenOperator.innerText = e.target.innerText;
    flagEqual && (number1 = screen.innerText);
    console.log("sayı1 : ", number1);
    number1 ? (number2 = number) : (number1 = number);
    number = "";
    if (number1 && number2) {
      console.log(number1, number2, islem);
      screen.innerText = calculate(number1, number2, islem);
      number1 = "";
      number2 = "";
      islem = "";
    }
    islem = e.target.innerText;
    flagNumber = true;
  } else if (e.target.classList.contains("equal")) {
    screenOperator.innerText = e.target.innerText;
    number2 = number;
    if (number1 && number2) {
      screen.innerText = calculate(number1, number2, islem);
      number1 = "";
      number2 = "";
      islem = "";
      console.log(number1, number2, islem);
    }
    // number1 = "";
    number = "";
    flagEqual = true;
  } else if (e.target.classList.contains("btnAc")) {
    number1 = "";
    number2 = "";
    islem = "";
    screen.innerText = "";
    screenOperator.innerText = "";
  }
});

function calculate(number1, number2, islem) {
  console.log(number1, number2, islem);
  switch (islem) {
    case "+":
      return Number(number1) + Number(number2);
    case "-":
      return number1 - number2;
    case "x":
      return number1 * number2;
    case "÷":
      return number1 / number2;
    case "%":
      return (number1 * number2) / 100;
  }
}
