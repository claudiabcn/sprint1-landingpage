function sumAll() {
        let number1 = parseInt(document.getElementById("n1").value);
        let number2 = parseInt(document.getElementById("n2").value);
        let summ = 0
        if (isNaN(number1) || isNaN(number2)) { alert("Introduce a valid number") }
        else {
                if (number1 < number2) {
                        for (let i = number1; i <= number2; i++) {
                                summ = summ + i;
                        }
                }
                else if (number1 > number2) {
                        for (let i = number2; i <= number1; i++) {
                                summ = summ + i;
                        }
                }
                else {
                        alert("The numbers are the same")
                }
        }
        document.getElementById("show").innerHTML = summ;
}

