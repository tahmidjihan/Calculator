const inputField = document.querySelector("#inputField");
const values = document.querySelectorAll(".num");
const method = document.querySelectorAll(".method");
const clear = document.getElementById("clearPast");
const clearAll = document.getElementById("clearAll");
const enterNum = document.querySelector(".enter");
const btn = document.querySelectorAll(".btn");

// inputField
inputField.addEventListener("blur", () => {
  setTimeout(() => inputField.focus(), 0);
});
window.addEventListener("load", () => inputField.focus());

const numVal = function onPress(click) {
  inputField.value += click;
};
// btn
// values
function btnClick(e) {
  const target = e.target.innerText;
  numVal(target);
}

values.forEach((e) => {
  e.addEventListener("click", (p) => {
    p.preventDefault();
    btnClick(p);
  });
});
// methods
function btnClickMethod(e) {
  const target = e.target.innerText;
  numVal(target);
}

method.forEach((e) => {
  e.addEventListener("click", (p) => {
    p.preventDefault();
    btnClickMethod(p);
  });
});
//equalTo

enterNum.addEventListener("click", calculate);
//equation
function calculate(e) {
  e.preventDefault();
  const inputValue = inputField.value;
  const result = eval(inputValue);
  equation = e;
  inputField.value = result;
}
// clear
function clearEverything(e) {
  e.preventDefault();
  inputField.value = "";
}
clearAll.addEventListener("click", clearEverything);

function clearOnce(e) {
  let currentValue = inputField.value;
  e.preventDefault();
  if (currentValue > 0) {
    inputField.value = currentValue.slice(0, -1);
  }
}
clear.addEventListener("click", clearOnce);

//display

function displayEquation(e) {
  inputField.value = "=" + e;
}
