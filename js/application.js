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

    equation = question();
    $('.equationOutput').text(equation.equation);

    var answerCompare = function (userAnswer, answer) {
        console.log(userAnswer === answer);
    }

    $('.userAnswer').on('keyup', function () {
        answerCompare(Number($(this).val()), equation.answer);
    })
});