// Arrays globals per emmagatzemar les dades
const sanitaris = []; // Llista de tots els sanitaris (veterinaris i auxiliars)
const intervencions = []; // Llista de tots els casos clínics disponibles

// ✅ Creació d'objectes de prova
let v1 = new Veterinari(
  "10",
  "Claudia",
  1994,
  new Date().toLocaleString(),
  4,
  "dermatologia"
);
let a1 = new Auxiliar("20", "Sara", 1996, new Date().toLocaleString(), 4);
let c1 = new CasClinic(1, "Fractura de pota de gos", 4);
let c2 = new CasClinic(2, "Fractura de pota de conill", 2);
let c3 = new CasClinic(3, "Fractura de pota de gat", 1);
let c4 = new CasClinic(4, "Fractura de pota de cavall", 3);

// Afegim els objectes creats als arrays globals
sanitaris.push(v1);
sanitaris.push(a1);
intervencions.push(c1);
intervencions.push(c2);
intervencions.push(c3);
intervencions.push(c4);

// Assignem un cas clínic de prova al veterinari
v1.intervencions.push(c2);

// ✅ Mostrar informació de prova a la consola
console.log(sanitaris);
console.log(intervencions);

// ✅ Comprovar herència
console.log(a1 instanceof Sanitari); // true ✅
console.log(a1 instanceof Veterinari); // false ✅ (error en el comentari original)

// ✅ Provar mètodes toString
console.log(a1.toString());
console.log(v1.toString());
console.log(c1.toString());

// Funció per mostrar missatges a la interfície HTML
function mostrarMissatge(missatge) {
  document.getElementById("mostrar").innerHTML = missatge;
}

// Funció per buscar un veterinari pel seu DNI
function buscarVeterinari(dni) {
  for (sanitari of sanitaris) {
    // Cerca insensible a majúscules/minúscules i verificació del tipus
    if (
      sanitari.dni.toLowerCase() == dni.toLowerCase() &&
      sanitari instanceof Veterinari
    ) {
      return sanitari;
    }
  }
  return null; // No trobat
}

// Funció per buscar un auxiliar pel seu DNI
function buscarAuxiliar(dni) {
  for (sanitari of sanitaris) {
    if (
      sanitari.dni.toLowerCase() == dni.toLowerCase() &&
      sanitari instanceof Auxiliar
    ) {
      return sanitari;
    }
  }
  return null;
}

// Funció per buscar qualsevol sanitari pel seu DNI
function buscarSanitari(dni) {
  for (sanitari of sanitaris) {
    if (sanitari.dni.toLowerCase() == dni.toLowerCase()) {
      return sanitari;
    }
  }
  return null;
}

// Funció per buscar un cas clínic pel seu ID
function buscarCasClinic(idCC) {
  for (let intervencio of intervencions) {
    if (intervencio.idCC == idCC) {
      return intervencio; // Retorna l'objecte complet
    }
  }
  return null;
}

// Funció per crear un nou sanitari des de la interfície HTML
function crearSanitari() {
  // Obtenim els valors dels camps del formulari
  const dni = document.getElementById("dni").value;
  const nom = document.getElementById("nom").value;
  const anyNaixement = parseInt(document.getElementById("anyNaixement").value);
  const horaRegistre = new Date().toLocaleString();
  const especialitat = document.getElementById("especialitat").value;
  const anysExperiencia = parseInt(
    document.getElementById("anysExperiencia").value
  );
  const tipus = document.getElementById("tipus").value;

  // Validació exhaustiva dels camps obligatoris
  if (
    !dni ||
    dni.trim() === "" ||
    !nom ||
    nom.trim() === "" ||
    !anyNaixement ||
    isNaN(anyNaixement) ||
    !tipus ||
    !anysExperiencia ||
    anysExperiencia < 0 ||
    isNaN(anysExperiencia)
  ) {
    mostrarMissatge(
      "El dni, nom, any de naixement, anys de experiència i tipus del sanitari són camps obligatoris"
    );
    return;
  }

  // Creació específica segons el tipus seleccionat
  if (tipus == "veterinari") {
    // Els veterinaris necessiten especialitat
    if (!especialitat || especialitat.trim() === "") {
      mostrarMissatge("L'especialitat és obligatòria per als veterinaris");
      return;
    }

    // Verificar que no existeixi ja un sanitari amb aquest DNI
    let existe = buscarSanitari(dni);
    if (!existe) {
      let veterinari = new Veterinari(
        dni,
        nom,
        anyNaixement,
        horaRegistre,
        anysExperiencia,
        especialitat
      );
      sanitaris.push(veterinari);
      mostrarMissatge("Sanitari veterinari creat.");
    } else {
      mostrarMissatge("Ja existeix un sanitari amb aquest dni, no s'ha creat.");
    }
  }

  if (tipus == "auxiliar") {
    let existe = buscarSanitari(dni);
    if (!existe) {
      let auxiliar = new Auxiliar(
        dni,
        nom,
        anyNaixement,
        horaRegistre,
        anysExperiencia
      );
      sanitaris.push(auxiliar);
      mostrarMissatge("Sanitari auxiliar creat.");
    } else {
      mostrarMissatge("Ja existeix un sanitari amb aquest dni, no s'ha creat.");
    }
  }
  console.log(sanitaris); // Mostra l'estat actual a la consola
}

