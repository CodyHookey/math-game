var rangeFunc = function () {
    $('.slider').on('input', function() {
        $('.rangeOutput').text($(this).val());
    });
}

$(document).ready(function () {
    var secRemaining = 10;
    var score = 0;
    var highScore = 0;
    var equation;

    var updateHighScore = function () {
        if (score > highScore) {
            highScore += score;
            $('.highScore').text(highScore);
        }
    }

    var randomNum = function (num) {
        return Math.floor(Math.random() * num);
    }

    var question = function () {
        var question = {};

        var num1 = randomNum($('.slider').val());
        var num2 = randomNum($('.slider').val());

        question.answer = num1 + num2;
        question.equation = String(num1) + " + " + String(num2);

        return question;
    }

    var newEquation = function () {
        equation = question();
        $('.equationOutput').text(equation.equation);
    }

    var answerCompare = function (userAnswer, answer) {
        if (userAnswer === answer) {
            newEquation();
            $('.userAnswer').val('');
            updateTimer(+1);
            updateScore(+1);
            updateHighScore();
        }
    }

    $('.userAnswer').on('keyup', function () {
        startGame();
        answerCompare(Number($(this).val()), equation.answer);
    })

    newEquation();

    var timer;

    var startGame = function () {
        if (!timer) {
            if (secRemaining === 0) {
                updateTimer(10);
                updateScore(-score);
            }
            timer = setInterval(function () {
                updateTimer(-1);
                if (secRemaining === 0) {
                    clearInterval(timer);
                    timer = undefined;
                }
            }, 1000);
        }
    }

    var updateTimer = function (amount) {
        secRemaining += amount;
        $('.timer').text(secRemaining);
    }

    var updateScore = function (amount) {
        score += amount;
        $('.currentScore').text(score);
    }

    rangeFunc();
    $('.rangeOutput').text($('.slider').val());
});