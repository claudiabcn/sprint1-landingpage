const sanitaris = [];
const intervencions = [];

// ✅ Crear un objecte
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

sanitaris.push(v1);
sanitaris.push(a1);
intervencions.push(c1);
intervencions.push(c2);
intervencions.push(c3);
intervencions.push(c4);

v1.intervencions.push(c2);

// ✅ Mostrar info
console.log(sanitaris);
console.log(intervencions);

// ✅ Comprovar tipus
console.log(a1 instanceof Sanitari); // true ✅
console.log(a1 instanceof Veterinari); // true ✅

// ✅ Provar mètodes
console.log(a1.toString());
console.log(v1.toString());
console.log(c1.toString());

function mostrarMissatge(missatge) {
  document.getElementById("mostrar").innerHTML = missatge;
}

function buscarVeterinari(dni) {
  for (sanitari of sanitaris) {
    if (
      sanitari.dni.toLowerCase() == dni.toLowerCase() &&
      sanitari instanceof Veterinari
    ) {
      return sanitari;
    }
  }
  return null;
}
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
function buscarSanitari(dni) {
  for (sanitari of sanitaris) {
    if (sanitari.dni.toLowerCase() == dni.toLowerCase()) {
      return sanitari;
    }
  }
  return null;
}

function buscarCasClinic(idCC) {
  for (let intervencio of intervencions) {
    if (intervencio.idCC == idCC) {
      // Usar la propiedad id del objeto
      return intervencio;
    }
  }
  return null;
}

function crearSanitari() {
  const dni = document.getElementById("dni").value;
  const nom = document.getElementById("nom").value;
  const anyNaixement = parseInt(document.getElementById("anyNaixement").value);
  const horaRegistre = new Date().toLocaleString();
  const especialitat = document.getElementById("especialitat").value;
  const anysExperiencia = parseInt(
    document.getElementById("anysExperiencia").value
  );
  const tipus = document.getElementById("tipus").value;
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

  if (tipus == "veterinari") {
    if (!especialitat || especialitat.trim() === "") {
      mostrarMissatge("L'especialitat és obligatòria per als veterinaris");
      return;
    }
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
  console.log(sanitaris);
}

function mostrarSanitari() {
  const dni = document.getElementById("dni").value;

  if (!dni || dni.trim() === "") {
    mostrarMissatge("El dni  del sanitari és obligatori");
    return;
  }

  let existe = buscarSanitari(dni);
  if (!existe) {
    mostrarMissatge("No hi ha sanitaris amb aquest DNI");
  } else {
    mostrarMissatge(existe.toStringPlus());
  }
}

function mostrarSanitarisCreats() {
  let resultado = "";
  for (const sanitari of sanitaris) {
    resultado += sanitari.toString() + "<br><br>";
  }
  document.getElementById("mostrar").innerHTML = resultado;
  console.log(sanitaris);
}
function mostrarSanitariJove() {
  if (!sanitaris || sanitaris.length === 0) {
    mostrarMissatge("No hi ha sanitaris registrats");
    return;
  }
  let sanitariMesJove = sanitaris[0];

  for (let i = 1; i < sanitaris.length; i++) {
    if (sanitaris[i].anyNaixement > sanitariMesJove.anyNaixement) {
      sanitariMesJove = sanitaris[i];
    }
  }
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

function aprendreCapacitats() {
  const dniVet = document.getElementById("dniVet").value;
  const capacitat = document.getElementById("capacitat").value;
  if (!dniVet || !capacitat) {
    mostrarMissatge("Els camps dni i capacitat son obligatoris.");
    return;
  }
  let existe = buscarVeterinari(dniVet);

  if (!existe) {
    mostrarMissatge("No hi ha veterinaris amb aquest dni.");
    return; //  detener ejecución si no existe
  }
  //  verificar si ya tiene la capacidad
  if (existeixCapacitat(existe, capacitat)) {
    mostrarMissatge("El veterinari ja té aquesta capacitat apresa.");
    return;
  }

  if (existe.aprendreCapacitat(capacitat)) {
    mostrarMissatge(" Ha aprés la capacitat: " + capacitat);
  } else {
    mostrarMissatge(" No pot aprendre més capacitats.");
  }
}

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
  // Verificar si tiene la capacitat usando una función auxiliar
  if (existeixCapacitat(existeix, capacitat)) {
    existeix.oblidarCapacitat(capacitat);
    mostrarMissatge(`${existeix.nom} ha oblidat la capacitat: ${capacitat}`);
  } else {
    mostrarMissatge(
      `${existeix.nom} no té la capacitat: ${capacitat} i per tant no la pot oblidar.`
    );
  }
}
// Función auxiliar para verificar si un existeix tiene una capacitat específica
function existeixCapacitat(existeix, capacitat) {
  if (!existeix.capacitatsActives || existeix.capacitatsActives.length === 0)
    return false;

  for (let i = 0; i < existeix.capacitatsActives.length; i++) {
    if (existeix.capacitatsActives[i] === capacitat) {
      return true;
    }
  }
  return false;
}
function assignarCasClinic() {
  const dniVet = document.getElementById("dniVet").value;
  const idCC = document.getElementById("casclin").value;

  if (!dniVet || !idCC) {
    mostrarMissatge("Els camps dni i cas clínic son obligatoris.");
    return;
  }

  let veterinari = buscarVeterinari(dniVet);
  if (!veterinari) {
    mostrarMissatge("No hi ha veterinaris amb aquest dni.");
    return;
  }

  // Buscar el caso clínico por ID
  let casClinic = buscarCasClinic(idCC);
  if (!casClinic) {
    mostrarMissatge("No existeix el cas clínic especificat.");
    return;
  }

  // Verificar si ya tiene este caso asignado
  let jaAssignat = false;
  for (let i = 0; i < veterinari.intervencions.length; i++) {
    if (veterinari.intervencions[i].id == casClinic.idCC) {
      jaAssignat = true;
    }
  }
  if (jaAssignat) {
    mostrarMissatge("Aquest cas clínic ja està assignat a aquest veterinari.");
    return;
  }

  // Llamar al método desde el objeto veterinario
  if (veterinari.potAtendreCasClinic(casClinic)) {
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

function assignarAnimal() {
  const dniaux = document.getElementById("dniaux").value;
  const animal = document.getElementById("animal").value;
  let existe = buscarAuxiliar(dniaux);
  if (!existe) {
    mostrarMissatge("Aquest DNI no pertany a cap auxiliar.");
    return;
  }
  if (existe) {
    mostrarMissatge(existe.nom + existe.atendreAnimal(animal));
    return;
  }
}
function registrarTasca() {
  const dniaux = document.getElementById("dniaux").value;
  const tasca = document.getElementById("tasca").value;
  let existe = buscarAuxiliar(dniaux);
  if (!existe) {
    mostrarMissatge("Aquest DNI no pertany a cap auxiliar.");
    return;
  }
  if (existe) {
    mostrarMissatge(existe.nom + existe.realitzarTasca(tasca));
    return;
  }
}
