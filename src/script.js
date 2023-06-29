
function authenticate(){
  let username = document.querySelector("#inputEmail").value;
  let password = document.querySelector("#inputPassword").value;

  fetch("api/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => {

    if (data.success){
      console.log("Authentification successful");

    } else{
      console.log("Authentification failed");
    }
    })
   
  .catch(error => {
    console.log("Error", error);
  });
}
document.querySelector(".main-form").addEventListener("submit" , function(event){
  event.preventDefault();
  authenticate();
});


function displayAmount(event) {
   event.preventDefault();


  let inputName = document.querySelector("#inputName");
  let inputAmount = document.querySelector("#amount");


  let displayNameElement = document.createElement("span");
  let displayAmountElement = document.createElement("span");
  let newLine = document.createElement("br");

  displayAmountElement.classList.add("rands");
  displayAmountElement.textContent = parseFloat(inputAmount.value).toFixed(2);

  displayNameElement.classList.add("name");
  displayNameElement.textContent = inputName.value;

  let appendResult = document.querySelector("#display-results");
  appendResult.appendChild(newLine);
  appendResult.appendChild(displayNameElement);
  appendResult.appendChild(displayAmountElement);

  inputName.value = "";
  inputAmount.value = "";

}

let button = document.querySelector("#log-button");
button.addEventListener("click",displayAmount);

function subtractAmount() {

let inputSalary = document.querySelector("#underline-input");
let inputAmount = document.querySelector(".rands");

let userSalary = parseFloat(inputSalary.value);
let amount = parseFloat(inputAmount.textContent);

let finalAmount = userSalary - amount;

let resultAmount = document.querySelector("#balance-check");
resultAmount.textContent = finalAmount.toFixed(2);


inputAmount.value = "";

}








