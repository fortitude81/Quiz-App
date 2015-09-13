var questions = [
  ['What is the 2nd planet from the sun?', 'Venus'],
  ['What is the largest continent?', 'Antarctica'],
  ['What animal rhymes with fog?', 'dog'],
  ['What vigilante is known as The Dark Knight', 'Batman'],
  ['In what continent is France?', 'Europe']
];
var correctAnswers = 0;
var question;
var answer;
var response;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
  }
}

html = "You got " + correctAnswers + " question(s) right."
print(html);
