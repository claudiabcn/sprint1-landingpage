// objeto.js


//* Clase que representa items equipables del juego
//* DRY: Toda la lógica de verificación está centralizada aquí


class Objeto {
    
    //* Constructor con parámetro opcional para clase requerida
    //* KISS: Estructura simple con valores por defecto claros
    
    constructor(nombre, tipo, nivelMinimo, claseRequerida = null) {
        
        //* FAIL FAST: Validación inmediata de parámetros
        
        if (!nombre || !tipo || nivelMinimo < 1) {
            throw new Error("Datos de objeto inválidos");
        }
        
        this.nombre = nombre;
        this.tipo = tipo;
        this.nivelMinimo = nivelMinimo;
        this.claseRequerida = claseRequerida;
    }

    
    //* Verifica si un personaje puede usar este objeto
    //* EARLY RETURN: Retornamos tan pronto como sea posible
    
    puedeSerUsadoPor(personaje) {
        
        //* Primera verificación: nivel mínimo
        
        if (personaje.nivel < this.nivelMinimo) {
            return false;
        }
        
        
        //* Segunda verificación: clase requerida (si aplica)
        //* Si no hay clase requerida, cualquiera puede usarlo
        
        if (this.claseRequerida && personaje.constructor.name !== this.claseRequerida) {
            return false;
        }
        
        
        //* Si llegamos aquí, todas las verificaciones pasaron
        
        return true;
    }

    
    //* Representación en texto del objeto
    //* DRY: Un solo lugar para formatear la información del objeto
    
    toString() {
        let descripcion = this.nombre + " (" + this.tipo + ", Nivel " + this.nivelMinimo;
        
        
        //* Solo añadimos información de clase si es relevante
        
        if (this.claseRequerida) {
            descripcion += ", Solo " + this.claseRequerida;
        }
        
        descripcion += ")";
        return descripcion;
    }
}