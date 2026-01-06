class Sanitari {
  #dni;
  #nom;
  #anyNaixement;
  #horaRegistre;
  #anysExperiencia;

  constructor(dni, nom, anyNaixement, horaRegistre, anysExperiencia) {
    this.#dni = dni;
    this.#nom = nom;
    this.#anyNaixement = anyNaixement;
    this.#horaRegistre = horaRegistre;
    this.#anysExperiencia = anysExperiencia;
  }
  get dni() {
    return this.#dni;
  }
  get nom() {
    return this.#nom;
  }
  get anyNaixement() {
    return this.#anyNaixement;
  }
  get horaRegistre() {
    return this.#horaRegistre;
  }
  get anysExperiencia() {
    return this.#anysExperiencia;
  }
  set anysExperiencia(anysExperiencia) {
    this.#anysExperiencia = anysExperiencia;
  }
}

class Veterinari extends Sanitari {
  #especialitat;
  #capacitatsActives;
  #capacitatsPrevies;
  #intervencions;
  constructor(
    dni,
    nom,
    anyNaixement,
    horaRegistre,
    anysExperiencia,
    especialitat
  ) {
    super(dni, nom, anyNaixement, horaRegistre, anysExperiencia);
    this.#especialitat = especialitat;
    this.#capacitatsActives = [];
    this.#capacitatsPrevies = [];
    this.#intervencions = [];
  }

  get especialitat() {
    return this.#especialitat;
  }
  set especialitat(especialitat) {
    this.#especialitat = especialitat;
  }
  get capacitatsActives() {
    return this.#capacitatsActives;
  }
  get capacitatsPrevies() {
    return this.#capacitatsPrevies;
  }
  get intervencions() {
    return this.#intervencions;
  }

  aprendreCapacitat(capacitat) {
    const MAX_CAPACITATS = 2;
    if (this.#capacitatsActives.length < MAX_CAPACITATS) {
      this.#capacitatsActives.push(capacitat);
      return true;
    }
    return false;
  }

  oblidarCapacitat(capacitat) {
    const index = this.#capacitatsActives.indexOf(capacitat);
    if (index > -1) {
      this.#capacitatsPrevies.push(capacitat);
      this.#capacitatsActives.splice(index, 1);
      return true;
    }
    return false;
  }

  potAtendreCasClinic(casclin) {
    const NUM_ANYS_EXPERIENCIA = 3;
    let NUM_CAPACITATS = this.#capacitatsActives.length;
    if (
      this.anysExperiencia >= NUM_ANYS_EXPERIENCIA &&
      NUM_CAPACITATS >= casclin.complexitat
    ) {
      return true;
    }
    return false;
  }

  toString() {
    return `El veterinari amb dni ${this.dni} i nom ${this.nom} nascut al any ${
      this.anyNaixement
    }, va registrarse el ${this.horaRegistre}, té ${
      this.anysExperiencia
    } anys d'experiència i té la especialitat en ${this.#especialitat}.`;
  }
  toStringPlus() {
    return `El veterinari amb dni ${this.dni} i nom ${this.nom} nascut al any ${
      this.anyNaixement
    }, va registrarse el ${this.horaRegistre}, té ${
      this.anysExperiencia
    } anys d'experiència i té la especialitat en ${
      this.#especialitat
    }.<br> Capacitats actives: ${
      this.#capacitatsActives
    }<br> Capacitats oblidades: ${
      this.#capacitatsPrevies
    } <br> Casos clincs atesos: ${this.#intervencions} `;
  }
}

class Auxiliar extends Sanitari {
  #animalsAtesos;
  #tasquesRealitzades;
  constructor(dni, nom, anyNaixement, horaRegistre, anysExperiencia) {
    super(dni, nom, anyNaixement, horaRegistre, anysExperiencia);

    this.#animalsAtesos = [];
    this.#tasquesRealitzades = [];
  }

  atendreAnimal(animal) {
    this.#animalsAtesos.push(animal);
    return ` ha atès al animal ${animal}`;
  }
  realitzarTasca(tasca) {
    this.#tasquesRealitzades.push(tasca);
    return ` ha realitzat la tasca: ${tasca}`;
  }

  toString() {
    return `El auxiliar veterinari amb dni ${this.dni} i nom ${this.nom} nascut al any ${this.anyNaixement}, va registrarse  ${this.horaRegistre} i té ${this.anysExperiencia} anys d'experiència.`;
  }
  toStringPlus() {
    return `El auxiliar veterinari amb dni ${this.dni} i nom ${
      this.nom
    } nascut al any ${this.anyNaixement}, va registrarse  ${
      this.horaRegistre
    } i té ${
      this.anysExperiencia
    } anys d'experiència. <br> Els animals atesos son: ${
      this.#animalsAtesos
    }.<br> Les tasques realitzades son: ${this.#tasquesRealitzades}.`;
  }
}
