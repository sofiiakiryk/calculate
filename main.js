const numbers = document.querySelectorAll(".calc-btn.numeric");
const result = document.querySelector(".calc-result");
const plus = document.querySelector(".calc-btn.plus");
const minus = document.querySelector(".calc-btn.minus");
const equals = document.querySelector(".equal");
const slash = document.querySelector(".calc-btn.slash");
const multiply = document.querySelector(".calc-btn.multiply");
const reset1 = document.querySelector(".calc-btn.reset");
const dot = document.querySelector(".calc-btn.dot");
const del1 = document.querySelector(".calc-btn.del");
let fresult = 2;
let num1 = 0;
let num2 = 0;
let diya;

function removeZeros(str) {
  while (str.startsWith("0")) {
    str = str.slice(1);
  }
  return str;
}
function numKeyEndler(event) {
  result.textContent += event.target.textContent;
  result.textContent = removeZeros(result.textContent);
}

function numKeyDiya(event) {
  num1 = result.textContent;

  result.textContent += event.target.textContent;

  result.textContent = removeZeros(result.textContent);

  result.textContent = "0";

  diya = event.target.textContent;
  console.log(diya);
}
function reset() {
  result.textContent = "0";
}
function equal(event) {
  num2 = result.textContent;

  if (diya == "+") {
    Math.round((result.textContent = +num1 + Number(num2)));
  }
  if (diya == "-") {
    Math.round((result.textContent = Number(num1) - Number(num2)));
  }
  if (diya == "*") {
    Math.round((result.textContent = Number(num1) * Number(num2)));
  }
  if (diya == "/") {
    Math.round((result.textContent = Number(num1) / Number(num2)));
  }
  itemToDisplay;
}
function del() {
  let s = result.textContent.slice(0, -1);
  result.textContent = s;
  let f = result.textContent;
  if ((f.length = 0)) {
    result.textContent = "0";
  }
}
function itemToDisplay(value) {
  const validOperator = /[+\-*/.]/;
  if (validOperator.test(value) && validOperator.test(info.value.slice(-1)))
    return;

  if (result.value === "Error" || result.value === "Inifinity") {
    if (/\d/.test(value)) {
      result.value = value;
    }
  } else {
    result.value += value;
  }
}
numbers.forEach((key) => key.addEventListener("click", numKeyEndler));
plus.addEventListener("click", numKeyDiya);
minus.addEventListener("click", numKeyDiya);
slash.addEventListener("click", numKeyDiya);
multiply.addEventListener("click", numKeyDiya);
reset1.addEventListener("click", reset);
dot.addEventListener("click", numKeyEndler);
del1.addEventListener("click", del);
equals.addEventListener("click", equal);
