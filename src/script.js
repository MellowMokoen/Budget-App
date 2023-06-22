function displayAmount(event) {
    event.preventDefault();
  let inputName = document.querySelector("#inputName");
  let inputAmount = document.querySelector("#amount");
  let amount = parseFloat(inputAmount.value).toFixed(2);

  let display = document.querySelector("#display-amount");
  

  display.innerHTML = (inputName.value) + ":" + "R" + amount;
}

let button = document.querySelector("#log-button");
button.addEventListener("click",displayAmount);





