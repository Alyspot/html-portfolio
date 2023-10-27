let numberOfPeople = 1;

function incrementPeople() {
    numberOfPeople++;
    updateNumberOfPeople();
    calculateTotalBill();
}

function decrementPeople() {
    if (numberOfPeople > 1) {
        numberOfPeople--;
        updateNumberOfPeople();
        calculateTotalBill();
    }
}

function updateNumberOfPeople() {
    document.getElementById('totalPeople').textContent = numberOfPeople;
}

function calculateTotalBill() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const tipAmountPerPerson = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    const totalBillAmountPerPerson = (billAmount / numberOfPeople) + tipAmountPerPerson;
    document.getElementById('totalBill').value = `$${totalBillAmountPerPerson.toFixed(2)}`;
}