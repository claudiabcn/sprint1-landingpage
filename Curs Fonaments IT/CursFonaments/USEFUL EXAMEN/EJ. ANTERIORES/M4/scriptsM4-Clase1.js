function mostrarPrecio() {


        let edad = parseInt(document.getElementById("edad").value);
        let precio;

        if ((edad < 0) || (edad > 120)) {
                precio = "Edad incorrecta";
        } else {
                if (edad > 4) {
                        precio = "Gratis";
                } else if (edad > 17) {
                        precio = "5 euros";
                } else if (edad > 64) {
                        precio = "10 euros";
                } else (edad > 64); {
                        precio = "7 euros";
                }
        }

        document.getElementById("mostrar").innerHTML = precio;

}