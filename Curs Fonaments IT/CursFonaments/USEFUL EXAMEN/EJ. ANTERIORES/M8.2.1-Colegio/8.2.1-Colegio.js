class Colegio {
  #nombre;
  #alumnos;
  #profesores;
  #patio;

  constructor(nombre, alumnos, profesores, patio) {
    this.#nombre = nombre;
    this.#alumnos = alumnos;
    this.#profesores = profesores;
    this.#patio = patio;
  }
  get nombre() {
    return this.#nombre;
  }
  get alumnos() {
    return this.#alumnos;
  }
  get profesores() {
    return this.#profesores;
  }
  get patio() {
    return this.#patio;
  }

  set alumnos(alumnos) {
    this.#alumnos = alumnos;
  }
  set profesores(profesores) {
    this.#profesores = profesores;
  }
  set patio(patio) {
    this.#patio = patio;
  }

  calcularMonitores() {
    let personesTreballant;
    let costosPersones;
    const SOU = 1500;
    const alumnos = 10;

    personesTreballant = Math.ceil(this.#alumnos / alumnos);
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
      "Colegio nombre: " +
      this.#nombre +
      ", número de alumnos: " +
      this.#alumnos +
      ", número de profesores: " +
      this.#profesores +
      ", patio: " +
      this.#patio
    );
  }
}
