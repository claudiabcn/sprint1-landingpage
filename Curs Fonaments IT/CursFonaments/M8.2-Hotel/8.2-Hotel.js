class Hotel {
  #nombre;
  #habitaciones;
  #plantas;
  #superficie;

  constructor(nombre, habitaciones, plantas, superficie) {
    this.#nombre = nombre;
    this.#habitaciones = habitaciones;
    this.#plantas = plantas;
    this.#superficie = superficie;
  }
  get nombre() {
    return this.#nombre;
  }
  get habitaciones() {
    return this.#habitaciones;
  }
  get plantas() {
    return this.#plantas;
  }
  get superficie() {
    return this.#superficie;
  }

  set habitaciones(habitaciones) {
    this.#habitaciones = habitaciones;
  }
  set plantas(plantas) {
    this.#plantas = plantas;
  }
  set superficie(superficie) {
    this.#superficie = superficie;
  }

  calcularMantenimiento() {
    let personesTreballant;
    let costosPersones;
    const SOU = 1500;
    const HABITACIONES = 20;

    personesTreballant = Math.ceil(this.#habitaciones / HABITACIONES);
    costosPersones = personesTreballant * SOU;

    return (
      "Es necesitarán: " +
      personesTreballant +
      " persones i tindrà un cost mensual de: " +
      costosPersones +
      "€."
    );
  }

  toString() {
    return (
      "Hotel nombre: " +
      this.#nombre +
      ", número de habitaciones: " +
      this.#habitaciones +
      ", número de plantas: " +
      this.#plantas +
      ", superficie: " +
      this.#superficie
    );
  }
}
