class Equip {
  #nomequip;
  #presupost;
  #pais;
  jugadors;
  patrocinadors;
  personal;
  constructor(nomequip, presupost, pais) {
    this.#nomequip = nomequip;
    this.#presupost = presupost;
    this.#pais = pais;
    this.jugadors = [];
    this.patrocinadors = [];
    this.personal = [];
  }
  get nomequip() {
    return this.#nomequip;
  }
  get presupost() {
    return this.#presupost;
  }
  get pais() {
    return this.#pais;
  }

  set presupost(presupost) {
    this.#presupost = presupost;
  }

  toString() {
    return `El equip ${this.#nomequip} té un pressupost de ${
      this.#presupost
    } k€ i el seu país és ${this.#pais}.`;
  }
  mostraJugadors() {
    return `Els seus jugadors son:  ${this.jugadors}`;
  }
  mostraPatrocinadors() {
    return `Els seus patrocinadors son: ${this.patrocinadors}`;
  }
  mostraPersonal() {
    return `El seu personal son: ${this.personal}`;
  }
}

class Patrocinador {
  #nompatrocinador;
  #presupostpatrocinador;

  constructor(nompatrocinador, presupostpatrocinador) {
    this.#nompatrocinador = nompatrocinador;
    this.#presupostpatrocinador = presupostpatrocinador;
  }

  get nompatrocinador() {
    return this.#nompatrocinador;
  }
  get presupostpatrocinador() {
    return this.#presupostpatrocinador;
  }

  set presupostpatrocinador(presupostpatrocinador) {
    this.#presupostpatrocinador = presupostpatrocinador;
  }

  toString() {
    return `Patrocinador ${this.#nompatrocinador} amb presupost de ${
      this.#presupostpatrocinador
    }k€`;
  }
}

class Jugador {
  #nomjugador;
  #posicio;
  #valMercat;

  constructor(nomjugador, posicio, valMercat) {
    this.#nomjugador = nomjugador;
    this.#posicio = posicio;
    this.#valMercat = valMercat;
  }
  get nomjugador() {
    return this.#nomjugador;
  }
  get posicio() {
    return this.#posicio;
  }
  get valMercat() {
    return this.#valMercat;
  }

  set valMercat(valMercat) {
    this.#valMercat = valMercat;
  }

  toString() {
    return `Jugador ${this.#nomjugador} que es ${
      this.#posicio
    } amb valor al mercat de ${this.#valMercat}k€`;
  }
}
