function traduce() {

    let numer = parseInt(document.getElementById("n1").value)
    let decenas = Math.floor(numer / 10);
    let unidades = numer % 10;
    let decenasTexto = "";
    let unidadesTexto = "";
    let mensaje;

    if (numer < 0 || numer > 99) {
        mensaje = "Número fuera de rango";
    }

    else if (numer <= 15) {

        switch (numer) {
            case 0:
                mensaje = "cero";
                break;
            case 1:
                mensaje = "uno";
                break;
            case 2:
                mensaje = "dos";
                break;
            case 3:
                mensaje = "tres";
                break;
            case 4:
                mensaje = "cuatro";
                break;
            case 5:
                mensaje = "cinco";
                break;
            case 6:
                mensaje = "seis";
                break;
            case 7:
                mensaje = "siete";
                break;
            case 8:
                mensaje = "ocho";
                break;
            case 9:
                mensaje = "nueve";
                break;
            case 10:
                mensaje = "diez";
                break;
            case 11:
                mensaje = "once";
                break;
            case 12:
                mensaje = "doce";
                break;
            case 13:
                mensaje = "trece";
                break;
            case 14:
                mensaje = "catorce";
                break;
            case 15:
                mensaje = "quince";
                break;
        }
    }

    else if (numer < 20) {

        switch (unidades) {
            case 6:
                unidadesTexto = "seis";
                break;
            case 7:
                unidadesTexto = "siete";
                break;
            case 8:
                unidadesTexto = "ocho";
                break;
            case 9:
                unidadesTexto = "nueve";
                break;
        }
        switch (decenas) {
            case 1:
                mensaje = "dieci" + unidadesTexto;
                break;
        }
    }

    else if (numer < 30 && numer != 20) {

        switch (unidades) {
            case 1:
                unidadesTexto = "uno";
                break;
            case 2:
                unidadesTexto = "dos";
                break;
            case 3:
                unidadesTexto = "tres";
                break;
            case 4:
                unidadesTexto = "cuatro";
                break;
            case 5:
                unidadesTexto = "cinco";
                break;
            case 6:
                unidadesTexto = "seis";
                break;
            case 7:
                unidadesTexto = "siete";
                break;
            case 8:
                unidadesTexto = "ocho";
                break;
            case 9:
                unidadesTexto = "nueve";
                break;
        }
        switch (decenas) {
            case 2:
            decenasTexto = "veinti" + unidadesTexto;
            mensaje = decenasTexto; 
            break;
        }
        
    }
    else if (numer === 20) {
        mensaje = "veinte";
    }
    else if (numer < 100) {

        switch (decenas) {
            case 2:
                decenasTexto = "veinte";
                break;
            case 3:
                decenasTexto = "treinta";
                break;
            case 4:
                decenasTexto = "cuarenta";
                break;
            case 5:
                decenasTexto = "cincuenta";
                break;
            case 6:
                decenasTexto = "sesenta";
                break;
            case 7:
                decenasTexto = "setenta";
                break;
            case 8:
                decenasTexto = "ochenta";
                break;
            case 9:
                decenasTexto = "noventa";
                break;
        }

        switch (unidades) {

            case 1:
                unidadesTexto = "uno";
                break;
            case 2:
                unidadesTexto = "dos";
                break;
            case 3:
                unidadesTexto = "tres";
                break;
            case 4:
                unidadesTexto = "cuatro";
                break;
            case 5:
                unidadesTexto = "cinco";
                break;
            case 6:
                unidadesTexto = "seis";
                break;
            case 7:
                unidadesTexto = "siete";
                break;
            case 8:
                unidadesTexto = "ocho";
                break;
            case 9:
                unidadesTexto = "nueve";
                break;
        }
    }

    
    
    if (numer >= 30 && numer <100) {
    if (unidades === 0) {
        mensaje = decenasTexto;
    } else {
        mensaje = decenasTexto + " y " + unidadesTexto;
    }
  
}
    
document.getElementById("mostrar").innerHTML = mensaje;
}