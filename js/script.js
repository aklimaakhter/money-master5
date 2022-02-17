document.getElementById('calc-button').addEventListener('click', function () {
    const incomeAmount = updateExpences('income-input');
    const foodAmount = updateExpences('food-input');
    const rentAmount = updateExpences('rent-input');
    const clotheAmount = updateExpences('clothe-input');

    const total = document.getElementById('total-expanses');
    const totalExpences = foodAmount + rentAmount + clotheAmount;
    total.innerText = totalExpences;

    const balance = document.getElementById('balance-total');
    const balanceTotal = incomeAmount - totalExpences;
    balance.innerText = balanceTotal;

})

function updateExpences(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    return inputAmount;

}

// update savings amount
const savingsParcent = 20;
document.getElementById('save-button').addEventListener('click', function () {
    const save = document.getElementById('savings-input').value;
    const incomeAmount = document.getElementById('income-input').value;
    if (save == savingsParcent) {
        const savingsAmount = document.getElementById('savings-amount');
        let savings = parseFloat(savingsAmount.innerText);
        const savingsAfterPercent = (incomeAmount * 20) / 100;
        savings = savings + savingsAfterPercent;
        savingsAmount.innerText = savings;
    }
    else {

    }

    // update remaining balance
    const remainingBalance = document.getElementById('remaining-balance');
    const balance = document.getElementById('balance-total').innerText;
    const savingsAmount = document.getElementById('savings-amount').innerText;
    const remaining = balance - savingsAmount;
    remainingBalance.innerText = remaining;

})
