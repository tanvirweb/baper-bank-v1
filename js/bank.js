const bankBtnDeposit = document.getElementById("bank-btn-deposit");
const bankBtnWithdraw = document.getElementById("bank-btn-withdraw");
const bankAmount = document.getElementById("bank-amount");

// Deposit sytem 
bankBtnDeposit.addEventListener("click", function() {
    const bankDepositAmount = document.getElementById("bank-deposit-amount");
    const bankDepositInput = document.getElementById("bank-deposit-input");

    if(isNaN(bankDepositInput.value)) {
        alert("Please input numbers only!")
        return;
    }
    const totalDepositAmount = parseFloat(bankDepositAmount.innerText) + parseFloat(bankDepositInput.value);
    bankDepositAmount.innerText = totalDepositAmount;
    bankAmount.innerText = parseFloat(bankAmount.innerText) + parseFloat(bankDepositInput.value);
    bankDepositInput.value = "";
})

// Withdraw system 
bankBtnWithdraw.addEventListener("click", function() {
    const bankWithdrawAmount = document.getElementById("bank-withdraw-amount");
    const bankWithdrawInput = document.getElementById("bank-withdraw-input");

    if(isNaN(bankWithdrawInput.value)) {
        alert("Please input numbers only!")
        return;
    } else if(parseFloat(bankWithdrawInput.value) > parseFloat(bankAmount.innerText)) {
        alert("Itna paisa nahi hain tumari bap ke pass!");
        bankWithdrawInput.value = "";
        return;
    }
    bankAmount.innerText = parseFloat(bankAmount.innerText) - parseFloat(bankWithdrawInput.value);
    bankWithdrawAmount.innerText = parseFloat(bankWithdrawAmount.innerText) + parseFloat(bankWithdrawInput.value);
    bankWithdrawInput.value = "";
})