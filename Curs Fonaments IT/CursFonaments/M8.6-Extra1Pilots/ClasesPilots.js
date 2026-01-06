class Treballador {
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

  calcularSueldo() {
    const BASE_ANTIGUITAT = 10000;
    let souBase = 50000;
    return souBase + BASE_ANTIGUITAT * this.antiguitat;
  }
}

class Pilot extends Treballador {
  #altura;
  #pes;

  constructor(nom, cognom, edat, antiguitat, altura, pes) {
    super(nom, cognom, edat, antiguitat);
    this.#altura = altura;
    this.#pes = pes;
  }

  get altura() {
    return this.#altura;
  }
  get pes() {
    return this.#pes;
  }

  set altura(altura) {
    this.#altura = altura;
  }
  set pes(pes) {
    this.#pes = pes;
  }

  calcularSueldo() {
    const PERILLOSITAT = 50000;
    let souBase = super.calcularSueldo();
    return PERILLOSITAT + souBase;
  }
  toString() {
    return `El Pilot ${this.nom} ${this.cognom} té ${this.edat} anys, porta ${
      this.antiguitat
    } anys d'antiguitat, medeix ${this.#altura} cm i pesa ${this.#pes} kilos.`;
  }
}

class Mecanic extends Treballador {
  #teEstudis;
  constructor(nom, cognom, edat, antiguitat, teEstudis) {
    super(nom, cognom, edat, antiguitat);
    this.#teEstudis = teEstudis;
  }

  get teEstudis() {
    return this.#teEstudis;
  }
  set teEstudis(teEstudis) {
    this.#teEstudis = teEstudis;
  }
  toString() {
    if (this.#teEstudis) {
      return `El Mecànic ${this.nom} ${this.cognom} té ${this.edat} anys, porta ${this.antiguitat} anys d'antiguitat i té estudis.`;
    } else {
      return `El Mecànic ${this.nom} ${this.cognom} té ${this.edat} anys, porta ${this.antiguitat} anys d'antiguitat i no té estudis.`;
    }
  }
}
