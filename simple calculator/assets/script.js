let textBoxOne = document.getElementById("textBoxOne");
let textBoxTwo = document.getElementById("textBoxTwo");

let buttonOne = document.getElementById("buttonOne");
let result = document.getElementById("result");

let num1 = document.getElementById("textBoxOne");
let num2 = document.getElementById("textBoxTwo");

buttonOne.addEventListener("click", function () {
  if (num1.value == "") {
    alert("Please enter a value");
  } else if (num2.value == "") {
    alert("Please enter a value");
  } else {
    result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
  }
});
