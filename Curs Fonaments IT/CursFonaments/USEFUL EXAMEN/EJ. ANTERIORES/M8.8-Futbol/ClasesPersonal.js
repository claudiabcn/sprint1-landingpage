class Personal {
  #nom;
  #cognom;
  #edat;
  #antiguitat;

  constructor(nom, cognom, edat, antiguitat) {
    this.#nom = nom;
    this.#cognom = cognom;
    this.#edat = edat;
    this.#antiguitat = antiguitat;
  }
  get nom() {
    return this.#nom;
  }
  get cognom() {
    return this.#cognom;
  }
  get edat() {
    return this.#edat;
  }
  get antiguitat() {
    return this.#antiguitat;
  }
}

class Entrenador extends Personal {
  constructor(nom, cognom, edat, antiguitat) {
    super(nom, cognom, edat, antiguitat);
  }

  calcularSueldo() {
    const PLUS_RESULTATS = 5000;
    const BASE_SOU = 30000;

    return BASE_SOU + PLUS_RESULTATS;
  }
  toString() {
    return `El Entrenador ${this.nom} ${this.cognom} té ${this.edat} anys, porta ${this.antiguitat} anys d'antiguitat.`;
  }
}

class Fisio extends Personal {
  constructor(nom, cognom, edat, antiguitat) {
    super(nom, cognom, edat, antiguitat);
  }

  calcularSueldo() {
    const BASE_ANTIGUITAT = 5000;
    const BASE_SOU = 30000;

    return BASE_SOU + BASE_ANTIGUITAT * this.antiguitat;
  }

  toString() {
    return `El Fisio ${this.nom} ${this.cognom} té ${this.edat} anys, porta ${this.antiguitat} anys d'antiguitat.`;
  }
}
