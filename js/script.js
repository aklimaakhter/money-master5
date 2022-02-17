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

const savingsParcent = 30;
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
    const remainingBalance = document.getElementById('remaining-balance');
    // const balance = document.getElementById('balance-total').value;
    // const savingsAmount = document.getElementById('savings-amount').value;
    const remaining = balance - savingsAmount;
    remainingBalance.innerText = remaining;

})
// const balance = document.getElementById('balance-total');
// const balanceTotal = incomeAmount - totalExpences;
// balance.innerText = balanceTotal;