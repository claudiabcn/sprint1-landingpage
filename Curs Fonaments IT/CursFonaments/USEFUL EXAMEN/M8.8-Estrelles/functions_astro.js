// Arrays globals per emmagatzemar les dades
const persones = [];
const missions = [];
const investigacions = [];

// ✅ Creació d'objectes de prova

let a1 = new Astronauta("10", "Sara", 20, 60);
let c1 = new Cientific("20", "Marta", 33, "Estrelles");
let m1 = new Missio(1, "Apolo13", 3, true);
let m2 = new Missio(2, "Apolo14", 1, false);
let m3 = new Missio(3, "Apolo15", 4, false);
let m4 = new Missio(4, "Apolo16", 2, true);

let i0 = new Investigacio("Estudi de la lluna", "astrologia");
let i1 = new Investigacio("Exploració de Mart", "geologia");
let i2 = new Investigacio("Estudi de les estrelles", "astronomia");

// Afegim els objectes creats als arrays globals
persones.push(a1, c1);
missions.push(m1, m2, m3, m4);
investigacions.push(i0, i1, i2);

// Assignem una missio de prova al astronauta
a1.missions.push(m1);

// ✅ Mostrar informació de prova a la consola
console.log(persones);
console.log(missions);
console.log(investigacions);

// ✅ Comprovar herència
console.log(a1 instanceof Astronauta); // true ✅
console.log(a1 instanceof Cientific); // false ✅ (error en el comentari original)

// ✅ Provar mètodes toString
console.log(a1.toString());
console.log(c1.toString());
console.log(m1.toString());
console.log(i0.toString());

// Funció per mostrar missatges a la interfície HTML
function mostrarMissatge(missatge) {
  document.getElementById("mostrar").innerHTML = missatge;
}

// Funció per buscar pel seu DNI
function buscarAstronauta(dni) {
  for (persona of persones) {
    // Cerca insensible a majúscules/minúscules i verificació del tipus
    if (
      persona.dni.toLowerCase() == dni.toLowerCase() &&
      persona instanceof Astronauta
    ) {
      return persona;
    }
  }
  return null; // No trobat
}

// Funció per buscar pel seu DNI
function buscarCientific(dni) {
  for (persona of persones) {
    if (
      persona.dni.toLowerCase() == dni.toLowerCase() &&
      persona instanceof Cientific
    ) {
      return persona;
    }
  }
  return null;
}

// Funció per buscar qualsevol sanitari pel seu DNI
function buscarPersona(dni) {
  for (persona of persones) {
    if (persona.dni.toLowerCase() == dni.toLowerCase()) {
      return persona;
    }
  }
  return null;
}

// Funció per buscar pel seu ID
function buscarMissio(idMissio) {
  for (let missio of missions) {
    if (missio.idMissio == idMissio) {
      return missio; // Retorna l'objecte complet
    }
  }
  return null;
}

// Funció per crear un nou sanitari des de la interfície HTML
function crearPersona() {
  // Obtenim els valors dels camps del formulari
  const dni = document.getElementById("dni").value;
  const nom = document.getElementById("nom").value;
  const edat = parseInt(document.getElementById("edat").value);
  const especialitat = document.getElementById("especialitat").value;
  const pes = parseInt(document.getElementById("pes").value);
  const tipus = document.getElementById("tipus").value;

  // Validació exhaustiva dels camps obligatoris
  if (
    !dni ||
    dni.trim() === "" ||
    !nom ||
    nom.trim() === "" ||
    !edat ||
    isNaN(edat) ||
    edat < 0 ||
    !tipus
  ) {
    mostrarMissatge(
      "El dni, nom, edat i tipus del persona són camps obligatoris"
    );
    return;
  }

  // Creació específica segons el tipus seleccionat
  if (tipus == "astronauta") {
    // necessiten pes
    if (!pes) {
      mostrarMissatge("El pes és obligatòri per als astronautes");
      return;
    }
    if (edat < 18) {
      mostrarMissatge("Un astronauta ha de ser major d'edat");
      return;
    }

    // Verificar que no existeixi ja un sanitari amb aquest DNI
    let existe = buscarPersona(dni);
    if (!existe) {
      let astronauta = new Astronauta(dni, nom, edat, pes);
      persones.push(astronauta);
      mostrarMissatge("Persona astronauta creada.");
    } else {
      mostrarMissatge("Ja existeix una persona amb aquest dni, no s'ha creat.");
    }
  }

  if (tipus == "cientific") {
    if (!especialitat) {
      mostrarMissatge("La especialitat és obligatòria per als científics");
      return;
    }
    let existe = buscarPersona(dni);
    if (!existe) {
      let cientific = new Cientific(dni, nom, edat, especialitat);
      persones.push(cientific);
      mostrarMissatge("Persona cientific creat.");
    } else {
      mostrarMissatge("Ja existeix una persona amb aquest dni, no s'ha creat.");
    }
  }
  console.log(persones); // Mostra l'estat actual a la consola
}

// Funció per mostrar la informació d'un sanitari específic
function mostrarPersona() {
  const dni = document.getElementById("dni").value;

  if (!dni || dni.trim() === "") {
    mostrarMissatge("El dni és obligatori");
    return;
  }

  let existe = buscarPersona(dni);
  if (!existe) {
    mostrarMissatge("No hi ha persones amb aquest DNI");
  } else {
    mostrarMissatge(existe.toStringPlus()); // Usa la versió extensa
  }
}

