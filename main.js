const readlineSync = require("readline-sync");

let score = 0;

let highScores = [
  {
    name: "Abc",
    score: 3,
  },
  {
    name: "Xyz",
    score: 2,
  }
]

let questions = [
  {
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? ",
    answer: "2008"
  },
  {
    question: "What is Captain America’s shield made of? ",
    answer: "Vibranium"
  },
  {
    question: "Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet? ",
    answer: "Loki"
  },
  {
    question: "About which city do Hawkeye and Black Widow often reminisce? ",
    answer: "Budapest"
  },
  {
    question: "What animal does Darren Cross unsuccessfully shrink in the Ant-Man? ",
    answer: "Sheep"
  },
]


 var userName = readlineSync.question("What's your name? ");

console.log(userName + ", welcome to HOW WELL DO YOU KNOW MARVEL MOVIES?");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are right!");
    score++;
    
  } else {
    console.log("You are wrong!");   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

for (let i=0; i<questions.length; i++) {
    play(questions[i].question, questions[i].answer)
  }


  console.log("Your score: ", score);

  console.log("High scores:");

  for(let i = 0; i < highScores.length; i++){
    console.log(highScores[i].name +": " + highScores[i].score)
  }


  console.log("If you have beaten the high score, send me  ascreenshot of your score, I will update it")