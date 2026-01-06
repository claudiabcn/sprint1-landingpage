class Persona {
  #dni;
  #nom;
  #edat;

  constructor(dni, nom, edat) {
    this.#dni = dni;
    this.#nom = nom;
    this.#edat = edat;
  }

  get dni() {
    return this.#dni;
  }
  get nom() {
    return this.#nom;
  }
  get edat() {
    return this.#edat;
  }
}
class Bomber extends Persona {
  #pes;
  #certificacions;
  #certificacionsRevocades;
  #incidents;
  constructor(dni, nom, edat, pes) {
    super(dni, nom, edat);
    this.#pes = pes;

    this.#certificacions = [];
    this.#certificacionsRevocades = [];
    this.#incidents = [];
  }

  get pes() {
    return this.#pes;
  }

  get certificacions() {
    return this.#certificacions;
  }
  get certificacionsRevocades() {
    return this.#certificacionsRevocades;
  }
  get incidents() {
    return this.#incidents;
  }

  aprendreLaCertificacio(certificacio) {
    const MAX_CERTIFICACIONS = 7; //
    if (this.#certificacions.length < MAX_CERTIFICACIONS) {
      this.#certificacions.push(certificacio);
    }
    if (this.#certificacions.length == MAX_CERTIFICACIONS) {
      this.#certificacions.splice(0, 1);
      this.#certificacions.push(certificacio);
    }
    return true;
  }

  ///per al excerici 6. TINDRIA UN ARRAY EXTRA UN PER LES CERTIFICACIONS OBLIDADES. AGAFARIA LA CERTIFICACIO QUE ELIMINO DEL ARRAY DE APRESES I LA POSARIA EN EL ARRAY DE OBLIDADES AMB UN PUSH. pero no se com agafaria la certificacio que llenço.... no tinc més temps per pensar .

  potAtendreIncident(incident) {
    const NUM_ANYS_EXPERIENCIA = 3;
    let NUM_CERTIFICACIONS = this.#certificacions.length;

    if (this.edat >= 18 && NUM_CERTIFICACIONS >= incident.severitat) {
      return true;
    }
    return false;
  }

  toString() {
    return `El bomber amb dni ${this.dni} i nom ${this.nom} edat ${
      this.edat
    }.<br> Certificacions actives: ${this.#certificacions} Incidents atesos: ${
      this.#incidents
    } `;
  }

  toStringIncidents() {
    return `El bomber amb dni ${this.dni} ha atés els següents incidents: ${
      this.#incidents
    } `;
  }
}

class Investigador extends Persona {
  #especialitat;
  #investigacions;

  constructor(dni, nom, edat, especialitat) {
    super(dni, nom, edat);

    this.#especialitat = especialitat;
    this.#investigacions = [];
  }
  get especialitat() {
    return this.#especialitat;
  }
  get investigacions() {
    return this.#investigacions;
  }
}
