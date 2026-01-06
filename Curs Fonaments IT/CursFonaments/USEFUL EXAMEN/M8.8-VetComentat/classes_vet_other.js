// Classe per representar un cas clínic
class CasClinic {
  // Propietats privades del cas clínic
  #idCC;           // Identificador únic del cas
  #nom;            // Nom descriptiu del cas
  #complexitat;    // Nivell de complexitat (1-4)

  constructor(idCC, nom, complexitat) {
    // Inicialitzem les propietats privades
    this.#idCC = idCC;
    this.#nom = nom;
    this.#complexitat = complexitat;
  }

  // Getters per accedir a les propietats privades
  get idCC() {
    return this.#idCC;
  }
  get nom() {
    return this.#nom;
  }
  get complexitat() {
    return this.#complexitat;
  }

  // Setter per modificar la complexitat del cas
  set complexitat(complexitat) {
    this.#complexitat = complexitat;
  }

  // Mètode per obtenir una representació en text del cas clínic
  toString() {
    return `Cas clínic ${this.#idCC} de nom: ${
      this.#nom
    } i nivell de complexitat ${this.#complexitat}`;
  }
}