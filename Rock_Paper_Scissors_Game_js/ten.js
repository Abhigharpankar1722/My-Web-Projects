// 1)----> score tracking
let userScore = 0;
let compScore = 0;

// 2)----> accessing choices
const choices = document.querySelectorAll(".choice");   //rock,paper,scissor
const msg = document.querySelector("#msg");     //play your move

const userScorePara = document.querySelector("#user-score");    //score-board userscore
const compScorePara = document.querySelector("#comp-score");    //score-board compscore

// 5)----> generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  //   6)----> generating random index of array
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// 11)----> if game draw then update and print message
const drawGame = () => {
  msg.innerText = "Game Draw, Play Again!";
  msg.style.backgroundColor = "#081b31";
};

// 9)----> if user win then update the score
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // 10)----> if computer win then update the score
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // 4)----> generate computer choice
  const compChoice = genCompChoice();

  //   7)----> comparing userchoice and computerchoice
  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock , scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    // 8)----> show winner and variable passing in showwinner
    showWinner(userWin, userChoice, compChoice);
  }
};

// 3)----> adding event listeners on choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
