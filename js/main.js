// Bank Login System 
const bankEmail = document.getElementById("bank-email");
const bankPassword = document.getElementById("bank-password");
const bankBtnlogin = document.getElementById("bank-btn-login");


bankBtnlogin.addEventListener("click", function() {
    if(bankEmail.value === "kuddus@mail.com" && bankPassword.value === "123456") {
        window.location.href = "bank.html";
    } else if (bankEmail.value == "") {
        alert("Add your email address!");
    } else if (bankPassword.value == "") {
        alert("Password field can't be empty!");
    } else {
        alert("Please check login credentials again!");
    }
})
