var timerEl = document.getElementById('time');
var questionsEl = document.querySelector("#questions");
var answersEl = document.querySelector("#answers");
var quizStartButtonEl = document.querySelector("#y-n")
var rigntOrWrong=document.querySelector("#right-or-wrong")

//set up time countdown function
var countdown = function(){
    //initial time left for 75 seconds
    var timeleft=75;
    //time interval function for 1 second
    var timeInterval=setInterval(function(){
        if (timeleft >0){
            timerEl.textContent= "Time: " + timeleft;
            timeleft--;
        } else{
            timerEl.textContent ="";
            //clear time set.
            clearInterval(timeInterval);
            //when time is up, run gameover funciton
            gameOver();
        }
    }, 1000);
};
//start timer countdown for 75 seconds
//countdown();


//first page message, click start to start counting and flash to quiz questions
var createWelcomePage = function(){
    //add title in welcome page
    questionsEl.textContent="Welcome to JS Quiz"
    //add li in answers ul
    var addWelcomeWords=document.createElement("li");
    addWelcomeWords.className="initial-li";
    addWelcomeWords.setAttribute("eliminate",1);
    addWelcomeWords.innerHTML="Try to answer the following code-ralated questions within the time limit.<br>Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    answersEl.appendChild(addWelcomeWords);   

    //create button
    var quizStartBtn=document.createElement("button");
    quizStartBtn.textContent="Quiz Start";
    quizStartBtn.className="btn";
    quizStartBtn.setAttribute("quiz-start",1);  
    quizStartButtonEl.appendChild(quizStartBtn);
    //time set to 0;
    timerEl.textContent= "Time: 0";
}

createWelcomePage();

//Quiz start button, after click, show questionDisply and start countdown the time.
var quizStartButton = function(event){
    //get target element from event
    var targetEl = event.target;
    //correct answer was selected
    if (targetEl.matches("button[quiz-start='1']")){
    //     //go to next question
    questionDisplay();
    countdown();
    }
    //console.log(targetEl);    
};



//set up questions array 4 questions
var questionsData = [
    {   
        id:1,
        question: "question 1",
        answers:[{text:"1:1", isCorrect:false},
                 {text:"2:1", isCorrect:false},
                 {text:"3:1", isCorrect:true},
                 {text:"4:1", isCorrect:false},
        ]
    },
    {  
        id:2,
        question: "What is 30/3?",
        answers:[{text:"1:2", isCorrect:false},
                {text:"2:2", isCorrect:false},
                {text:"3:2", isCorrect:true},
                {text:"4:2", isCorrect:false},
        ]
    },
    {  
        id:3,
        question: "question 3?",
        answers:[{text:"1:3", isCorrect:false},
                {text:"2:3", isCorrect:false},
                {text:"3:3", isCorrect:true},
                {text:"4:3", isCorrect:false},
        ]
    },
    {  
        id:4,
        question: "question4?",
        answers:[{text:"1:4", isCorrect:false},
                {text:"2:4", isCorrect:false},
                {text:"3:4", isCorrect:true},
                {text:"4:4", isCorrect:false},
        ]
    }
];

console.log(questionsData[0].answers[0])
//convert answers to string


//display questions when click StartQuiz button
var QuizButtonHandler = function(event){
    //get target element from event
    var targetEl = event.target;
    //correct answer was selected
    if (targetEl.matches(questionsData[i].answers[j].isCorrect["true"])){
        //show correct
        var rightOrWrong=document.createElement("li");
        rightOrWrong.className="footer";
        rightOrWrong.textContent="---Corrent!---"
        //go to next question
        i++;
    }
    //wrong button was selected
    else {
        //show incorrect
        var rightOrWrong=document.createElement("li");
        rightOrWrong.className="footer";
        rightOrWrong.textContent="---Wrong!---"
        //deduct 10 seconds
        timeleft-=10;
        //go to next question
        i++;
    // }
};
}

//display questions, when it's answered, change to next questions.
var questionDisplay=function(){
    //disappear welcome page
    var eliminateInitalWords=document.querySelector("li[eliminate='1']");
        eliminateInitalWords.innerHTML="";
    //disappear welcome page button
    var eliminateQuizBtn=document.querySelector("button[quiz-start='1']");
        quizStartButtonEl.removeChild(eliminateQuizBtn);

    for (var i=0; i<questionsData.length; i++){
        questionsEl.textContent=questionsData[i].question;
            //add li in answers ul
            var quizAnswerslist=document.createElement("li");
            quizAnswerslist.className="quiz-answers";
            quizAnswerslist.setAttribute("answer", 1)
            //list answers display correctly
            for(var j = 0; j<questionsData[i].answers.length;j++){
            quizAnswerslist.innerHTML=(questionsData[i].answers[j].text);
                       
        }
            answersEl.appendChild(quizAnswerslist);
                      

    };
  
            




}

// console.log(questionsData[0].answers);
//questionDisplay()


//if correct just to next one, if wrong, substract 10 seconds. 
// for (var i=0; i<questionsData.length; i++){
//     if( answer === false){
//         timeleft-=10;
//     }

// }

//game over when finish all or timer is 0

//save score to local storage

//input player's initial with score

quizStartButtonEl.addEventListener("click", quizStartButton)
