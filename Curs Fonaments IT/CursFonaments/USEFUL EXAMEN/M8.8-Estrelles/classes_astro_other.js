class Missio {
  // Propietats privades de la missió
  #idMissio;
  #nomMissio;
  #dificultat;
  #vigent; // Nivell de dificultat (1-4)

  constructor(idMissio, nomMissio, dificultat, vigent) {
    // Inicialitzem les propietats privades
    this.#idMissio = idMissio;
    this.#nomMissio = nomMissio;
    this.#dificultat = dificultat;
    this.#vigent = vigent;
  }

  // Getters per accedir a les propietats privades
  get idMissio() {
    return this.#idMissio;
  }
  get nomMissio() {
    return this.#nomMissio;
  }
  get dificultat() {
    return this.#dificultat;
  }
  get vigent() {
    return this.#vigent;
  }

  // Mètode per obtenir una representació en text del cas clínic
  toString() {
    if (this.#vigent) {
      return `La missió ${this.#idMissio} de nom: ${
        this.#nomMissio
      }, nivell de dificultat: ${this.#dificultat} està vigent.`;
    } else {
      return `La missió ${this.#idMissio} de nom: ${
        this.#nomMissio
      }, nivell de dificultat: ${this.#dificultat} no està vigent.`;
    }
  }
}

class Investigacio {
  #nomInvestigacio;
  #camp;
  constructor(nomInvestigacio, camp) {
    this.#nomInvestigacio = nomInvestigacio;
    this.#camp = camp;
  }
  get nomInvestigacio() {
    return this.#nomInvestigacio;
  }
  get camp() {
    return this.#camp;
  }
  toString() {
    return `La investigació amb nom: ${
      this.#nomInvestigacio
    } té el camp d'investigació: ${this.#camp}.`;
  }
}
