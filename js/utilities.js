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
  document.getElementById("donation-sec").classList.add("hidden");
  document.getElementById("transaction-container").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function showButtonColorById(id) {
  document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
  document.getElementById(id).classList.add("bg-[#B4F461]");
}
