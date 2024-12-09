document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donationAmount = getInputFieldValueById("feni-donation-amount");
    const totalDonateAmount = getTextFieldValueById("feni-donate-amount-total");
    const remainBalance = balanceFieldValueById("main-balance");

    if (
      isNaN(donationAmount) ||
      donationAmount < 0 ||
      donationAmount > remainBalance
    ) {
      alert("Invalid Donation Amount");
    } else {
      const donateAmount = totalDonateAmount + donationAmount;
      const newBalance = remainBalance - donationAmount;
      document.getElementById("feni-donate-amount-total").innerText =
        donateAmount;
      document.getElementById("main-balance").innerText = newBalance;

      const div = document.createElement("div");
      div.classList.add(
        "border-2",
        "border-solid",
        "border-bg-tertiary",
        "rounded-lg",
        "p-4"
      );
      const currentDate = new Date();
      const formatDate = currentDate.toString();
      div.innerHTML = `
          <p class="text-xl font-bold">${donationAmount} taka is Donated for Flood Relief in Feni, Bangladesh</p><br>
          <p class="text-base font-light text-secondary">Date: ${formatDate}</p>

      `;

      document.getElementById("transaction-container").appendChild(div);
    }
  });