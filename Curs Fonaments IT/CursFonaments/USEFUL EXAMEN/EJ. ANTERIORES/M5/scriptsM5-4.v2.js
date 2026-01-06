function GuessNumber() {

    let number1;
    let numberguess = Math.ceil((Math.random() * 10));
    let trials = 0;
    const maxTrials = 5;
    do {
        number1 = Number(prompt("Guess the number", "Introduce a number"));
        trials = trials + 1;
        if (number1<numberguess){
            alert("The number must be bigger")
        } else if (number1>numberguess) {
            alert("The number must be smaller")
        }
    }
    while (numberguess != number1 && trials < maxTrials); 

    if (numberguess == number1) {
        document.getElementById("show").innerHTML = "You guess the number! The number was " + numberguess + " and you tried " + trials + " times.";
    }
     else {
        document.getElementById("show").innerHTML = "You don't guess the number! The number was " + numberguess + " and you tried more 5 times";
    }
}