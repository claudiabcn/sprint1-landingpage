const treballadors = [];
const escuderies = [];
const cotxes = [];

// ✅ Crear un objecte
let treballadorP1 = new Pilot("Claudia", "Alonso", 30, 5, 170, 60);
let treballadorM1 = new Mecanic("Pepe", "Lopez", 40, 1, true);
let escuderia1 = new Escuderia("Ferrari", 500000, "Italia");
let escuderia2 = new Escuderia("Mercedes", 400000, "Francia");
let escuderia3 = new Escuderia("Red Bull", 200000, "España");
let cotxe1 = new Cotxe(900, 180, "Blau", 85000);
let cotxe2 = new Cotxe(850, 160, "Vermell", 75000);
let cotxe3 = new Cotxe(1000, 190, "Negre", 99000);

treballadors.push(treballadorM1);
treballadors.push(treballadorP1);
escuderies.push(escuderia1);
escuderies.push(escuderia2);
escuderies.push(escuderia3);
cotxes.push(cotxe1);
cotxes.push(cotxe2);
cotxes.push(cotxe3);
escuderia1.cotxes.push(cotxe1);
escuderia1.cotxes.push(cotxe2);
escuderia1.cotxes.push(cotxe3);
escuderia1.treballadors.push(treballadorP1);
escuderia1.treballadors.push(treballadorM1);

// ✅ Mostrar info
console.log(treballadorM1);
console.log(treballadorP1);
console.log(escuderia3);
console.log(cotxes);

// ✅ Comprovar tipus
console.log(treballadorM1 instanceof Mecanic); // true ✅
console.log(escuderia1 instanceof Escuderia); // true ✅

// ✅ Provar mètodes
console.log(treballadorP1.toString());
console.log(treballadorM1.toString());

function buscarPilot(nom, cognom) {
  for (treballador of treballadors) {
    if (
      treballador.nom.toLowerCase() == nom.toLowerCase() &&
      treballador.cognom.toLowerCase() == cognom.toLowerCase() &&
      treballador instanceof Pilot
    ) {
      return treballador;
    }
  }
  return null;
}

function buscarMecanic(nom, cognom) {
  for (treballador of treballadors) {
    if (
      treballador.nom.toLowerCase() == nom.toLowerCase() &&
      treballador.cognom.toLowerCase() == cognom.toLowerCase() &&
      treballador instanceof Mecanic
    ) {
      return treballador;
    }
  }
  return null;
}

function buscarEscuderia(nomesc) {
  for (let escuderia of escuderies) {
    if (escuderia.nomesc.toLowerCase() === nomesc.toLowerCase()) {
      return escuderia;
    }
  }
  return null;
}

function mostrarMensaje(mensaje) {
  document.getElementById("mostrar").innerHTML = mensaje;
}

function crearTreballador() {
  const nom = document.getElementById("nom").value;
  const cognom = document.getElementById("cognom").value;
  const edat = parseInt(document.getElementById("edat").value);
  const antiguitat = parseInt(document.getElementById("antiguitat").value);
  const escuderia = document.getElementById("nomesc").value; // ✅ Variable correcta
  const altura = parseInt(document.getElementById("altura").value);
  const pes = parseInt(document.getElementById("pes").value);
  const esMecanic = document.getElementById("esMecanic").checked;
  const tipus = document.getElementById("tipus").value;

  // Buscar escudería una sola vez
  let escuderiaObj = buscarEscuderia(escuderia);

  if (tipus == "pilot") {
    let existe = buscarPilot(nom, cognom);
    if (!existe) {
      let pilot = new Pilot(nom, cognom, edat, antiguitat, altura, pes);
      treballadors.push(pilot);
      if (escuderiaObj) {
        escuderiaObj.treballadors.push(pilot);
      }
      mostrarMensaje("Pilot creat correctament");
    } else {
      mostrarMensaje("Ja existeix un pilot amb aquest nom i cognom");
    }
  }

  if (tipus == "mecanic") {
    let existe = buscarMecanic(nom, cognom);
    if (!existe) {
      let mecanic = new Mecanic(nom, cognom, edat, antiguitat, esMecanic);
      treballadors.push(mecanic);
      if (escuderiaObj) {
        escuderiaObj.treballadors.push(mecanic);
      }
      mostrarMensaje("Mecànic creat correctament");
    } else {
      mostrarMensaje("Ja existeix un mecànic amb aquest nom i cognom");
    }
  }
}

function mostrarTreballador() {
  const nom = document.getElementById("nom").value;
  const cognom = document.getElementById("cognom").value;
  const tipus = document.getElementById("tipus").value;

  if (tipus == "pilot") {
    let existe = buscarPilot(nom, cognom);

    if (!existe) {
      mostrarMensaje("No hi ha pilots amb aquest nom i cognom");
    } else {
      mostrarMensaje(existe.toString());
    }
  }

  if (tipus == "mecanic") {
    let existe = buscarMecanic(nom, cognom);

    if (!existe) {
      mostrarMensaje("No hi ha mecànics amb aquest nom i cognom");
    } else {
      mostrarMensaje(existe.toString());
    }
  }
}

function eliminarTreballador() {
  const nom = document.getElementById("nom").value;
  const cognom = document.getElementById("cognom").value;
  const tipus = document.getElementById("tipus").value;

  if (tipus == "pilot") {
    let existe = buscarPilot(nom, cognom);
    const i = treballadors.indexOf(existe);

    if (!existe) {
      mostrarMensaje("No hi ha pilots amb aquest nom i cognom");
    } else {
      treballadors.splice(i, 1);

      // También eliminarlo de la escudería
      for (let j = 0; j < escuderies.length; j++) {
        const index = escuderies[j].treballadors.indexOf(existe);
        if (index !== -1) {
          escuderies[j].treballadors.splice(index, 1);
        }
      }
      mostrarMensaje("Pilot eliminat correctament");
    }
  }

  if (tipus == "mecanic") {
    let existe = buscarMecanic(nom, cognom);
    const i = treballadors.indexOf(existe);

    if (!existe) {
      mostrarMensaje("No hi ha mecànics amb aquest nom i cognom");
    } else {
      treballadors.splice(i, 1);
      // También eliminarlo de la escudería
      for (let j = 0; j < escuderies.length; j++) {
        const index = escuderies[j].treballadors.indexOf(existe);
        if (index !== -1) {
          escuderies[j].treballadors.splice(index, 1);
        }
      }
      mostrarMensaje("Mecànic eliminat correctament");
    }
  }
}

function mostrarEscuderia() {
  const nomesc = document.getElementById("nomescInput").value; // ✅ ID único
  let existe = buscarEscuderia(nomesc);
  if (!existe) {
    document.getElementById("mostrarescuderiax").innerHTML =
      "No hi ha escuderies amb aquest nom.";
  } else {
    const mensajeCompleto =
      existe.toString() +
      "<br><br>" +
      existe.mostraTreballadorsEsc() +
      "<br><br>" +
      existe.mostraCotxesEsc();

    document.getElementById("mostrarescuderiax").innerHTML = mensajeCompleto;
  }
}

function mostrarBolid() {
  console.log(cotxes);
  document.getElementById("mostrartotscotxes").innerHTML = cotxes;
}
