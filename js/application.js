$(document).ready(function () {
    var equation;

    var randomNum = function (num) {
        return Math.floor(Math.random() * num);
    }

    var question = function () {
        var question = {};

        var num1 = randomNum(10);
        var num2 = randomNum(10);

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
            $('userAnswer').val('');
        }
    }

    $('.userAnswer').on('keyup', function () {
        answerCompare(Number($(this).val()), equation.answer);
    })

    newEquation();
});