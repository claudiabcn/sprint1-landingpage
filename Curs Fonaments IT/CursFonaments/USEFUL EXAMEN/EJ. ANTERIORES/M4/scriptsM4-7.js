function Calcular() {

    let divisor = parseInt(document.getElementById("sor").value);
    let dividendo = parseInt(document.getElementById("ndo").value);
    let mensaje;

    if ((divisor >= 2 && divisor <= 7) && dividendo % divisor === 0) {

        mensaje = "Es múltiple"
    }
    else if (divisor < 2 || divisor > 7) {
        mensaje = "El divisor es incorrecto"
    }
    else 
    {
        mensaje = "No es múltiple"
    }

    document.getElementById("mostrar").innerHTML = mensaje;
}