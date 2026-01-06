function mostrarParidad() {

        let n1 = Number(prompt("Saber su paridad", "Introduce un número"));
        let resultado="";

        if (n1 % 2 == 0) {
                resultado = "Es par"
        }
        else {
                resultado = "No es par"}
        alert(resultado);
}