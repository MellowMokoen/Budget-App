function displayAmount(event) {
   event.preventDefault();

  let inputName = document.querySelector("#inputName");
  let inputAmount = document.querySelector("#amount");
  let amount = parseFloat(inputAmount.value).toFixed(2);

  let userInput = (inputName.value) + " : " + "R " + amount;


  let displayElement = document.createElement("li");
  displayElement.textContent = userInput;

  let displayName = document.querySelector("#display-name");
  displayName.appendChild(displayElement);

  let displayAmount = document.querySelector("#display-amount");
  displayAmount.appendChild(displayElement);

  inputName.value = "";
  inputAmount.value = "";

}

let button = document.querySelector("#log-button");
button.addEventListener("click",displayAmount);

function subtractAmount() {

let inputSalary = document.querySelector("#underline-input");
let inputAmount = document.querySelector("#display-amount");

let userSalary = parseFloat(inputSalary.value);
let amount = parseFloat(inputAmount.textContent);

let finalAmount = userSalary - amount;

let resultAmount = document.querySelector("#balance-check");
resultAmount.textContent = "Expenses Total : R " + finalAmount.toFixed(2);


inputAmount.value = "";
}








