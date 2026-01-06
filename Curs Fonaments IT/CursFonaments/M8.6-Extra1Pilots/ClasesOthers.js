class Escuderia {
  #nomesc;
  #presupuesto;
  #pais;
  cotxes;
  treballadors;
  constructor(nomesc, presupuesto, pais) {
    this.#nomesc = nomesc;
    this.#presupuesto = presupuesto;
    this.#pais = pais;
    this.cotxes = [];
    this.treballadors = [];
  }
  get nomesc() {
    return this.#nomesc;
  }
  get presupuesto() {
    return this.#presupuesto;
  }
  get pais() {
    return this.#pais;
  }

  set presupuesto(presupuesto) {
    this.#presupuesto = presupuesto;
  }

  toString() {
    return `La escuderia ${this.#nomesc} té un pressupost de ${
      this.#presupuesto
    } € i el seu país és ${this.#pais}.`;
  }
  mostraTreballadorsEsc() {
    return `Els seus treballadors son:  ${this.treballadors}`;
  }
  mostraCotxesEsc() {
    return `Els seus cotxes son: ${this.cotxes}`;
  }
}

class Cotxe {
  #potencia;
  #velocidadMaxima;
  #color;
  #preuMercat;
  constructor(potencia, velocidadMaxima, color, preuMercat) {
    this.#potencia = potencia;
    this.#velocidadMaxima = velocidadMaxima;
    this.#color = color;
    this.#preuMercat = preuMercat;
  }
  get potencia() {
    return this.#potencia;
  }
  get velocidadMaxima() {
    return this.#velocidadMaxima;
  }
  get color() {
    return this.#color;
  }
  get preuMercat() {
    return this.#preuMercat;
  }
  set potencia(potencia) {
    this.#potencia = potencia;
  }
  set velocidadMaxima(velocidadMaxima) {
    this.#velocidadMaxima = velocidadMaxima;
  }
  set preuMercat(preuMercat) {
    this.#preuMercat = preuMercat;
  }

  toString() {
    return `Cotxe ${this.#color} - ${this.#potencia}cv - ${
      this.#velocidadMaxima
    }km/h - ${this.#preuMercat}€.`;
  }
}
