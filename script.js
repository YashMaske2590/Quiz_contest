//1.Questions to be displayed in set of questions and answers !

const questions=[
    {
        question :"Which is larget animal in the world ?" ,
        answers:
        [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "tiger", correct: false},
            {text: "lion", correct: false},
        ]
    },
    {
        question :"Capital city of Maharashtra ?" ,
        answers:
        [
            {text: "Mumbai", correct: true},
            {text: "Thane", correct: false},
            {text: "Navi Mumbai", correct: false},
            {text: "Pune", correct: false},
        ]
    },
    {
        question :"Rohit Sharma jersy number ?" ,
        answers:
        [
            {text: "12", correct: false},
            {text: "18", correct: false},
            {text: "45", correct: true},
            {text: "78", correct: false},
        ]
    },
    {
        question: " Capital of INDIA ?" ,
        answers:
        [
            {text: "Delhi", correct: true},
            {text: "New Delhi", correct: false},
            {text: "Maharashtra", correct: false},
            {text: "U.P", correct: false},
        ]
    },
    {
        question: " Current ruling party of India?" ,
        answers:
        [
            {text: "BJP", correct: true},
            {text: "NCP", correct: false},
            {text: "NDA", correct: false},
            {text: "AP", correct: false},
        ]
    }
];

//2. Decrelering variables to catch question and answer 

const questionElement = document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

//3. Declering variables to stored index and score

let currentQuestionIndex =0 ;
let score = 0;

//4.when we start the quiz it should reset score and current index 0

function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question";
    showQuestion();
}

function  showQuestion()
{
    resetState();
    //5.In this we will catch question number and question
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =questionNo + ". " + currentQuestion.
    question;
     //6.In this we will catch answer option  of that question
    currentQuestion.answers.forEach(answer =>
        {
            const button =document.createElement("button");
            button.innerHTML =answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            button.addEventListener("click",selectAnswer);
            if(answer.correct)
            {
                //7.It will stored true and false value of question
                button.dataset.correct = answer.correct;
            }button.addEventListener("click",selectAnswer);
            
        });
}
function resetState()
{
    // "next question " will be disappear till user click on any of the answer button"
    nextButton.style.display="none";
    while(answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e)
{
  const selectedBtn= e.target;
  const isCorrect=selectedBtn.dataset.correct ===  "true";
  if(isCorrect)
  {
    //8. when the answer is correct then it will stored in "correct class"
    selectedBtn.classList.add("correct");
    score++;
  }
  else
  {
    //9.  when the answer is incorrect then it will stored in "incorrect class"
    selectedBtn.classList.add("incorrect");
  }
  //10. If the user select the wrong answer then it will show the correct anser with green background color 
  Array.from(answerButtons.children).forEach(button =>
  {
    if(button.dataset.correct === "true")
    {
        button.classList.add("correct");
    }
    button.disabled =true;

  });
  nextButton.style.display ="block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}
nextButton.addEventListener("click", ()=>
{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
})
startQuiz();





