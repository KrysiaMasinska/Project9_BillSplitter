const inputPrice = document.querySelector('#price');
const inputPeople = document.querySelector('#people');
const selectTip = document.querySelector('#tip');
const btnCount = document.querySelector('.count');
const errorP = document.querySelector('.error');
const infoCost = document.querySelector('.cost_info');
const totalCost = document.querySelector('.cost_total');

const checkInputValue = () => {
    errorP.textContent = '';

    if (inputPrice.value > 0 && inputPeople.value > 0 && selectTip.value > 0) {
        infoCost.style.display = 'block';
        totalCost.textContent = countTip();
    } else {
        infoCost.style.display = 'none';
        errorP.textContent = 'Wypełnij wszystkie pola';
    }
};

const countTip = () => {
    const price = parseFloat(inputPrice.value);
    const people = parseFloat(inputPeople.value);
    const tip = parseFloat(selectTip.value);
    const result = (price + (price * tip)) / people;
    return result.toFixed(2);
}

btnCount.addEventListener('click', checkInputValue);