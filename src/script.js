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
  document.querySelector("#amount").value = "";

}

let button = document.querySelector("#log-button");
button.addEventListener("click",displayAmount);







