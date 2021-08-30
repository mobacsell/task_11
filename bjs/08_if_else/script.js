'use strict'

const   orderNumberField = document.getElementById('orderNumberField'),
        answerField = document.getElementById('answerField');

let gameRun = true;

startNewGame();

function startNewGame() {
    let minValue = parseInt(prompt('Минимальное знание числа для игры','0')),
        maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));

    let answerNumber  = Math.floor((minValue + maxValue) / 2),
        orderNumber = 1;
        gameRun = true;

        alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

        answerField.textContent = `Вы загадали число ${answerNumber}?`;
        orderNumberField.innerText = orderNumber;
}





// let phraseRandom = Math.round(Math.random() * 3);
// let questionPhrase;

// switch (phraseRandom) {
//     case 0:
//         questionPhrase = `Вы загадали число ${answerNumber}?`;
//         break;
//     case 1:
//         questionPhrase = `Мне кажется, что вы задумали число ${answerNumber}?`;
//         break;
//     case 2:
//         questionPhrase = `Неужели это число ${answerNumber}?`;
//         break;
//     case 3:
//         questionPhrase = `Возможно я ошибаюсь, задуманное число ${answerNumber}?`;
//         break;
// }



document.getElementById('btnRetry').addEventListener('click', function () {
    getNewGame();
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
});

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
});

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
});

