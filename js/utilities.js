function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
}

function balanceFieldValueById(id) {
  const myBalance = document.getElementById(id).innerText;
  const balanceNumber = parseFloat(myBalance);
  return balanceNumber;
}

function showSectionById(id) {
  // hidden
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");

  // visible
  document.getElementById(id).classList.remove("hidden");
}
