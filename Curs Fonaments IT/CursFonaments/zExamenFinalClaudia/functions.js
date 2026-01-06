const persones = [];
const incidents = [];

let b1 = new Bomber(10, "Joan", 32, 50);
let i1 = new Investigador(10, "Claudia", 30, "Dermatologia");
let c1 = new Incident(1, "Incendi", 4);
let c2 = new Incident(2, "Accident de tràfic", 2);
let c3 = new Incident(3, "Accident aeri", 1);
let c4 = new Incident(4, "Tsunami", 3);

persones.push(b1, i1);
incidents.push(c1, c2, c3, c4);
b1.incidents.push(c2);

console.log(persones);
console.log(incidents);
console.log(b1);
console.log(i1);
console.log(b1 instanceof Bomber);
console.log(i1 instanceof Bomber);
console.log(b1.toString());

function mostrarMissatge(missatge) {
  document.getElementById("mostrar").innerHTML = missatge;
}

//busquedes que necesitare: el dni ha de ser unic PER persona, no poden haver creats investigadors amb dnis igual que bombers.
function buscarPersona(dni) {
  for (persona of persones) {
    if (persona.dni == dni) {
      return persona;
    }
  }
  return null;
}
function buscarBomber(dni) {
  for (persona of persones) {
    if (persona.dni == dni && persona instanceof Bomber) {
      return persona;
    }
  }
  return null;
}
function buscarIncident(idCC) {
  for (let incident of incidents) {
    if (incident.idCC == idCC) {
      return incident;
    }
  }
  return null;
}

function crearBomber() {
  const dni = document.getElementById("dni").value;
  const nom = document.getElementById("nom").value;
  const edat = parseInt(document.getElementById("edat").value);
  const pes = parseInt(document.getElementById("pes").value);

  if (
    !dni ||
    dni.trim() === "" ||
    !nom ||
    nom.trim() === "" ||
    !edat ||
    isNaN(edat) ||
    !pes ||
    isNaN(pes)
  ) {
    mostrarMissatge("El dni, nom, pes i edat són camps obligatoris");
    return;
  }

  let existeix = buscarPersona(dni);
  if (!existeix) {
    let bomber = new Bomber(dni, nom, edat, pes);
    persones.push(bomber);
    mostrarMissatge("creat.");
  } else {
    mostrarMissatge("Ja existeix amb aquest dni, no s'ha creat.");
  }
  console.log(persones);
}

//Aquesta la poso per mi, per mirar dades i coses, sé que l'enunciat no ho demana.
function mostrarBomber() {
  const dni = document.getElementById("dni").value;
  if (!dni || dni.trim() === "") {
    mostrarMissatge("El dni és obligatori");
    return;
  }
  let existeix = buscarBomber(dni);
  if (!existeix) {
    mostrarMissatge("No hi ha  amb aquest DNI");
  } else {
    mostrarMissatge(existeix.toString());
  }
}

function mostrarIncidentsBomber() {
  const dni = document.getElementById("dni").value;
  if (!dni || dni.trim() === "") {
    mostrarMissatge("El dni és obligatori");
    return;
  }
  let existeix = buscarBomber(dni);
  if (!existeix) {
    mostrarMissatge("No hi ha amb aquest DNI");
  } else {
    mostrarMissatge(existeix.toStringIncidents());
  }
}

function existeixCertificacio(existeix, certificacio) {
  if (!existeix.certificacions || existeix.certificacions.length === 0)
    return false;
  for (let i = 0; i < existeix.certificacions.length; i++) {
    if (existeix.certificacions[i] === certificacio) {
      return true;
    }
  }
  return false;
}

function comprovarCertificacio() {
  const dni = document.getElementById("dni").value;
  const certificacio = document.getElementById("certificacio").value;
  let existeix = buscarBomber(dni);

  if (existeixCertificacio(existeix, certificacio)) {
    mostrarMissatge("Ja té aquesta certificació.");
    return;
  } else {
    mostrarMissatge(" No la té.");
  }
}

function aprendreCertificacions() {
  const dni = document.getElementById("dni").value;
  const certificacio = document.getElementById("certificacio").value;

  let existeix = buscarBomber(dni);
  if (!existeix) {
    mostrarMissatge("No hi ha bombers amb aquest dni.");
    return;
  }
  if (existeixCertificacio(existeix, certificacio)) {
    mostrarMissatge("Ja té aquesta certificació.");
    return;
  }
  if (existeix.aprendreLaCertificacio(certificacio)) {
    mostrarMissatge(" Ha aprés la certificació: " + certificacio);
  } else {
    mostrarMissatge(" No pot aprendre més certificacions.");
  }
}
function assignarIncident() {
  const dni = document.getElementById("dni").value;
  const idCC = document.getElementById("incident").value;
  let bomber = buscarBomber(dni);
  if (!bomber) {
    mostrarMissatge("No hi ha amb aquest dni.");
    return;
  }
  let incident = buscarIncident(idCC);
  if (!incident) {
    mostrarMissatge("No existeix el incident.");
    return;
  }
  let jaAssignat = false;
  for (let i = 0; i < bomber.incidents.length; i++) {
    if (bomber.incidents[i].idCC == incident.idCC) {
      jaAssignat = true;
    }
  }
  if (jaAssignat) {
    mostrarMissatge("Aquest incident ja està assignat a aquest bomber.");
    return;
  }
  if (bomber.potAtendreIncident(incident)) {
    bomber.incidents.push(incident);
    mostrarMissatge(
      `Incident "${incident.nom}" assignat al bomber ${bomber.nom}.`
    );
  } else {
    mostrarMissatge(
      "El bomber no pot atendre aquest incident (falta de edat o de capacitats)."
    );
  }
}
