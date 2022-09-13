//CREATE QUIZ CLASS

 class QUIZ {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.questionIndex = 0;

    }

    getQuestionIndex() {
        return this.questions[this.getQuestionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++
        }
        this.questionIndex++;
    }
}
  
// CREATE A QUESTION CLASS

  class Question {
      constructor(text, choices, answer) {
          this.text = text;
          this.choices = choices;
          this.answer = answer;
      }

      isCorrectAnswer(choice) {
          return this.answer === choice;
      }
  }
  
  // DISPLAY QUESTION

    function displayQuestion() {
        if (QUIZ.isEnded()) {
            showScores();
        } else {
            // show question
            let questionElement = document.getElementById("question");
            questionElement.innerHTML = quiz.getQuestionIndex().text;

            // show options

            let choices = quiz.getQuestionIndex().choices;

            for (let i = 0; i < choices.length; i++){
                let choiceElement = document.getElementById("choice" + i);
                choiceElement.innerHTML = choices[i];
                guess("btn" + i, choices[i]);
            }
            
            showProgress();
        }
    };

    // GUESS FUNCTION

     function guess(id, guess) {
         let button = document.getElementById(id);
         button.onclick = function(){
             quiz.guess(guess);
             displayQuestion();
         }
     }
  
     // show quiz progress

function un(){
    console.log("hello");
}

        function showProgress() {
            let currentQuestionNumber = quiz.getQuestionIndex + 1;
            document.getElementById("progress").innerHTML = ("progress");
            progressElement.innerHTML =<>Question ${currentQuestionNumber} of ${quiz.questions.length}</>
          }
        
        // show score

        function showScores(){
        
          let quizEndHTML =<>
          <h1>quiz completed</h1> 
          <h2 id="score">you scored: ${quiz.score} of ${quiz.questions.length} </h2>
           <div class ="quiz-repeat">
               <a href="indo.html">Take quiz again</a>
           </div>
           </>

           let quizElement = document.getElementById("quiz");
           quizElement.innerHTML.quizEndHTML;
        }

        // CREATE QUIZ QUESTIONS

          let questions = [
            
              new Question(

                  "hypertext markep language stand for?", ["jquery","xml", "css"], "html"

              ),
              new Question(

                "which is javascript framework", ["laravel","django", "sass"], "React"

            ),
            new Question(

                "exentensible markup language standa for?", ["html","xml", "css"], "xml"

            ),
            new Question(

                "which is backend language", ["php","React", "html"], "php"

            ),
            new Question(

                "which is the best for artificial intelligence?", ["python","React", "javascript"], "python"

            ),

          ];

          let quiz = new QUIZ(questions);

           // display question

           displayQuestion();

           // ADD A COUNTDOWN

            let time = 10;
            let quizTimeInMinutes = time * 60 * 60;
            quizTime = quizTimeInMinutes / 60;

            let counting = document.getElementById("count-down");

             function startCountdown() {
                 let quizTimer = setInterval(function(){
                     if (quizTimer <=0){
                         clearInterval(quizTimer);
                         showScores();
                     }else{

                        quizTimer--;
                        let sec =  Math.floor(quizTimer % 60);
                        let min = Math.floor(quizTimer / 60) % 60;
                        counting.innerHTML = 'TIME: ${min} : ${sec}';

                     }
                 },1000)

             }

             startCountdown();