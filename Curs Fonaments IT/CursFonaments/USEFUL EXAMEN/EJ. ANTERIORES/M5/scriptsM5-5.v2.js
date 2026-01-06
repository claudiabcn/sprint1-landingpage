
const becados = []
const pagadores = []

function mostrarDatos() {
    let titulo = document.getElementById("titulo").value;
    let paro = document.getElementById("paro").value;
    let edad = parseInt(document.getElementById("edad").value);
    let nombre = prompt("Pon tu nombre:");
    
    if ((edad > 18 && titulo === "si") || paro === "si") {
        if (becados.length < 5) {
            
            becados.push(nombre);
            alert("Tens beca");
        } else {
            alert("No queden beques");
        }
    } else {
        pagadores.push(nombre);
        alert("No tens beca");
    }
    if (becados.length === 5) {
        document.getElementById("mostrarbec").innerHTML = "Les beques son per: " + becados + ". I els que no tenen beca: " + pagadores;
    }
}