// Funció per mostrar la informació d'un sanitari específic
function mostrarSanitari() {
  const dni = document.getElementById("dni").value;

  if (!dni || dni.trim() === "") {
    mostrarMissatge("El dni del sanitari és obligatori");
    return;
  }

  let existe = buscarSanitari(dni);
  if (!existe) {
    mostrarMissatge("No hi ha sanitaris amb aquest DNI");
  } else {
    mostrarMissatge(existe.toStringPlus()); // Usa la versió extensa
  }
}

// Funció per mostrar tots els sanitaris creats
function mostrarSanitarisCreats() {
  let resultado = "";
  // Concatena la informació de tots els sanitaris
  for (const sanitari of sanitaris) {
    resultado += sanitari.toString() + "<br><br>";
  }
  document.getElementById("mostrar").innerHTML = resultado;
  console.log(sanitaris);
}

// Funció per trobar i mostrar el sanitari més jove
function mostrarSanitariJove() {
  if (!sanitaris || sanitaris.length === 0) {
    mostrarMissatge("No hi ha sanitaris registrats");
    return;
  }

  // Algorisme per trobar el més jove (any de naixement més alt)
  let sanitariMesJove = sanitaris[0];
  for (let i = 1; i < sanitaris.length; i++) {
    if (sanitaris[i].anyNaixement > sanitariMesJove.anyNaixement) {
      sanitariMesJove = sanitaris[i];
    }
  }

  // Càlcul de l'edat actual
  const anyActual = new Date().getFullYear();
  const edat = anyActual - sanitariMesJove.anyNaixement;

  const miss = `
    El sanitari més jove es el següent:    
    <br>DNI: ${sanitariMesJove.dni}
    <br>Nom: ${sanitariMesJove.nom}
    <br>Any de naixement: ${sanitariMesJove.anyNaixement}
    <br>Edat: ${edat} anys
    <br>Hora de registre: ${sanitariMesJove.horaRegistre}
  `;
  mostrarMissatge(miss);
}

// FUNCIONS DE GESTIÓ DE CAPACITATS DELS VETERINARIS

// Funció per que un veterinari aprengui una nova capacitat
function aprendreCapacitats() {
  const dniVet = document.getElementById("dniVet").value;
  const capacitat = document.getElementById("capacitat").value;

  // Validació dels camps obligatoris
  if (!dniVet || !capacitat) {
    mostrarMissatge("Els camps dni i capacitat son obligatoris.");
    return;
  }

  let existe = buscarVeterinari(dniVet);
  if (!existe) {
    mostrarMissatge("No hi ha veterinaris amb aquest dni.");
    return;
  }

  // Verificar si ja té aquesta capacitat per evitar duplicats
  if (existeixCapacitat(existe, capacitat)) {
    mostrarMissatge("El veterinari ja té aquesta capacitat apresa.");
    return;
  }

  // Intentar aprendre la capacitat
  if (existe.aprendreCapacitat(capacitat)) {
    mostrarMissatge(" Ha aprés la capacitat: " + capacitat);
  } else {
    mostrarMissatge(" No pot aprendre més capacitats."); // Límit assolit
  }
}

