// Classe base per a tots els sanitaris de la clínica veterinària
class Sanitari {
  // Propietats privades comunes a tots els sanitaris
  #dni;
  #nom;
  #anyNaixement;
  #horaRegistre;
  #anysExperiencia;

  constructor(dni, nom, anyNaixement, horaRegistre, anysExperiencia) {
    // Inicialitzem les propietats privades
    this.#dni = dni;
    this.#nom = nom;
    this.#anyNaixement = anyNaixement;
    this.#horaRegistre = horaRegistre;
    this.#anysExperiencia = anysExperiencia;
  }

  // Getters per accedir a les propietats privades
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

  // Setter per modificar el nom i els anys d'experiència
  set nom(nom) {
    this.#nom = nom;
  }

  set anysExperiencia(anysExperiencia) {
    this.#anysExperiencia = anysExperiencia;
  }
}

// Classe derivada que hereta de Sanitari
class Veterinari extends Sanitari {
  // Propietats específiques dels veterinaris
  #especialitat;
  #capacitatsActives; // Capacitats que té actualment
  #capacitatsPrevies; // Capacitats que va tenir però ha oblidat
  #intervencions; // Casos clínics assignats

  constructor(
    dni,
    nom,
    anyNaixement,
    horaRegistre,
    anysExperiencia,
    especialitat
  ) {
    // Cridem el constructor de la classe pare
    super(dni, nom, anyNaixement, horaRegistre, anysExperiencia);
    this.#especialitat = especialitat;
    // Inicialitzem les llistes buides
    this.#capacitatsActives = [];
    this.#capacitatsPrevies = [];
    this.#intervencions = [];
  }

  // Getters i setters per a les propietats específiques del veterinari
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

  // Mètode per verificar si pot atendre un cas clínic
  potAtendreCasClinic(casclin) {
    const NUM_ANYS_EXPERIENCIA = 3; // Experiència mínima requerida
    let NUM_CAPACITATS = this.#capacitatsActives.length;

    // Ha de tenir suficient experiència i capacitats per la complexitat del cas
    if (
      this.anysExperiencia >= NUM_ANYS_EXPERIENCIA &&
      NUM_CAPACITATS >= casclin.complexitat
    ) {
      return true;
    }
    return false;
  }

  // Mètode toString bàsic
  toString() {
    return `El veterinari amb dni ${this.dni} i nom ${this.nom} nascut al any ${
      this.anyNaixement
    }, va registrarse el ${this.horaRegistre}, té ${
      this.anysExperiencia
    } anys d'experiència i té la especialitat en ${this.#especialitat}.`;
  }

  // Mètode toString amb informació extensa
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

// Classe derivada per als auxiliars veterinaris
class Auxiliar extends Sanitari {
  // Propietats específiques dels auxiliars
  #animalsAtesos; // Llista d'animals que ha atès
  #tasquesRealitzades; // Llista de tasques que ha realitzat

  constructor(dni, nom, anyNaixement, horaRegistre, anysExperiencia) {
    // Cridem el constructor de la classe pare
    super(dni, nom, anyNaixement, horaRegistre, anysExperiencia);
    // Inicialitzem les llistes buides
    this.#animalsAtesos = [];
    this.#tasquesRealitzades = [];
  }

  // Mètode per registrar l'atenció d'un animal
  atendreAnimal(animal) {
    this.#animalsAtesos.push(animal);
    return ` ha atès al animal ${animal}`;
  }

  // Mètode per registrar la realització d'una tasca
  realitzarTasca(tasca) {
    this.#tasquesRealitzades.push(tasca);
    return ` ha realitzat la tasca: ${tasca}`;
  }

  // Mètode toString bàsic
  toString() {
    return `El auxiliar veterinari amb dni ${this.dni} i nom ${this.nom} nascut al any ${this.anyNaixement}, va registrarse  ${this.horaRegistre} i té ${this.anysExperiencia} anys d'experiència.`;
  }

  // Mètode toString amb informació extensa
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
