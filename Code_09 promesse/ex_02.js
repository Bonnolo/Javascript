// ? Task 2: Create a guessing game.
let totalPoints = 0;
const enterNumber = () => {
  return new Promise((resolve, reject) => {
    // ? User story: User can enter a number
    const userNumber = Number(window.prompt("inserisci un numero da 1 a 6"));
    // ? User story: System pick a random number from 1 to 6
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    if (isNaN(userNumber)) {
      reject(new Error("Bisogna inserire un numero"));
    }
    let points;
    let result;
    // ? User story: If user number is equal to random number, give user 2 points
    if (userNumber === randomNumber) {
      points = 2;
      // ? User story: If user number is different from random number by 1,
      // ? give the user 1 points, otherwise give user 0 point.
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      points = 1;
    } else {
      points = 0;
    }
    totalPoints += points;
    result = {
      points: points,
      randomNumber: randomNumber,
      totalPoints: totalPoints,
    };
    resolve(result);
  });
};

// ? User story: User can decide to play the game as long as they want to

const continueGame = () => {
  return new Promise((resolve, reject) => {
    if (window.confirm("Vuoi continuare a giocare?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

const handleGuess = async () => {
  try {
    let result = await enterNumber();
    alert(
      `Hai ottenuto ${result.points} e il numero da indovinare era ${result.randomNumber}. Hai un totale di ${result.totalPoints} punti`
    );
    let continueOrNot = await continueGame();
    if (continueOrNot === true) {
      handleGuess();
    } else {
      alert("Game Over!");
    }
  } catch (error) {
    alert(error);
  }
};

const start = () => {
  handleGuess();
};

const button1 = document.querySelector(".one");
button1.addEventListener("click", () => {
  start();
});

const button2 = document.querySelector(".two");
button2.addEventListener("click", () => {
  handleGuess();
});
