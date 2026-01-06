class Incident {
  #idCC;
  #nom;
  #severitat;

  constructor(idCC, nom, severitat) {
    this.#idCC = idCC;
    this.#nom = nom;
    this.#severitat = severitat;
  }

  get idCC() {
    return this.#idCC;
  }
  get nom() {
    return this.#nom;
  }
  get severitat() {
    return this.#severitat;
  }

  set severitat(severitat) {
    this.#severitat = severitat;
  }

  toString() {
    return `Incident ${this.#idCC} de nom: ${this.#nom} i nivell de severitat ${
      this.#severitat
    }`;
  }
}
