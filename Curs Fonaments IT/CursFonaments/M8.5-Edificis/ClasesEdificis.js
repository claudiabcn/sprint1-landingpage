class Edifici {
  #nom;
  #plantes;
  #superficie;

  constructor(nom, plantes, superficie) {
    this.#nom = nom;
    this.#plantes = plantes;
    this.#superficie = superficie;
  }
  get nom() {
    return this.#nom;
  }
  get plantes() {
    return this.#plantes;
  }
  get superficie() {
    return this.#superficie;
  }

  set plantes(plantes) {
    this.#plantes = plantes;
  }
  set superficie(superficie) {
    this.#superficie = superficie;
  }
  netejar() {
    const DIES_MES = 30;
    const TEMPS = 1;
    const AREA = 5;
    let tempsSuperficie = (this.superficie * 1) / 5;
    let tempsPlantes = (this.plantes - 1) * 0.5;
    let costMensualNeteja = (tempsPlantes + tempsSuperficie) * 1 * DIES_MES;

    return costMensualNeteja;
  }
}

class Hotel extends Edifici {
  #habitacions;
  constructor(nom, plantes, superficie, habitacions) {
    super(nom, plantes, superficie);
    this.#habitacions = habitacions;
  }
  get habitacions() {
    return this.#habitacions;
  }
  set habitacions(habitacions) {
    this.#habitacions = habitacions;
  }
  serveiHabitacions() {
    const SOU = 1000;
    const HABITACIONES = 20;
    let personesTreballant = Math.ceil(this.#habitacions / HABITACIONES);
    let costosPersones = personesTreballant * SOU;

    return (
      "Es necesitarán: " +
      personesTreballant +
      " persones i tindrà un cost mensual de: " +
      costosPersones +
      "€."
    );
  }

  costVigilancia() {
    const MAX_AREA = 1000;
    const SOU = 1300;
    const PLUS = 500;
    let vigilants = Math.ceil(this.superficie / MAX_AREA);
    let costVigilar = vigilants * (PLUS + SOU);

    return (
      "Es necesitarán: " +
      vigilants +
      " vigilants i costarà " +
      costVigilar +
      " €."
    );
  }
  toString() {
    return (
      "Edifici : " +
      this.nom +
      ", plantes: " +
      this.plantes +
      ", superficie: " +
      this.superficie +
      ", habitacions: " +
      this.#habitacions
    );
  }
}

class Hospital extends Edifici {
  #malalts;
  constructor(nom, plantes, superficie, malalts) {
    super(nom, plantes, superficie);
    this.#malalts = malalts;
  }
  get malalts() {
    return this.#malalts;
  }
  set malalts(malalts) {
    this.#malalts = malalts;
  }

  repartirDinar() {
    return "Es necesitarán: " + this.#malalts + " racions.";
  }

  costVigilancia() {
    const MAX_AREA = 1000;
    const SOU = 1300;
    let vigilants = Math.ceil(this.superficie / MAX_AREA);
    let costVigilar = vigilants * SOU;

    return (
      "Es necesitarán: " +
      vigilants +
      " vigilants i costarà " +
      costVigilar +
      " €."
    );
  }
  toString() {
    return (
      "Edifici : " +
      this.nom +
      ", plantes: " +
      this.plantes +
      ", superficie: " +
      this.superficie +
      ", malalts: " +
      this.#malalts
    );
  }
}

class Cinema extends Edifici {
  #aforament;

  constructor(nom, plantes, superficie, aforament) {
    super(nom, plantes, superficie);
    this.#aforament = aforament;
  }

  get aforament() {
    return this.#aforament;
  }
  set aforament(aforament) {
    this.#aforament = aforament;
  }

  projectarSessio(assistents, preuEntrada) {
    let cost = preuEntrada * assistents;
    let costMax = preuEntrada * this.#aforament;
    if (this.#aforament >= assistents) {
      return "S'ha recaptat: " + cost + "€.";
    } else {
      return `S'ha recaptat: ${costMax} €.`;
    }
  }

  costVigilancia() {
    const MAX_AREA = 3000;
    const SOU = 1300;
    let vigilants = Math.ceil(this.superficie / MAX_AREA);
    let costVigilar = vigilants * SOU;

    return (
      "Es necesitarán: " +
      vigilants +
      " vigilants i costarà " +
      costVigilar +
      " €."
    );
  }
  toString() {
    return (
      "Edifici : " +
      this.nom +
      ", plantes: " +
      this.plantes +
      ", superficie: " +
      this.superficie +
      ", aforament: " +
      this.#aforament
    );
  }
}
