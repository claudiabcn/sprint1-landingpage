class Objeto {
  constructor(nombre, tipo, nivelMinimo, claseRequerida = null) {
    //* Validación y normalización de parámetros

    this.nombre = nombre.trim();
    this.tipo = tipo.trim();
    this.nivelMinimo = nivelMinimo;
    this.claseRequerida = claseRequerida ? claseRequerida.trim() : null;
  }

  //* Verifica si un personaje puede usar este objeto

  puedeSerUsadoPor(personaje) {
    //* Verificación de nivel mínimo

    if (personaje.nivel < this.nivelMinimo) {
      return false;
    }

    //* Verificación de clase requerida (si aplica)

    if (
      this.claseRequerida &&
      personaje.obtenerClase() !== this.claseRequerida
    ) {
      return false;
    }

    return true;
  }

  toString() {
    let descripcion =
      this.nombre + " (" + this.tipo + ", Nivel " + this.nivelMinimo;

    if (this.claseRequerida) {
      descripcion += ", Solo " + this.claseRequerida;
    }

    descripcion += ")";
    return descripcion;
  }
}
