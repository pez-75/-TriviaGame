
var currentQuestion =0;
var correct = 0;
var wrong=0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var timer;



 var questions = [{
    "question": "What is Earth's largest continent?"
    "option1:" "Africa",
    "option2": "Europe",  
    "option3": "Asia",
    "option4": "Antartica",
    "answer": "3"
  },
  {
    "question": " What country has the most natural lakes?",
    "option1": "Canada",
    "option2": "USA",
    "option3": "Austrlia",
    "option4": "India",
    "answer": "1"
  },
   {
    "question": "In what country can you visit Machu Picchu?",
    "option1": "Chile",  
    "option2": "Bolivia",
    "option3": "Peru",
    "option4": "Coluwbia",
    "answer": "3"
  },
   {
    "question": "Which African nation has the most pyramids?", 
    "option1": "Sudan",  
    "option2": "Lybia",
    "option3": "Egypt",
    "option4": "Algeria",
    "answer": "1"
  },
   {
    "question": "What is the oldest city in the world?", 
    "option1": "Jerusalem",   
    "option2": "Damaascus",
    "option3": "Jericho",
    "option4": "Athens",
    "answer": "2"
  },


 }];


function loadQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

function loadQuestion(){
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if(!selectedOption){
    alert('Please select your answer!');
    return;
  }
  var answer = selectedOption.value;
  if(questions[currentQuestion].answer == answer){
    correct++;
  }
  selectedOption.checked = false;
  currentQuestion++;
  if(currentQuestion==totQuestions -1){
    nextButton.textContent = 'Finish';
  }
  if(currentQuestion = totQuestions){
    container.style.display= 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'You got '+  correct + 'correct';
    return;
  }
  loadQuestion(currentQuestion);
 }
  loadQuestion(currentQuestion);

  
