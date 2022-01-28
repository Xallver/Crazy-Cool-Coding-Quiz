// Quiz Questions
const questions = [
    {
        question: "What is the first index of an array?",
        choices: ["a. 1", "b. 0", "c. 2", "d. 3"],
        answer: "b. 0"
    },
    {
        question: "How do you create a JavaScript function?",
        choices: ["a. function:myFunction()", "b. function = myFunction()", "c. createFunction()", "d. function myFunction()"],
        answer: "d. function myFunction()"
    },
    {
        question: "In which HTML element do we put the JavaScript?",
        choices: ["a. <javascript>", "b. <js>", "c. <script>", "d. <jsscript>"],
        answer: "c. <script>"
    },
    {
        question: "Which one of these is NOT used as a Javascript Data Type?",
        choices: ["a. number", "b. string", "c. boolean", "d. alerts"],
        answer: "d. alerts"
    },
    {
        question: "How you do call a function named thisFunction()?",
        choices: ["a. call thisFunction", "b. thisFunction()", "c. call thisFunction()", "d. call function thisFunction()"],
        answer: "b. thisFunction()"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["a. alertBox(\"Hello World\");", "b. alert(\"Hello World\");", "c. msgBox(\"Hello World\")", "d. msg(\"Hello World\");"],
        answer: "b. alert('Hello World');"
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        choices: ["a. if (i == 5)", "b. if i = 5", "c. if i = 5 then", "d. if i == 5 then"],
        answer: "a. if (i == 5)"
    },
    {
        question: "How does a FOR loop start?",
        choices: ["a. for i = 1 to 5", "b. for(i = 0; i <= 5)", "c. for(i <= 5; i++)", "d. for (i = 0; i <= 5; i++)"],
        answer: "d. for (i = 0; i <= 5; i++)"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["a. 'this is a comment", "b. //This is a comment", "c. <!--This is a comment-->"],
        answer: "b. //This is a comment"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["a. var colors = [\"red", "green", "blue\"]", "b. var colors = (1:\"red\", 2:\"green\", 3:\"blue\")", "c. var colors = \"red\", \"green\", \"blue\"", "d. var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")"],
        answer: "a. var colors = [\"red\", \"green\", \"blue\"]"
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        choices: ["a. Math.round(7.25)", "b. Math.rnd(7.25)", "c. rnd(7.25)", "d. round(7.25)"],
        answer: "a. Math.round(7.25)"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ___.",
        choices: ["a. =", "b. !=", "c. ==", "d. equals"],
        answer: "c. =="
    }
]
// End of Questions

// Connecting Elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");
// End of Connecting Elements

// Random Variables
var questionNum = 0;
var correctAns = 0;
var questionIndex = 0;
var scoreResult;
// End of Random Variables

// When user click's start button, timer will start
var totalTime = 151;
function newQuiz() {
    questionIndex = 0;
    totalTime = 150;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function () {
        totalTime--;
        timeLeft.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);

    showQuiz();
};

console.log(questions[questionIndex].question);
console.log(questions[questionIndex].choices);


// Then will be presented with questions/choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}


// After question is answered, show if correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // If answer is correct, add 1 score to final score
        correct++;
        // console.log(correctAns);
        answerCheck.textContent = "Correct!";
    } else {
        // If answer is wrong, deduct 10 seconds from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // Repeat with the rest of questions
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more questions, run 'game over' function
        gameOver();
    }
}

function ChooseA() { checkAnswer(0); }
function ChooseB() { checkAnswer(1); }
function ChooseC() { checkAnswer(2); }
function ChooseD() { checkAnswer(3); }

// When all questions are answered or timer reaches 0 seconds run game over function
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    // Show final score
    finalScore.textContent = correctAns;
}

// Enter Initials & Store Highscore in localStorage
function storeHighScores(event) {
    event.preventDefault();

    // stop function if initials is blank
    if (!initialInput.value) {
        alert("Please enter your initials!");
        return;
    }

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    // Store scores in LocalStorage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (!savedHighScores) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);


    // Change array back into string in order to store in localStorage
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);

    // Show current highscores
    showHighScores();
   
}

// Show Highscores
function showHighScores() {
    var i = 0;

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // Check if any scores in localStorage
    if (!savedHighScores) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (var i = 0; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}