// Funció per mostrar tots els sanitaris creats
function mostrarPersonesCreades() {
  let resultat = "";
  // Concatena la informació de tots els sanitaris
  for (const persona of persones) {
    resultat += persona.toString() + "<br><br>";
  }
  document.getElementById("mostrar").innerHTML = resultat;
}

// FUNCIONS DE GESTIÓ DE CAPACITATS

function aprendreCapacitats() {
  const dniAst = document.getElementById("dniAst").value;
  const capacitat = document.getElementById("capacitat").value;

  // Validació dels camps obligatoris
  if (!dniAst || !capacitat) {
    mostrarMissatge("Els camps dni i capacitat son obligatoris.");
    return;
  }

  let existe = buscarAstronauta(dniAst);
  if (!existe) {
    mostrarMissatge("No hi ha astronautes amb aquest dni.");
    return;
  }

  // Verificar si ja té aquesta capacitat per evitar duplicats
  if (existeixCapacitat(existe, capacitat)) {
    mostrarMissatge("El astronauta ja té aquesta capacitat apresa.");
    return;
  }

  // Intentar aprendre la capacitat
  if (existe.aprendreCapacitat(capacitat)) {
    mostrarMissatge(" Ha aprés la capacitat: " + capacitat);
  } else {
    mostrarMissatge(" No pot aprendre més capacitats."); // Límit assolit
  }
}

// Funció per oblidi una capacitat
function oblidarCapacitats() {
  const dniAst = document.getElementById("dniAst").value;
  const capacitat = document.getElementById("capacitat").value;

  if (!dniAst || !capacitat) {
    mostrarMissatge("Els camps dni i capacitat son obligatoris.");
    return;
  }

  let existeix = buscarAstronauta(dniAst);
  if (!existeix) {
    mostrarMissatge("No hi ha astronautes amb aquest dni.");
    return;
  }

  // Verificar si té la capacitat abans d'intentar oblidar-la
  if (existeixCapacitat(existeix, capacitat)) {
    existeix.oblidarCapacitat(capacitat);
    mostrarMissatge(`${existeix.nom} ha oblidat la capacitat: ${capacitat}`);
  } else {
    mostrarMissatge(
      `${existeix.nom} no té la capacitat: ${capacitat} i per tant no la pot oblidar.`
    );
  }
}

// Funció auxiliar per verificar si  té una capacitat específica
function existeixCapacitat(existeix, capacitat) {
  // Verificar que tingui capacitats actives
  if (!existeix.capacitatsActives || existeix.capacitatsActives.length === 0)
    return false;

  // Buscar la capacitat en la llista d'actives
  for (let i = 0; i < existeix.capacitatsActives.length; i++) {
    if (existeix.capacitatsActives[i] === capacitat) {
      return true;
    }
  }
  return false;
}

// FUNCIÓ PRINCIPAL PER ASSIGNAR CASOS CLÍNICS
function assignarMissio() {
  // Obtenir els valors dels inputs HTML
  const dniAst = document.getElementById("dniAst").value;
  const idMissio = document.getElementById("missio").value;

  // Validació dels camps obligatoris
  if (!dniAst || !idMissio) {
    mostrarMissatge("Els camps dni i missió son obligatoris.");
    return;
  }

  // Buscar pel DNI
  let astronauta = buscarAstronauta(dniAst);
  if (!astronauta) {
    mostrarMissatge("No hi ha astronautes amb aquest dni.");
    return;
  }

  // Buscar  per ID
  let missio = buscarMissio(idMissio);
  if (!missio) {
    mostrarMissatge("No existeix la missió especificada.");
    return;
  }

  // Verificar si ja té aquest cas assignat per evitar duplicats
  let jaAssignat = false;
  for (let i = 0; i < astronauta.missions.length; i++) {
    if (astronauta.missions[i].idMissio == missio.idMissio) {
      jaAssignat = true;
    }
  }
  if (jaAssignat) {
    mostrarMissatge("Aquesta missió ja està assignada a aquest astronauta.");
    return;
  }

  // Verificar si pot atendre
  if (astronauta.potFerMissio(missio)) {
    // Assignar
    astronauta.missions.push(missio);
    mostrarMissatge(
      `Missió "${missio.nomMissio}" assignat al astronauta ${astronauta.nom}.`
    );
  } else {
    mostrarMissatge(
      "El astronauta no pot fer aquesta missió (li falten capacitats)."
    );
  }
}

// FUNCIONS DE GESTIÓ

// Funció per assignar investigacio

function assignarInvestigacio() {
  const dniCie = document.getElementById("dniCie").value;
  const investigacio = document.getElementById("investigacio").value;
  if (!dniCie || !investigacio) {
    mostrarMissatge("Els camps DNI i investigació són obligatoris.");
    return;
  }
  let cientific = buscarCientific(dniCie);
  if (!cientific) {
    mostrarMissatge("Aquest DNI no pertany a cap científic.");
    return;
  }

  let i = investigacio;
  let resultat = cientific.investigacioAssignada(
    investigacions[i].nomInvestigacio
  );
  mostrarMissatge(`${cientific.nom} ${resultat}`);
}
