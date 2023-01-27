const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const checkBtn = document.querySelector("#check-btn");
const nextBtn = document.querySelector("#next-btn");
const table = document.getElementsByTagName("table")[0];
const label = document.getElementsByTagName("label")[1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableCurrency = [2000, 500, 100, 20, 10, 5, 1];

cashGiven.style.display = "none";
label.style.display = "none";
checkBtn.style.display = "none";
table.style.display = "none";

nextBtn.addEventListener("click", function checkBillAmount() {
  if (billAmount.value > 0) {
    cashGiven.style.display = "block";
    checkBtn.style.display = "block";
    label.style.display = "block";
  } else {
    showMessage("Bill Amount is invalid.");
  }
});

checkBtn.addEventListener("click", function validate() {
  hideMessage();

  if (cashGiven.value < billAmount.value) {
    showMessage("give me more money!");
  } else {
    const balanceAmount = cashGiven.value - billAmount.value;
    calculateChange(balanceAmount);
    table.style.display = "block";
  }
});

const calculateChange = (balanceAmount) => {
  for (let i = 0; i < availableCurrency.length; i++) {
    noOfNotes[i].innerText = Math.trunc(balanceAmount / availableCurrency[i]);
    balanceAmount = balanceAmount % availableCurrency[i];
  }
};

const hideMessage = () => {
  errorMessage.style.display = "none";
};
const showMessage = (msg) => {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
};
