// Classe per representar un torneig
class Torneig {
  // Propietats privades del torneig
  #id;           // Identificador únic del torneig
  #nom;          // Nom descriptiu del torneig
  #dificultat;   // Nivell de dificultat (0-5)

  constructor(id, nom, dificultat) {
    // Inicialitzem les propietats privades
    this.#id = id;
    this.#nom = nom;
    this.#dificultat = dificultat;
  }

  // Getters per accedir a les propietats privades
  get id() {
    return this.#id;
  }
  get nom() {
    return this.#nom;
  }
  get dificultat() {
    return this.#dificultat;
  }

  // Setter per modificar la dificultat del torneig
  set dificultat(dificultat) {
    this.#dificultat = dificultat;
  }

  // Mètode per obtenir una representació en text del torneig
  toString() {
    return `Torneig ${this.#id} de nom: ${
      this.#nom
    } i nivell de dificultat ${this.#dificultat}`;
  }
}