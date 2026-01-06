class Guerrero extends Personaje {
  constructor(nombre) {
    super(nombre);
  }

  obtenerClase() {
    return "Guerrero";
  }

  habilidadEspecial() {
    return "Golpe Poderoso";
  }
}
