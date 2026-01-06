// Arrays globals per emmagatzemar les dades
const persones = []; // Llista de totes les persones (instructors i estudiants)
const torneigs = []; // Llista de tots els torneigs disponibles

// ✅ Creació d'objectes de prova
let i1 = new Instructor("10", "Carlos", 35, "karate", 8);
let e1 = new Estudiant("20", "Ana", 22, "intermedio");
let t1 = new Torneig(1, "Campeonato Regional de Karate", 4);
let t2 = new Torneig(2, "Torneo de Principiantes", 2);
let t3 = new Torneig(3, "Copa de Judo", 1);
let t4 = new Torneig(4, "Campeonato Nacional", 5);

// Afegim els objectes creats als arrays globals
persones.push(i1);
persones.push(e1);
torneigs.push(t1);
torneigs.push(t2);
torneigs.push(t3);
torneigs.push(t4);

// Assignem un estudiant de prova a l'instructor
i1.estudiantsEntrenats.push(e1);

// ✅ Mostrar informació de prova a la consola
console.log(persones);
console.log(torneigs);

// ✅ Comprovar herència
console.log(e1 instanceof Persona); // true ✅
console.log(e1 instanceof Instructor); // false ✅

// ✅ Provar mètodes toString
console.log(e1.toString());
console.log(i1.toString());
console.log(t1.toString());

// Funció per mostrar missatges a la interfície HTML
function mostrarMissatge(missatge) {
  document.getElementById("mostrar").innerHTML = missatge;
}

// Funció per buscar un instructor pel seu DNI
function buscarInstructor(dni) {
  for (persona of persones) {
    // Cerca insensible a majúscules/minúscules i verificació del tipus
    if (
      persona.dni.toLowerCase() == dni.toLowerCase() &&
      persona instanceof Instructor
    ) {
      return persona;
    }
  }
  return null; // No trobat
}

// Funció per buscar un estudiant pel seu DNI
function buscarEstudiant(dni) {
  for (persona of persones) {
    if (
      persona.dni.toLowerCase() == dni.toLowerCase() &&
      persona instanceof Estudiant
    ) {
      return persona;
    }
  }
  return null;
}

// Funció per buscar qualsevol persona pel seu DNI
function buscarPersona(dni) {
  for (persona of persones) {
    if (persona.dni.toLowerCase() == dni.toLowerCase()) {
      return persona;
    }
  }
  return null;
}

// Funció per buscar un torneig pel seu ID
function buscarTorneig(id) {
  for (let torneig of torneigs) {
    if (torneig.id == id) {
      return torneig; // Retorna l'objecte complet
    }
  }
  return null;
}

// Funció per crear una nova persona des de la interfície HTML
function crearPersona() {
  // Obtenim els valors dels camps del formulari
  const dni = document.getElementById("dni").value;
  const nom = document.getElementById("nom").value;
  const edat = parseInt(document.getElementById("edat").value);
  const estiloArteMarcial = document.getElementById("estiloArteMarcial").value;
  const experiencia = parseInt(document.getElementById("experiencia").value);
  const nivell = document.getElementById("nivell").value;
  const tipus = document.getElementById("tipus").value;

  // Validació exhaustiva dels camps obligatoris
  if (
    !dni ||
    dni.trim() === "" ||
    !nom ||
    nom.trim() === "" ||
    !edat ||
    isNaN(edat) ||
    !tipus ||
    edat < 0 ||
    isNaN(edat)
  ) {
    mostrarMissatge(
      "El dni, nom, edat i tipus de la persona són camps obligatoris"
    );
    return;
  }
  if (!(dni.length === 9)) {
    mostrarMissatge("Recorda que un dni té 9 caràcters");
    return;
  }
  // Creació específica segons el tipus seleccionat
  if (tipus == "instructor") {
    // Els instructors necessiten estilo i experiència
    if (
      !estiloArteMarcial ||
      estiloArteMarcial.trim() === "" ||
      !experiencia ||
      isNaN(experiencia)
    ) {
      mostrarMissatge(
        "L'estil d'art marcial i l'experiència són obligatoris per als instructors"
      );
      return;
    }

    // Verificar que no existeixi ja una persona amb aquest DNI
    let existe = buscarPersona(dni);
    if (!existe) {
      let instructor = new Instructor(
        dni,
        nom,
        edat,
        estiloArteMarcial,
        experiencia
      );
      persones.push(instructor);
      mostrarMissatge("Persona instructor creada.");
    } else {
      mostrarMissatge("Ja existeix una persona amb aquest dni, no s'ha creat.");
    }
  }

  if (tipus == "estudiant") {
    // Els estudiants necessiten nivell
    if (!nivell) {
      mostrarMissatge("El nivell és obligatori per als estudiants");
      return;
    }

    let existe = buscarPersona(dni);
    if (!existe) {
      let estudiant = new Estudiant(dni, nom, edat, nivell);
      persones.push(estudiant);
      mostrarMissatge("Persona estudiant creada.");
    } else {
      mostrarMissatge("Ja existeix una persona amb aquest dni, no s'ha creat.");
    }
  }
  console.log(persones); // Mostra l'estat actual a la consola
}

