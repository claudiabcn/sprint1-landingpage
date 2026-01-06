function GuessNumber() {

    let number1 = parseInt(document.getElementById('number1').value)
    let numberguess = Math.ceil((Math.random() * 10));

         while (numberguess !== number1) {

            number1 = parseInt(prompt("Guess the number", "Introduce a number"));
        }
   
    document.getElementById("show").innerHTML = "You guess the number! The number was " + numberguess;
} 