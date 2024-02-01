
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // get input values
    const billAmount = parseFloat(document.getElementById("bill").value)
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value)

    // calc tip and total amount
    const tipAmount = billAmount * (tipPercentage / 100)

    // results display
    document.querySelector(".tipAmount").textContent = `Tip Amount ${tipAmount} $`
    document.querySelector(".total").textContent = `Total Amount ${billAmount + tipAmount} $`
})