// Funció per que un veterinari oblidi una capacitat
function oblidarCapacitats() {
  const dniVet = document.getElementById("dniVet").value;
  const capacitat = document.getElementById("capacitat").value;

  if (!dniVet || !capacitat) {
    mostrarMissatge("Els camps dni i capacitat son obligatoris.");
    return;
  }

  let existeix = buscarVeterinari(dniVet);
  if (!existeix) {
    mostrarMissatge("No hi ha veterinaris amb aquest dni.");
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

// Funció auxiliar per verificar si un veterinari té una capacitat específica
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
function assignarCasClinic() {
  // Obtenir els valors dels inputs HTML
  const dniVet = document.getElementById("dniVet").value;
  const idCC = document.getElementById("casclin").value;

  // Validació dels camps obligatoris
  if (!dniVet || !idCC) {
    mostrarMissatge("Els camps dni i cas clínic son obligatoris.");
    return;
  }

  // Buscar el veterinari pel DNI
  let veterinari = buscarVeterinari(dniVet);
  if (!veterinari) {
    mostrarMissatge("No hi ha veterinaris amb aquest dni.");
    return;
  }

  // Buscar el cas clínic per ID
  let casClinic = buscarCasClinic(idCC);
  if (!casClinic) {
    mostrarMissatge("No existeix el cas clínic especificat.");
    return;
  }

  // Verificar si ja té aquest cas assignat per evitar duplicats
  let jaAssignat = false;
  for (let i = 0; i < veterinari.intervencions.length; i++) {
    if (veterinari.intervencions[i].idCC == casClinic.idCC) {
      jaAssignat = true;
    }
  }
  if (jaAssignat) {
    mostrarMissatge("Aquest cas clínic ja està assignat a aquest veterinari.");
    return;
  }

  // Verificar si el veterinari pot atendre aquest cas
  if (veterinari.potAtendreCasClinic(casClinic)) {
    // Assignar el cas al veterinari
    veterinari.intervencions.push(casClinic);
    mostrarMissatge(
      `Cas clínic "${casClinic.nom}" assignat al veterinari ${veterinari.nom}.`
    );
  } else {
    mostrarMissatge(
      "El veterinari no pot atendre aquest cas clínic (falta experiència o capacitats)."
    );
  }
}

// FUNCIONS DE GESTIÓ DELS AUXILIARS VETERINARIS

// Funció per assignar un animal a un auxiliar
function assignarAnimal() {
  const dniaux = document.getElementById("dniaux").value;
  const animal = document.getElementById("animal").value;

  let existe = buscarAuxiliar(dniaux);
  if (!existe) {
    mostrarMissatge("Aquest DNI no pertany a cap auxiliar.");
    return;
  }

  // Registrar l'animal atès
  if (existe) {
    mostrarMissatge(existe.nom + existe.atendreAnimal(animal));
    return;
  }
}

// Funció per registrar una tasca realitzada per un auxiliar
function registrarTasca() {
  const dniaux = document.getElementById("dniaux").value;
  const tasca = document.getElementById("tasca").value;

  let existe = buscarAuxiliar(dniaux);
  if (!existe) {
    mostrarMissatge("Aquest DNI no pertany a cap auxiliar.");
    return;
  }

  // Registrar la tasca realitzada
  if (existe) {
    mostrarMissatge(existe.nom + existe.realitzarTasca(tasca));
    return;
  }
}

function modificarVeterinari() {
  // 1.- Recoger datos
  const dniMod = document.getElementById("dniMod").value.trim();
  const camp = document.getElementById("campMod").value;
  const valor = document.getElementById("valorMod").value;
  // 2.- Hacer la búsqueda del vet por dni
  const existeix = buscarVeterinari(dniMod);
  // 3.- En función de la búsqueda, modifico vet.
  if (existeix) {
    switch (camp) {
      case "nom":
        existeix.nom = valor;
        break;
      case "especialitat":
        existeix.especialitat = valor;
        break;
      case "anysExperiencia":
        existeix.anysExperiencia = valor;
        break;
    }
    mostrarMissatge(`Veterinari "${dniMod}" modificat correctament.`);
  } else {
    mostrarMissatge(`El veterinari "${dniMod}" no existeix.`);
  }
}
