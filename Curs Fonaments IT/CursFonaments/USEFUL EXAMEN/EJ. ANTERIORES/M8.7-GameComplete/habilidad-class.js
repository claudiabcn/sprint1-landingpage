// habilidad.js


//* Clase que representa una habilidad aprendible en el juego
//* Sigue el principio KISS - solo tiene las propiedades esenciales


class Habilidad {
    
    //* Constructor simple con validación básica
    //* FAIL FAST: Si los parámetros no son válidos, mejor fallar temprano
    
    constructor(nombre, nivelMinimo) {
        
        //* EARLY RETURN: Validamos los parámetros al inicio
        
        if (!nombre || nivelMinimo < 1) {
            throw new Error("Datos de habilidad inválidos");
        }
        
        this.nombre = nombre;
        this.nivelMinimo = nivelMinimo;
    }

    
    //* Método toString personalizado para mostrar información útil
    //* KISS: Formato simple y directo
    
    toString() {
        return this.nombre + " (Nivel " + this.nivelMinimo + ")";
    }
}