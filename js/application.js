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