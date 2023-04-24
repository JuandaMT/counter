const main = document.querySelector('main');
const buttons = document.getElementsByTagName('button');
const decreaseButton = buttons[0];
const resetButton = buttons[1];
const increaseButton = buttons[2];

counterNumber = 0;

decreaseButton.addEventListener('click', function () {
    counterNumber--;
    changeNumber();
});

resetButton.addEventListener('click', function () {
    counterNumber = 0;
    changeNumber();
});

increaseButton.addEventListener('click', function () {
    counterNumber++;
    changeNumber();
});

function changeNumber(){
    main.innerText = counterNumber;
}

