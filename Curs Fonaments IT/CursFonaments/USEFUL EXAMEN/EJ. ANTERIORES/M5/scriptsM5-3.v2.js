function GuessNumber() {

    let number1 = Number(prompt("Guess the number", "Introduce a number"));
    let numberguess = Math.ceil((Math.random() * 10));


    if (isNaN(number1) || number1 <= 0 || number1 > 10) { alert("Introduce a valid number") }
    else {
        do { number1 = Number(prompt("Guess the number", "Introduce a number"));}

        while (numberguess != number1) 

                      }
    document.getElementById("show").innerHTML = "You guess the number! The number was " + numberguess;
}