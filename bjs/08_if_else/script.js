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
        answerField.textContent = getRandomWinMessage();
        gameRun = false;
    }
});

//Функция startNewGame реализует функционал запуска игры и первого ответа.
function startNewGame() {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    minValue = (minValue < -999) ? -999 : minValue; 
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    maxValue = (maxValue > 999) ? 999 : maxValue;

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    answerField.textContent = getRandomAnswer();
    orderNumberField.textContent = orderNumber;
}

//Функция getNextAnswer реализует функционал последующего поиска числа (при нажатии кнопок <Больше> или <Меньше>)
function getNextAnswer(btn) {
    if (gameRun) {
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.textContent = answerPhrase;
            gameRun = false;
        } else {
            if (this === document.querySelector('#btnOver')) {
                minValue = answerNumber  + 1;
            } else {
                maxValue = answerNumber  - 1;
            }
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.textContent = orderNumber;
            answerField.textContent = getRandomAnswer();
        }
    }
}

//Функция getRandomAnswer реализует функционал рандомного выбора ответов.
function getRandomAnswer() {
    let phraseRandom = Math.round(Math.random() * 3);
    let questionPhrase;

    switch (phraseRandom) {
        case 0:
            questionPhrase = `Вы загадали число${getTextOfNumber(answerNumber)}?`;
            break;
        case 1:
            questionPhrase = `Мне кажется, что вы задумали число${getTextOfNumber(answerNumber)}?`;
            break;
        case 2:
            questionPhrase = `Неужели это число${getTextOfNumber(answerNumber)}?`;
            break;
        case 3:
            questionPhrase = `Это просто! Вы задумали число${getTextOfNumber(answerNumber)}?`;
            break;
    }

    return questionPhrase;
}


//Функция getRandomWinMessage реализует функционал рандомного сообщения при отгадывании числа.
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

//Функция getTextOfNumber переводит числовую запись в текстовую.
function getTextOfNumber(num) {
    let initialNum = num;
    let textAnswer = '';

    if (num === 0) {
        return ' ' + 0;
    }

    if (String(num)[0] === '-') {
        textAnswer = textAnswer + ' минус';
        num = num * (-1);
    }

    if (String(num).length > 2) {
        switch (Math.floor(num / 100)) {
            case 1:
                textAnswer = textAnswer + ' сто';
                break;
            case 2:
                textAnswer = textAnswer + ' двести';
                break;
            case 3:
                textAnswer = textAnswer + ' триста';
                break;
            case 4:
                textAnswer = textAnswer + ' четыреста';
                break;
            case 5:
                textAnswer = textAnswer + ' пятьсот';
                break;
            case 6:
                textAnswer = textAnswer + ' шестьсот';
                break;
            case 7:
                textAnswer = textAnswer + ' семьсот';
                break;
            case 8:
                textAnswer = textAnswer + ' восемьсот';
                break;
            case 9:
                textAnswer = textAnswer + ' девятьсот';
                break;
        }

        num = num % 100;
    }

    if (String(num).length > 1 && num >= 20) {
        switch (Math.floor(num / 10)) {
            case 2:
                textAnswer = textAnswer + ' двадцать';
                break;
            case 3:
                textAnswer = textAnswer + ' тридцать';
                break;
            case 4:
                textAnswer = textAnswer + ' сорок';
                break;
            case 5:
                textAnswer = textAnswer + ' пятьдесят';
                break;
            case 6:
                textAnswer = textAnswer + ' шестьдесят';
                break;
            case 7:
                textAnswer = textAnswer + ' семьдесят';
                break;
            case 8:
                textAnswer = textAnswer + ' восемьдесят';
                break;
            case 9:
                textAnswer = textAnswer + ' девяносто';
                break;
        }

    num = num  % 10;
    } else {
        switch (num) {
            case 10:
                textAnswer = textAnswer + ' десять';
                break;
            case 11:
                textAnswer = textAnswer + ' одиннадцать';
                break;
            case 12:
                textAnswer = textAnswer + ' двенадцать';
                break;
            case 13:
                textAnswer = textAnswer + ' тринадцать';
                break;
            case 14:
                textAnswer = textAnswer + ' четырнадцать';
                break;
            case 15:
                textAnswer = textAnswer + ' пятнадцать';
                break;
            case 16:
                textAnswer = textAnswer + ' шестнадцать';
                break;
            case 17:
                textAnswer = textAnswer + ' семнадцать';
                break;
            case 18:
                textAnswer = textAnswer + ' восемнадцать';
                break;
            case 19:
                textAnswer = textAnswer + ' девятнадцать';
                break;
        }
    }

    if (String(num).length > 0 && num < 10) {
        switch (num) {
            case 1:
                textAnswer = textAnswer + ' один';
                break;
            case 2:
                textAnswer = textAnswer + ' два';
                break;
            case 3:
                textAnswer = textAnswer + ' три';
                break;
            case 4:
                textAnswer = textAnswer + ' четыре';
                break;
            case 5:
                textAnswer = textAnswer + ' пять';
                break;
            case 6:
                textAnswer = textAnswer + ' шесть';
                break;
            case 7:
                textAnswer = textAnswer + ' семь';
                break;
            case 8:
                textAnswer = textAnswer + ' восемь';
                break;
            case 9:
                textAnswer = textAnswer + ' девять';
                break;
        }
    }

    return (textAnswer.length > 20) ? ' ' + initialNum : textAnswer;
}


