function displayAmount(event) {
   event.preventDefault();


  let inputName = document.querySelector("#inputName");
  let inputAmount = document.querySelector("#amount");
  let amount = parseFloat(inputAmount.value).toFixed(2);

  let userInput =  inputName.value;


  let displayNameElement = document.createElement("li");
  let displayAmountElement = document.createElement("li");

  displayAmountElement.classList.add("rands");
  displayAmountElement.textContent = amount;

  displayNameElement.classList.add("name");
  displayNameElement.textContent = userInput;

  let displayName = document.querySelector("#display-name");
  displayName.appendChild(displayNameElement);

  let displayRands = document.querySelector("#display-amount");
  displayRands.appendChild(displayAmountElement);

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
resultAmount.textContent = finalAmount.toFixed(2);


inputAmount.value = "";
}








