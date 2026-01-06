function showArray() {
    let number = parseInt(document.getElementById("n1").value);
    const words = [];
    let shownwords = ""

    if (isNaN(number) || number <= 0) { alert("Introduce a valid number") }
    else {
        for (let i = 0; i < number; i++) {
            let word = prompt("Insert word " + (i + 1));
            words.push(word);
        }
        for (let i = 0; i < words.length; i++) {

            shownwords = shownwords + words[i] + ", ";
        }
document.getElementById("show").innerHTML = shownwords;
    }
    
}