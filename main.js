const inputPrice = document.querySelector('#price');
const inputPeople = document.querySelector('#people');
const billTip = document.querySelector('#tip');
const btnCount = document.querySelector('.count');
const errorP = document.querySelector('.error');
const infoCost = document.querySelector('.cost_info');
const totalCost = document.querySelector('.cost_total');

const checkBillTip = () => {
    errorP.textContent = '';

    if (inputPrice.value > 0 && inputPeople.value > 0 && billTip.value > 0) {
        infoCost.style.display = 'block';
        totalCost.textContent = countBillTip();
    } else {
        infoCost.style.display = 'none';
        errorP.textContent = 'Wypełnij wszystkie pola';
    }
};

const countBillTip = () => {
    const price = parseFloat(inputPrice.value);
    const people = parseFloat(inputPeople.value);
    const billTips = parseFloat(billTip.value);
    const result = (price + (price * billTips)) / people;
    return result.toFixed(2);
}

btnCount.addEventListener('click', checkBillTip);