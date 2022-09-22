const calculator = document.getElementById("calculator");
// console.log(calculator);

const display = document.querySelector("#p2");
// console.log(document.querySelector("#p2").innerText);
// console.log(display);

let displayValue = "0";
let firstValue = null;
let operator = null;
let secondValueFlag = false;

updateDisplay();

calculator.addEventListener("click", (event) => {
  // console.log(event.target);

  if (event.target.classList.contains("operator")) {
    // console.log(document.querySelector("#p1").lastElementChild.innerText);
    document.querySelector("#p1").lastElementChild.innerText =
      event.target.innerText;
    document.querySelector("#p1").firstElementChild.innerText = displayValue;
    //   console.log("operator", event.target.innerText);

    calcOperator(event.target.innerText);
    updateDisplay();
    return;
  }
  if (event.target.classList.contains("number")) {
    // document.querySelector("#p2").innerText = event.target.innerText;
    display.innerText = event.target.innerText;
    // console.log(display);
    // console.log(document.querySelector("#p2").innerText);
  }
  if (event.target.classList.contains("clear")) {
    clear();
    updateDisplay();
    return;
  }
  if (event.target.classList.contains("dot")) {
    inputDot();
    updateDisplay();
    return;
  }
  inputNumber(event.target.innerText);
  updateDisplay();
});

//! elde edilen sayıyı daima güncellemek için;
function updateDisplay() {
  display.innerText = displayValue;
}

//! işlem yapmak için
function calcOperator(InputOperator) {
  const value = parseFloat(displayValue);
  // işlem üzerine işlem yapmaya devam edebilmek için,
  if (operator && secondValueFlag) {
    operator = InputOperator;
    return;
  }
  if (firstValue == null) {
    firstValue = value;
  } else if (operator) {
    const result = calculate(firstValue, value, operator);
    displayValue = `${parseFloat(result.toFixed(2))}`;
    firstValue = result;
  }
  //* tekrar sayı girişi yapabilmek için
  secondValueFlag = true;
  operator = InputOperator;
  // console.log(displayValue, firstValue, operator, secondValueFlag);
}


//! gelen operatöre göre heaplama işlemi yapmak için;
function calculate(num1, num2, operator) {
  if (operator == "+") {
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "x") {
    return num1 * num2;
  } else if (operator == "÷") {
    return num1 / num2;
  }

  return num2;
}


function inputNumber(num) {
  if (secondValueFlag) {
    displayValue = num;
    secondValueFlag = false;
  } else {
    displayValue = displayValue === "0" ? num : displayValue + num;
  }
  console.log(displayValue, firstValue, operator, secondValueFlag);
}


//! sadece 1 tane nokta koyması için
function inputDot() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}


//! işlemi temizlemek için
function clear() {
  displayValue = "0";
}
