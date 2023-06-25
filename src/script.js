function displayAmount(event) {
   event.preventDefault();

  let inputName = document.querySelector("#inputName");
  let inputAmount = document.querySelector("#amount");
  let amount = parseFloat(inputAmount.value).toFixed(2);

  let userInput = (inputName.value) + " : " + "R " + amount;


  let displayElement = document.createElement("li");
  displayElement.textContent = userInput;

  let displayResults = document.querySelector("#display-results");
  displayResults.appendChild(displayElement);

  document.querySelector("#inputName").value = "";
  

}

let button = document.querySelector("#log-button");
button.addEventListener("click",displayAmount);

function subtractAmount() {

let inputSalary = document.querySelector("#underline-input");
let inputAmount = document.querySelector("#amount");

let userSalary = parseFloat(inputSalary.value);
let amount = parseFloat(inputAmount.value);

let finalAmount = userSalary - amount;

let resultAmount = document.querySelector("#amount");
resultAmount.textContent = "R " + finalAmount.toFixed(2);


}








