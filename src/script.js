function displayAmount() {
  let name = document.querySelector("#inputName");
  let input = document.querySelector("#amount");
  let amount = parseFloat(input.value).toFixed(2);
  let display = document.querySelector('#display-amount');
  

  display.innerHTML = name + ":" + "R" + amount;
}

let button = document.querySelector("log-button");
button.addEventListener("click",displayAmount);



