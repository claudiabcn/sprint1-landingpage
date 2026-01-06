class Ordenador {
  #marca;
  #modelo;
  #procesador;
  #ram;
  #discoDuro;
  constructor(marca, modelo, procesador, ram, discoDuro) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#procesador = procesador;
    this.#ram = ram;
    this.#discoDuro = discoDuro;
  }
  get marca() {
    return this.#marca;
  }
  get modelo() {
    return this.#modelo;
  }
  get procesador() {
    return this.#procesador;
  }
  get ram() {
    return this.#ram;
  }
  get discoDuro() {
    return this.#discoDuro;
  }

  set procesador(procesador) {
    this.#procesador = procesador;
  }
  set ram(ram) {
    this.#ram = ram;
  }
  set discoDuro(discoDuro) {
    this.#discoDuro = discoDuro;
  }

  executar(programa) {
    return "S'està executant el " + programa;
  }

  toString() {
    return (
      "Ordenador marca: " +
      this.#marca +
      ", modelo: " +
      this.#modelo +
      ", procesador: " +
      this.#procesador +
      ", ram: " +
      this.#ram +
      " disco duro: " +
      this.#discoDuro
    );
  }
}