// Funció per mostrar la informació d'una persona específica
function mostrarPersona() {
  const dni = document.getElementById("dni").value;

  if (!dni || dni.trim() === "") {
    mostrarMissatge("El dni de la persona és obligatori");
    return;
  }

  let existe = buscarPersona(dni);
  if (!existe) {
    mostrarMissatge("No hi ha persones amb aquest DNI");
  } else {
    mostrarMissatge(existe.toStringPlus()); // Usa la versió extensa
  }
}

// Funció per mostrar totes les persones creades
function mostrarPersonesCreades() {
  let resultado = "";
  // Concatena la informació de totes les persones
  for (const persona of persones) {
    resultado += persona.toString() + "<br><br>";
  }
  document.getElementById("mostrar").innerHTML = resultado;
  console.log(persones);
}

// FUNCIONS DE GESTIÓ DE TÈCNIQUES DELS INSTRUCTORS

// Funció per que un instructor aprengui una nova tècnica
function aprendreTecniques() {
  const dniIns = document.getElementById("dniIns").value;
  const tecnica = document.getElementById("tecnica").value;

  // Validació dels camps obligatoris
  if (!dniIns || !tecnica) {
    mostrarMissatge("Els camps dni i tècnica son obligatoris.");
    return;
  }

  let existe = buscarInstructor(dniIns);
  if (!existe) {
    mostrarMissatge("No hi ha instructors amb aquest dni.");
    return;
  }

  // Verificar si ja té aquesta tècnica per evitar duplicats
  if (existeixTecnica(existe, tecnica)) {
    mostrarMissatge("L'instructor ja té aquesta tècnica apresa.");
    return;
  }

  // Intentar aprendre la tècnica
  if (existe.aprendreTecnica(tecnica)) {
    mostrarMissatge(" Ha aprés la tècnica: " + tecnica);
  } else {
    mostrarMissatge(" No pot aprendre més tècniques."); // Límit assolit
  }
}

// Funció per que un instructor oblidi una tècnica
function oblidarTecniques() {
  const dniIns = document.getElementById("dniIns").value;
  const tecnica = document.getElementById("tecnica").value;

  if (!dniIns || !tecnica) {
    mostrarMissatge("Els camps dni i tècnica son obligatoris.");
    return;
  }

  let existeix = buscarInstructor(dniIns);
  if (!existeix) {
    mostrarMissatge("No hi ha instructors amb aquest dni.");
    return;
  }

  // Verificar si té la tècnica abans d'intentar oblidar-la
  if (existeixTecnica(existeix, tecnica)) {
    existeix.oblidarTecnica(tecnica);
    mostrarMissatge(`${existeix.nom} ha oblidat la tècnica: ${tecnica}`);
  } else {
    mostrarMissatge(
      `${existeix.nom} no té la tècnica: ${tecnica} i per tant no la pot oblidar.`
    );
  }
}

