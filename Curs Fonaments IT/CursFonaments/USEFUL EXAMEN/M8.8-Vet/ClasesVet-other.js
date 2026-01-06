class CasClinic {
  #idCC;
  #nom;
  #complexitat;

  constructor(idCC, nom, complexitat) {
    this.#idCC = idCC;
    this.#nom = nom;
    this.#complexitat = complexitat;
  }
  get idCC() {
    return this.#idCC;
  }
  get nom() {
    return this.#nom;
  }
  get complexitat() {
    return this.#complexitat;
  }
  set complexitat(complexitat) {
    this.#complexitat = complexitat;
  }

  toString() {
    return `Cas clínic ${this.#idCC} de nom: ${
      this.#nom
    } i nivell de complexitat ${this.#complexitat}`;
  }
}
