class Habilidad {
  constructor(nombre, nivelMinimo) {
    //* Validamos y normalizamos los parámetros

    this.nombre = nombre.trim(); // Eliminamos espacios extra
    this.nivelMinimo = nivelMinimo;
  }

  toString() {
    return this.nombre + " (Nivel " + this.nivelMinimo + ")";
  }
}