// Funció auxiliar per verificar si un instructor té una tècnica específica
function existeixTecnica(existeix, tecnica) {
  // Verificar que tingui tècniques dominades
  if (!existeix.tecniquesDominades || existeix.tecniquesDominades.length === 0)
    return false;

  // Buscar la tècnica en la llista de dominades
  for (let i = 0; i < existeix.tecniquesDominades.length; i++) {
    if (existeix.tecniquesDominades[i] === tecnica) {
      return true;
    }
  }
  return false;
}

// FUNCIÓ PRINCIPAL PER ASSIGNAR TORNEIGS
function assignarTorneig() {
  // Obtenir els valors dels inputs HTML
  const dniEst = document.getElementById("dniEst").value;
  const idTorneig = document.getElementById("torneig").value;

  // Validació dels camps obligatoris
  if (!dniEst || !idTorneig) {
    mostrarMissatge("Els camps dni i torneig son obligatoris.");
    return;
  }

  // Buscar l'estudiant pel DNI
  let estudiant = buscarEstudiant(dniEst);
  if (!estudiant) {
    mostrarMissatge("No hi ha estudiants amb aquest dni.");
    return;
  }

  // Buscar el torneig per ID
  let torneig = buscarTorneig(idTorneig);
  if (!torneig) {
    mostrarMissatge("No existeix el torneig especificat.");
    return;
  }

  // Verificar si ja està assignat a aquest torneig per evitar duplicats
  let jaAssignat = false;
  for (let i = 0; i < estudiant.torneussParticipats.length; i++) {
    if (estudiant.torneusParticipats[i] == torneig.nom) {
      jaAssignat = true;
    }
  }
  if (jaAssignat) {
    mostrarMissatge("Aquest torneig ja està assignat a aquest estudiant.");
    return;
  }

  // Verificar si l'estudiant pot participar en aquest torneig
  let numTecniques = estudiant.tecniquesAprenudes.length;
  if (numTecniques >= torneig.dificultat) {
    // Assignar el torneig a l'estudiant amb una calificació aleatòria
    let calificacio = Math.floor(Math.random() * 10) + 1;
    estudiant.participarTorneig(torneig.nom, calificacio);
    mostrarMissatge(
      `Torneig "${torneig.nom}" assignat a l'estudiant ${estudiant.nom} amb calificació ${calificacio}.`
    );
  } else {
    mostrarMissatge(
      "L'estudiant no pot participar en aquest torneig (no té suficients tècniques)."
    );
  }
}

// FUNCIONS DE GESTIÓ DELS ESTUDIANTS

// Funció per assignar una tècnica a un estudiant
function assignarTecnica() {
  const dniEst = document.getElementById("dniEst").value;
  const tecnicaEst = document.getElementById("tecnicaEst").value;

  let existe = buscarEstudiant(dniEst);
  if (!existe) {
    mostrarMissatge("Aquest DNI no pertany a cap estudiant.");
    return;
  }

  // Registrar la tècnica apresa
  if (existe) {
    mostrarMissatge(existe.nom + existe.aprendreTecnica(tecnicaEst));
    return;
  }
}

// Funció per calcular el promig de calificacions d'un estudiant
function calcularPromig() {
  const dniEst = document.getElementById("dniEst").value;

  let existe = buscarEstudiant(dniEst);
  if (!existe) {
    mostrarMissatge("Aquest DNI no pertany a cap estudiant.");
    return;
  }

  // Calcular el promig de calificacions
  if (existe) {
    let promig = existe.calcularPromedioCalificacions();
    mostrarMissatge(
      `El promig de calificacions de ${existe.nom} és: ${promig.toFixed(2)}`
    );
    return;
  }
}
