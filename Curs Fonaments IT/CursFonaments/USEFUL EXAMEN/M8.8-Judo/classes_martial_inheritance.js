// Classe base per a totes les persones de l'escola d'arts marcials
class Persona {
  // Propietats privades comunes a totes les persones
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

  set edat(edat) {
    this.#edat = edat;
  }
}

// Classe derivada que hereta de Persona
class Instructor extends Persona {
  // Propietats específiques dels instructors
  #estiloArteMarcial;
  #experiencia;
  #tecniquesDominades; // Tècniques que té actualment
  #tecniquesOlvidadas; // Tècniques que va tenir però ha oblidat
  #estudiantsEntrenats; // Estudiants assignats

  constructor(dni, nom, edat, estiloArteMarcial, experiencia) {
    // Cridem el constructor de la classe pare
    super(dni, nom, edat);
    this.#estiloArteMarcial = estiloArteMarcial;
    this.#experiencia = experiencia;
    // Inicialitzem les llistes buides
    this.#tecniquesDominades = [];
    this.#tecniquesOlvidadas = [];
    this.#estudiantsEntrenats = [];
  }

  // Getters i setters per a les propietats específiques de l'instructor
  get estiloArteMarcial() {
    return this.#estiloArteMarcial;
  }
  set estiloArteMarcial(estiloArteMarcial) {
    this.#estiloArteMarcial = estiloArteMarcial;
  }
  get experiencia() {
    return this.#experiencia;
  }
  set experiencia(experiencia) {
    this.#experiencia = experiencia;
  }
  get tecniquesDominades() {
    return this.#tecniquesDominades;
  }
  get tecniquesOlvidadas() {
    return this.#tecniquesOlvidadas;
  }
  get estudiantsEntrenats() {
    return this.#estudiantsEntrenats;
  }

  // Mètode per aprendre una nova tècnica
  aprendreTecnica(tecnica) {
    const MAX_TECNIQUES = 5; // Límit màxim de tècniques actives
    if (this.#tecniquesDominades.length < MAX_TECNIQUES) {
      this.#tecniquesDominades.push(tecnica);
      return true; // Èxit
    }
    return false; // No pot aprendre més tècniques
  }

  // Mètode per oblidar una tècnica
  oblidarTecnica(tecnica) {
    const index = this.#tecniquesDominades.indexOf(tecnica);
    if (index > -1) {
      // Mou la tècnica de dominades a oblidades
      this.#tecniquesOlvidadas.push(tecnica);
      this.#tecniquesDominades.splice(index, 1);
      return true; // Èxit
    }
    return false; // No tenia aquesta tècnica
  }

  // Mètode per verificar si pot ensenyar classes avançades
  potEnsenyarClassesAvançades() {
    const ANYS_EXPERIENCIA_MINIMA = 5; // Experiència mínima requerida
    if (this.#experiencia >= ANYS_EXPERIENCIA_MINIMA) {
      return true;
    }
    return false;
  }

  // Mètode entrenar específic per instructors
  entrenar() {
    return "L'instructor està ensenyant tècniques als estudiants";
  }

  // Mètode toString bàsic
  toString() {
    return `L'instructor amb dni ${this.dni} i nom ${this.nom} de ${
      this.edat
    } anys, especialista en ${this.#estiloArteMarcial} amb ${
      this.#experiencia
    } anys d'experiència.`;
  }

  // Mètode toString amb informació extensa
  toStringPlus() {
    return `L'instructor amb dni ${this.dni} i nom ${this.nom} de ${
      this.edat
    } anys, especialista en ${this.#estiloArteMarcial} amb ${
      this.#experiencia
    } anys d'experiència.<br> Tècniques dominades: ${
      this.#tecniquesDominades
    }<br> Tècniques oblidades: ${
      this.#tecniquesOlvidadas
    } <br> Estudiants entrenats: ${this.#estudiantsEntrenats} `;
  }
}

// Classe derivada per als estudiants
class Estudiant extends Persona {
  // Propietats específiques dels estudiants
  #nivell; // principiante, intermedio, avanzado
  #tecniquesAprenudes; // Llista de tècniques que ha après
  #torneusParticipats; // Llista de torneus on ha participat
  #calificacions; // Llista de calificacions obtingudes en torneus

  constructor(dni, nom, edat, nivell) {
    // Cridem el constructor de la classe pare
    super(dni, nom, edat);
    this.#nivell = nivell;
    // Inicialitzem les llistes buides
    this.#tecniquesAprenudes = [];
    this.#torneusParticipats = [];
    this.#calificacions = [];
  }

  // Getters i setters per a les propietats específiques de l'estudiant
  get nivell() {
    return this.#nivell;
  }
  set nivell(nivell) {
    this.#nivell = nivell;
  }
  get tecniquesAprenudes() {
    return this.#tecniquesAprenudes;
  }
  get torneusParticipats() {
    return this.#torneusParticipats;
  }
  get calificacions() {
    return this.#calificacions;
  }

  // Mètode per registrar la participació en un torneig
  participarTorneig(torneig, calificacio) {
    this.#torneusParticipats.push(torneig);
    this.#calificacions.push(calificacio);
    return ` ha participat al torneig ${torneig} amb calificació ${calificacio}`;
  }

  // Mètode per aprendre una tècnica
  aprendreTecnica(tecnica) {
    this.#tecniquesAprenudes.push(tecnica);
    return ` ha après la tècnica: ${tecnica}`;
  }

  // Mètode per calcular la calificació promedio
  calcularPromedioCalificacions() {
    if (this.#calificacions.length === 0) return 0;
    let suma = 0;
    for (let i = 0; i < this.#calificacions.length; i++) {
      suma += this.#calificacions[i];
    }
    return suma / this.#calificacions.length;
  }

  // Mètode entrenar específic per estudiants
  entrenar() {
    return "L'estudiant està practicant les tècniques apreses";
  }

  // Mètode toString bàsic
  toString() {
    return `L'estudiant amb dni ${this.dni} i nom ${this.nom} de ${
      this.edat
    } anys, amb nivell ${this.#nivell}.`;
  }

  // Mètode toString amb informació extensa
  toStringPlus() {
    return `L'estudiant amb dni ${this.dni} i nom ${this.nom} de ${
      this.edat
    } anys, amb nivell ${this.#nivell}. <br> Les tècniques apreses son: ${
      this.#tecniquesAprenudes
    }.<br> Els torneus on ha participat son: ${
      this.#torneusParticipats
    }.<br> Les calificacions obtingudes son: ${this.#calificacions}.`;
  }
}
