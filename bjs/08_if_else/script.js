'use strict'

const   orderNumberField = document.getElementById('orderNumberField'),
        answerField = document.getElementById('answerField');

let gameRun, minValue, maxValue, answerNumber, orderNumber;

startNewGame();

document.getElementById('btnRetry').addEventListener('click', function () {
    startNewGame();
});

document.getElementById('btnOver').addEventListener('click', getNextAnswer);

document.getElementById('btnLess').addEventListener('click', getNextAnswer);

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = getRandomWinMessage();
        gameRun = false;
    }
});

function startNewGame() {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')),
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerField.textContent = getRandomAnswer();
    orderNumberField.innerText = orderNumber;
}

function getNextAnswer(btn) {
    if (gameRun) {
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            if (this === document.querySelector('#btnOver')) {
                minValue = answerNumber  + 1;
            } else {
                maxValue = answerNumber  - 1;
            }
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
}

function getRandomAnswer() {
    let phraseRandom = Math.round(Math.random() * 3);
    let questionPhrase;

    switch (phraseRandom) {
        case 0:
            questionPhrase = `Вы загадали число ${answerNumber}?`;
            break;
        case 1:
            questionPhrase = `Мне кажется, что вы задумали число ${answerNumber}?`;
            break;
        case 2:
            questionPhrase = `Неужели это число ${answerNumber}?`;
            break;
        case 3:
            questionPhrase = `Это просто! Вы задумали ${answerNumber}?`;
            break;
    }

    return questionPhrase;
}

function getRandomWinMessage() {
    let phraseRandom = Math.round(Math.random() * 3);
    let questionPhrase;

    switch (phraseRandom) {
        case 0:
            questionPhrase = `Я всегда угадываю\n\u{1F60E}`;
            break;
        case 1:
            questionPhrase = `Я мастер-угадастер\n\u{1F60E}`;
            break;
        case 2:
            questionPhrase = `Кто молодец? Я молодец\n\u{1F60E}`;
            break;
        case 3:
            questionPhrase = `Это было просто\n\u{1F60E}`;
            break;
    }

    return questionPhrase;
}



