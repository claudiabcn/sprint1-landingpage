function GuessNumber() {
  let number1;
  let numberguess = Math.ceil(Math.random() * 10);
  let trials = 0;
  const maxTrials = 5;

  do {
    number1 = Number(prompt("Guess the number", "Introduce a number"));
    if (number1 > 10 || number1 < 1) {
      alert("The number must be between 1 and 10");
      trials = trials;
    } else if (number1 < numberguess) {
      alert("The number must be bigger");
      trials = trials + 1;
    } else if (number1 > numberguess) {
      alert("The number must be smaller");
      trials = trials + 1;
    }
  } while (numberguess != number1 && trials < maxTrials);

  if (numberguess == number1) {
    document.getElementById("show").innerHTML =
      "You guess the number! The number was " +
      numberguess +
      " and you tried " +
      (trials + 1) +
      " times.";
  } else {
    document.getElementById("show").innerHTML =
      "You don't guess the number! The number was " +
      numberguess +
      " and you tried 5 times";
  }
}
