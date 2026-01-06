// Classe base per a tots els Personas de la clínica veterinària
class Persona {
  // Propietats privades comunes a tots els Personas
  #dni;
  #nom;
  #edat;

  constructor(dni, nom, edat) {
    // Inicialitzem les propietats privades
    this.#dni = dni;
    this.#nom = nom;
    this.#edat = edat;
  }

  // Getters per accedir a les propietats privades
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

// Classe derivada que hereta de Persona
class Astronauta extends Persona {
  // Propietats específiques dels Astronautas
  #pes;
  #capacitatsActives; // Capacitats que té actualment
  #capacitatsPrevies; // Capacitats que va tenir però ha oblidat
  #missions; // Missions assignats

  constructor(dni, nom, edat, pes) {
    // Cridem el constructor de la classe pare
    super(dni, nom, edat);
    this.#pes = pes;
    // Inicialitzem les llistes buides
    this.#capacitatsActives = [];
    this.#capacitatsPrevies = [];
    this.#missions = [];
  }

  // Getters i setters per a les propietats específiques del Astronauta
  get pes() {
    return this.#pes;
  }
  get capacitatsActives() {
    return this.#capacitatsActives;
  }
  get capacitatsPrevies() {
    return this.#capacitatsPrevies;
  }
  get missions() {
    return this.#missions;
  }

  // Mètode per aprendre una nova capacitat
  aprendreCapacitat(capacitat) {
    const MAX_CAPACITATS = 2; // Límit màxim de capacitats actives
    if (this.#capacitatsActives.length < MAX_CAPACITATS) {
      this.#capacitatsActives.push(capacitat);
      return true; // Èxit
    }
    return false; // No pot aprendre més capacitats
  }

  // Mètode per oblidar una capacitat
  oblidarCapacitat(capacitat) {
    const index = this.#capacitatsActives.indexOf(capacitat);
    if (index > -1) {
      // Mou la capacitat de actives a prèvies
      this.#capacitatsPrevies.push(capacitat);
      this.#capacitatsActives.splice(index, 1);
      return true; // Èxit
    }
    return false; // No tenia aquesta capacitat
  }

  // Mètode per verificar si pot fer una missió
  potFerMissio(missio) {
    let NUM_CAPACITATS = this.#capacitatsActives.length;

    // Ha de tenir suficient experiència i capacitats per la dificultat de la missió
    if (NUM_CAPACITATS >= missio.dificultat) {
      return true;
    }
    return false;
  }

  // Mètode toString bàsic
  toString() {
    return `El Astronauta amb dni: ${this.dni}, té nom: ${this.nom}, edat: ${this.edat} anys i pes: ${this.pes}.`;
  }

  // Mètode toString amb informació extensa
  toStringPlus() {
    return `El Astronauta amb dni: ${this.dni}, té nom: ${this.nom}, edat: ${
      this.edat
    } anys i pes: ${this.pes}.<br> Capacitats actives: ${
      this.#capacitatsActives
    }<br> Capacitats oblidades: ${
      this.#capacitatsPrevies
    } <br> Missions realitzades: ${this.#missions} `;
  }
}

// Classe derivada per als Cientifics
class Cientific extends Persona {
  #especialitat;
  #investigacions = []; // Llista d'animals que ha atès

  constructor(dni, nom, edat, especialitat) {
    // Cridem el constructor de la classe pare
    super(dni, nom, edat);
    // Inicialitzem les llistes buides
    this.#especialitat = especialitat;
    this.#investigacions = [];
  }
  get especialitat() {
    return this.#especialitat;
  }
  get investigacions() {
    return this.#investigacions;
  }

  // Mètode per assignar una investigació
  investigacioAssignada(investigacio) {
    this.#investigacions.push(investigacio);
    return ` se li ha assignat aquesta investigació: ${investigacio}`;
  }

  // Mètode toString bàsic
  toString() {
    return `El Cientific amb dni ${this.dni}, té nom ${this.nom}, edat ${
      this.edat
    }, i especialització en ${this.#especialitat}.`;
  }

  // Mètode toString amb informació extensa
  toStringPlus() {
    return `El Cientific amb dni ${this.dni}, té nom ${this.nom}, edat ${
      this.edat
    }, i especialització en ${
      this.#especialitat
    }. <br>  Les seves investigacions son: ${this.#investigacions}.`;
  }
}
