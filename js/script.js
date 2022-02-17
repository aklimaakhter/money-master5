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
    const incomeInput = document.getElementById(inputId);
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);
    return incomeAmount;

}