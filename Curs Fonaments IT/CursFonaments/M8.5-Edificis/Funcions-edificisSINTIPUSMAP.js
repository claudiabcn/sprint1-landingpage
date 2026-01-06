//Definim el array de edificis i alguns exemples.

const edificis = [];

let edifici1 = new Hotel("Catalonia", 23, 5000, 50);
let edifici2 = new Hospital("Catalonia", 20, 6000, 30);

edificis.push(edifici1);
edificis.push(edifici2);

console.log(edificis);

// Creem el edifici, recollint els valors comuns.

function crearEdifici() {
  const nom = document.getElementById("nom").value;
  const plantes = parseInt(document.getElementById("plantes").value);
  const superficie = parseInt(document.getElementById("superficie").value);
  const tipus = document.getElementById("tipus").value;

  //Validem que el camp no estigui buit.

  if (!nom || !plantes || !superficie || !tipus) {
    mostrarMensaje("Has d'omplir tots els camps.");
    return;
  }

  //Definim una variable per si el edifici ja exstis per aquell tipus.
  let edificiExistent = null;

  //Fem les 3 búsquedes, en funció del tipus de buscar la existencia d'aquell edifici, amb el parametre del nom:
  if (tipus === "hotel") {
    edificiExistent = buscarHotel(nom);
  } else if (tipus === "hospital") {
    edificiExistent = buscarHospital(nom);
  } else if (tipus === "cinema") {
    edificiExistent = buscarCinema(nom);
  }

  //Si no ha trobat res, el crearem amb un push. Necesitem el dato extra. Defiim la variable del dato. En funció del edifici, serà un dato o un altre. I si hagués trobbt algo, amb el else del final, doncsdiem que no es pot crear.
  if (!edificiExistent) {
    let datosExtra;

    if (tipus === "hotel") {
      datosExtra = parseInt(document.getElementById("habitacions").value);
      edificis.push(new Hotel(nom, plantes, superficie, datosExtra));
      mostrarMensaje("L'hotel s'ha creat.");
    } else if (tipus === "hospital") {
      datosExtra = parseInt(document.getElementById("malalts").value);
      edificis.push(new Hospital(nom, plantes, superficie, datosExtra));
      mostrarMensaje("L'hospital s'ha creat.");
    } else if (tipus === "cinema") {
      datosExtra = parseInt(document.getElementById("aforament").value);
      edificis.push(new Cinema(nom, plantes, superficie, datosExtra));
      mostrarMensaje("El cine s'ha creat.");
    }
  } else {
    mostrarMensaje("L'edifici ja està creat, no es pot tornar a crear.");
  }
}

// Per buscar cada edifici, si existeix, fem un for, per recorrer tots els edificis que hi ha. Si trobem alguna coincidencia i ademés la coincidencia es del mateix tipus, vol dir que està repetit. Sortim de la funció, tornant l'objecte del edifici en cuestió. Fem tot el bucle i si no, tornem un null, perque no ha trobat res. Es pot fer servir un for of o un for normal.

function buscarHotel(nom) {
  for (let edifici of edificis) {
    if (
      edifici.nom.toLowerCase() === nom.toLowerCase() &&
      edifici instanceof Hotel
    ) {
      return edifici;
    }
  }
  return null;
}

function buscarCinema(nom) {
  for (let i = 0; i < edificis.length; i++) {
    if (
      edificis[i].nom.toLowerCase() === nom.toLowerCase() &&
      edificis[i] instanceof Cinema
    ) {
      return edificis[i];
    }
  }
  return null;
}

function buscarHospital(nom) {
  for (let i = 0; i < edificis.length; i++) {
    if (
      edificis[i].nom.toLowerCase() === nom.toLowerCase() &&
      edificis[i] instanceof Hospital
    ) {
      return edificis[i];
    }
  }
  return null;
}

//Funció per mostrarmissatges
function mostrarMensaje(mensaje) {
  document.getElementById("mostrar").innerHTML = mensaje;
}

//Funció que recull les dades per mostrar l'edifici i els mètodes que té. Valida que els camps estiguin omplerts. Defineix la variabe del edifici existent i busca que existeixi el edifici. En el missatge li va afegint tots els metodes.
function mostrarEdifici() {
  const nom = document.getElementById("nom").value;
  const tipus = document.getElementById("tipus").value;

  if (!nom || !tipus) {
    mostrarMensaje("El nom i el tipus són necessaris.");
    return;
  }

  let edificiExistent = null;
  if (tipus === "hotel") {
    edificiExistent = buscarHotel(nom);
  } else if (tipus === "hospital") {
    edificiExistent = buscarHospital(nom);
  } else if (tipus === "cinema") {
    edificiExistent = buscarCinema(nom);
  }

  if (edificiExistent) {
    let missatge = edificiExistent.toString() + "<br>";
    missatge += edificiExistent.netejar() + "<br>";
    missatge += edificiExistent.costVigilancia() + "<br>";

    if (tipus === "hotel") {
      missatge += edificiExistent.serveiHabitacions() + "<br>";
    } else if (tipus === "hospital") {
      missatge += edificiExistent.repartirDinar() + "<br>";

      // En el cas del cinema, li demana el preu de la entrada i el nombre de assitents.
    } else {
      let preu = parseFloat(prompt("Quin és el preu de l'entrada?"));
      let assistents = parseInt(prompt("Quants assistents hi ha?"));
      let resultat = edificiExistent.projectarSessio(assistents, preu);
      missatge += resultat + "<br>";
    }
    mostrarMensaje(missatge);
  } else {
    mostrarMensaje("L'Edifici no existeix.");
  }
}
//La funció per eliminarlo fa lo mateix, i usa el splice.
function eliminarEdifici() {
  const nom = document.getElementById("nom").value;
  const tipus = document.getElementById("tipus").value;

  if (!nom || !tipus) {
    mostrarMensaje("El nom i el tipus són necessaris.");
    return;
  }

  let edificiExistent = null;
  if (tipus === "hotel") {
    edificiExistent = buscarHotel(nom);
  } else if (tipus === "hospital") {
    edificiExistent = buscarHospital(nom);
  } else if (tipus === "cinema") {
    edificiExistent = buscarCinema(nom);
  }

  if (edificiExistent) {
    const index = edificis.indexOf(edificiExistent);
    if (index > -1) {
      edificis.splice(index, 1);
      mostrarMensaje(`Edifici ${nom} eliminat correctament.`);
    }
  } else {
    mostrarMensaje("L'edifici no existeix.");
  }
}
