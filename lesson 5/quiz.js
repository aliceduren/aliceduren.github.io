const quizContainer=document.getElementById('quiz');
const resultsContainer=document.getElementById('results');
const submitButton=document.getElementById('submit');
const myQuestions=[
    {
        question: "Who is the best tts character?",
        answers: {
            a:"Rapunzel",
            b:"Eugene",
            c:"Lance",
        },
        correctAnswer:"b"
    },
    {
        question:"What is the Dark Kingdom's name?",
        answers:{
            a:"Dark Kingdom",
            b:"Ulla",
            c:"Nighthold",
        },
        correctAnswer:"a"
    },
    {
        question:"How old is Eugene by the end of the show?",
        answers:{
            a:"24",
            b:"25",
            c:"26",
            d:"Never said",
        },
        correctAnswer:"c"
    }
];
function buildQuiz() {
    //contains ALL html output a.k.a. questions and answer choices
    const output= [];
    //loop through each question
    myQuestions.forEach(
        //current question is value and quetion number is index#
        (currentQuestion,questionNumber) => {
            //code for each question
            //list of answer choices
            const answers=[];
            //for each possible answer/ value
            for(letter in currentQuestion.answers){
                //give it a button that display the question letter and answer
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                    </label>`//TEENY TINY TICKS
                );
            }
        //add to answers output
        output.push(
            `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>
            </div> `
            );
        }   
        
    );
    quizContainer.innerHTML=output.join('');
};

function showResults() {
    //gather answer containers form quiz
    const answerContainers=quizContainer.querySelectorAll('.answers');

    let numCorrect=0;
    //for each question, find selected answer 0-0
    myQuestions.forEach((currentQuestion,questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer =(answerContainer.querySelector(selector) || {}).value;
        
    if (userAnswer === currentQuestion.correctAnswer){

        numCorrect++;

        answerContainers[questionNumber].style.color='lightgreen';
    }
    else{
        answerContainers[questionNumber].style.color='red';
    }
    });
    resultsContainer.innerHTML=`${numCorrect} out of ${myQuestions.length}`;
};
buildQuiz();
showSlide(currentSlide);
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
    
}
submitButton.addEventListener('click',showResults);