const readline = require("readline");

const randomNumber = Math.round(Math.random() * 100);
let numberOfLife = 5;
let count = 1;
const rl = readline.createInterface(process.stdin, process.stdout);
const regExp = /[0-9]/;

//Game loop
const onAnswer = (answer) => {
  //check if the input is valid
  if (Number(answer) < 0 || Number(answer) > 100 || !answer || isNaN(answer)) {
    rl.question(
      "I don't understand your answer...Can you repeat please? try a number between 0 and 100 included) ",
      onAnswer
    );
  } else {
    if (Number(answer) > randomNumber) {
      numberOfLife--;
      count++;

      if (numberOfLife === 0) {
        console.log("\nOh NO!     You LOSE!!!\n\n");
        rl.question(
          "Do you want to play another time? ('yes'/'no'",
          startTheGame
        );
      }

      rl.question(
        `\nThe number is LOWER!\n\nYou have ${numberOfLife} lives left.\n\nWhat's the number then?`,
        onAnswer
      );
    } else if (Number(answer) < randomNumber) {
      numberOfLife--;
      count++;

      if (numberOfLife === 0) {
        console.log("\nOh NO!     You LOSE!!!\n\n");
        rl.question(
          "Do you want to play another time? ('yes'/'no'",
          startTheGame
        );
      }

      rl.question(
        `\nThe number is BIGGER!\n\nYou have ${numberOfLife} lives left.\n\nWhat's the number then?`,
        onAnswer
      );
    } else {
      console.log(`\nWELL DONE!     you WIN in ${count} times!!!\n\n`);
      rl.question(
        "Do you want to play another time? ('yes'/'no'",
        startTheGame
      );
    }
  }
};

//choice of the diificulty
const difficultyChoice = (answer) => {
  //check the answer
  if (answer !== "easy" && answer !== "medium" && answer !== "hard") {
    rl.question(
      "I don't understand your answer...Can you repeat please? (answer 'easy', 'medium', or 'hard') ",
      difficultyChoice
    );
  } else {
    switch (answer) {
      case "easy":
        numberOfLife = 10;
        break;
      case "medium":
        numberOfLife = 5;
        break;
      default:
        numberOfLife = 3;
    }
    console.log(
      `\n\nLet's go! \n\nThe Number is between 0 and 100 included: \n\nGOOD LUCK! ;\n\nYou have ${numberOfLife} lives.\n`
    );

    rl.question("What's the number? ", onAnswer);
  }
};

// game start
const startTheGame = (answer) => {
  //check the answer
  if (answer !== "no" && answer !== "yes") {
    rl.question(
      "\nI don't understand your answer...Can you repeat please? (answer 'yes' or 'no') ",
      startTheGame
    );
  } else {
    if (answer === "no") {
      console.log("See you later, bye!");
      rl.close();
    } else if (answer === "yes") {
      rl.question(
        "\nWhat difficulty do you choose: easy, medium or hard?",
        difficultyChoice
      );
    }
  }
};

rl.question("Do you want to play? ('yes' or 'no') ", startTheGame);
