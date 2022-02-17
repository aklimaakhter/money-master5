document.getElementById('calc-button').addEventListener('click', function () {
    const incomeAmount = updateExpences('income-input');
    const foodAmount = updateExpences('food-input');
    const rentAmount = updateExpences('rent-input');
    const clotheAmount = updateExpences('clothe-input');

    // Expences update
    // const foodInput = document.getElementById('food-input');
    // const foodAmountText = foodInput.value;
    // const foodAmount = parseFloat(foodAmountText);


    // const rentInput = document.getElementById('rent-input');
    // const rentAmountText = rentInput.value;
    // const rentAmount = parseFloat(rentAmountText);


    // const clotheInput = document.getElementById('clothe-input');
    // const clotheAmountText = clotheInput.value;
    // const clotheAmount = parseFloat(clotheAmountText);




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
// function updateExpences(inputId) {
//     const incomeInput = document.getElementById(inputId);
//     const incomeAmountText = incomeInput.value;
//     const incomeAmount = parseFloat(incomeAmountText);
//     return incomeAmount;

// }
const savingsParcent = 0;
document.getElementById('save-button').addEventListener('click', function () {
    const save = document.getElementById('savings-input').value;
    if (save == savingsParcent) {
        const savingsAmount = document.getElementById('savings-amount');
        let savings = parseFloat(savingsAmount.innerText);
        const savingsAfterPercent = (incomeAmount * 20) / 100;
        savings = savings - savingsAfterPercent;
        savingsAmount.innerText = savings;
    }
    else {

    }

})