const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const choiceButton = document.querySelectorAll("button");
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");

let userChoice;

choiceButton.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    userChoice = e.target.id;
    console.log(e.target.id);
    // userChoiceDisplay.textContent = e.target.id
    setTimeout(() => {
      userChoiceDisplay.textContent = userChoice;
      generateComputerChoice();
      userChoiceDisplay.style.animation = null;
      computerChoiceDisplay.style.animation = null;
    }, 2000);
    userChoiceDisplay.style.animation = "shakeAnimation 2s ease";
    computerChoiceDisplay.style.animation = "shakeAnimation 2s ease";
  })
);

const computerOption = ["Rock", "Paper", "Scissors"];

function generateComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  console.log(randomChoice);
  const computerChoice = computerOption[randomChoice];
  computerChoiceDisplay.textContent = computerChoice;

  if (computerChoice === userChoice) {
    resultDisplay.textContent = "It is a Draw";
    resultDisplay.style.color = "";
    return;
  }

  if (userChoice === "Rock") {
    if (computerChoice === "Scissors") {
      resultDisplay.textContent = "You Win";
      resultDisplay.style.color = "green";
      playerScore.textContent++;
      return;
    } else {
      resultDisplay.textContent = "You Lose";
      resultDisplay.style.color = "red";
      computerScore.textContent++;
      return;
    }
  }

  if (userChoice === "Paper") {
    if (computerChoice === "Scissors") {
      resultDisplay.textContent = "You Lose";
      resultDisplay.style.color = "red";
      computerScore.textContent++;
      return;
    } else {
      resultDisplay.textContent = "You Win";
      resultDisplay.style.color = "green";
      playerScore.textContent++;
      return;
    }
  }

  if (userChoice === "Scissors") {
    if (computerChoice === "Rock") {
      resultDisplay.textContent = "You Lose";
      resultDisplay.style.color = "red";
      computerScore.textContent++;
      return;
    } else {
      resultDisplay.textContent = "You Win";
      resultDisplay.style.color = "green";
      playerScore.textContent++;
      return;
    }
  }

  //   if (randomChoice === 0) {
  //     computerChoiceDisplay.textContent = "Rock";
  //   }
  //   if (randomChoice === 1) {
  //     computerChoiceDisplay.textContent = "Paper";
  //   }
  //   if (randomChoice === 2) {
  //     computerChoiceDisplay.textContent = "Scissors";
  //   }
}
