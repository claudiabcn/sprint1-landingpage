const personajes = [];

const habilidadesDisponibles = [
  new Habilidad("Ataque", 1),
  new Habilidad("Defensa", 3),
  new Habilidad("Curación", 2),
  new Habilidad("Fuego", 4),
  new Habilidad("Golpe", 6),
  new Habilidad("Escudo", 2),
];

const objetosDisponibles = [
  new Objeto("Poción de Vida", "pocion", 1),
  new Objeto("Poción de Maná", "pocion", 1),
  new Objeto("Anillo de Protección", "armadura", 5),
  new Objeto("Botas de Velocidad", "armadura", 10),
  new Objeto("Espada de Hierro", "arma", 1, "Guerrero"),
  new Objeto("Espada de Acero", "arma", 15, "Guerrero"),
  new Objeto("Túnica Mística", "armadura", 15, "Mago"),
  new Objeto("Orbe de Poder", "arma", 30, "Mago"),
];

console.log(objetosDisponibles);
console.log(habilidadesDisponibles);

function mostrarMensaje(mensaje) {
  document.getElementById("mostrar").innerHTML = mensaje;
}

function buscarMago(nombre) {
  for (personaje of personajes) {
    if (
      personaje.nombre.toLowerCase() == nombre.toLowerCase() &&
      personaje instanceof Mago
    ) {
      return personaje;
    }
  }
  return null;
}
function buscarGuerrero(nombre) {
  for (personaje of personajes) {
    if (
      personaje.nombre.toLowerCase() == nombre.toLowerCase() &&
      personaje instanceof Guerrero
    ) {
      return personaje;
    }
  }
  return null;
}

function crearPersonaje() {
  const nombre = document.getElementById("nombre").value;
  const clase = document.getElementById("clase").value;
  if (!nombre || nombre.trim() === "") {
    console.log("El nombre del personaje es obligatorio");
  }

  if (clase == "mago") {
    let existe = buscarMago(nombre);
    if (!existe) {
      let mago = new Mago(nombre);
      personajes.push(mago);
      mostrarMensaje("Creado.");
    } else {
      mostrarMensaje("Ya existe, no se ha creado.");
    }
  }
  if (clase == "guerrero") {
    let existe = buscarGuerrero(nombre);
    if (!existe) {
      let guerrero = new Guerrero(nombre);
      personajes.push(guerrero);
      mostrarMensaje("Creado.");
    } else {
      mostrarMensaje("Ya existe, no se ha creado.");
    }
  }
  console.log(personajes);
}

function mostrarPersonaje() {
  const nombre = document.getElementById("nombre").value;
  const clase = document.getElementById("clase").value;

  if (clase == "mago") {
    let existe = buscarMago(nombre);

    if (!existe) {
      mostrarMensaje("No hay magos con este nombre");
    } else {
      mostrarMensaje(
        existe.toString() + "Habilidad especial: " + existe.habilidadEspecial()
      );
    }
  }

  if (clase == "guerrero") {
    let existe = buscarGuerrero(nombre);

    if (!existe) {
      mostrarMensaje("No hay guerreros con este nombre");
    } else {
      mostrarMensaje(
        existe.toString() + "Habilidad especial: " + existe.habilidadEspecial()
      );
    }
  }
}

function mostrarPersonajesCreados() {
  let resultado = "";
  for (const personaje of personajes) {
    resultado +=
      personaje.toString() + personaje.habilidadEspecial() + "<br><br>";
  }
  document.getElementById("mostrar").innerHTML = resultado;
  console.log(personajes);
}

function subirNivel() {
  const nombre = document.getElementById("nombre").value;
  const clase = document.getElementById("clase").value;

  if (clase == "mago") {
    let existe = buscarMago(nombre);

    if (!existe) {
      mostrarMensaje("No hay magos con este nombre");
    } else {
      existe.subirNivel();
      mostrarMensaje("El nivel ahora es " + existe.nivel);
    }
  }

  if (clase == "guerrero") {
    let existe = buscarGuerrero(nombre);

    if (!existe) {
      mostrarMensaje("No hay guerreros con este nombre");
    } else {
      existe.subirNivel();
      mostrarMensaje("El nivel ahora es " + existe.nivel);
    }
  }
}

function aprenderHabilidades() {
  const nombre = document.getElementById("nombre").value;
  const clase = document.getElementById("clase").value;
  const habilidad = document.getElementById("habilidad").value;

  if (!nombre) {
    console.log("Indica el nombre");
  }

  if (clase == "mago") {
    let existe = buscarMago(nombre);

    if (!existe) {
      mostrarMensaje("No hay magos con este nombre");
    }
    if (existe.aprenderHabilidad(habilidad)) {
      mostrarMensaje(" Ha adquirido la habilidad: " + habilidad);
    } else {
      mostrarMensaje(" No puede adquiririr más habilidades.");
    }
  }

  if (clase == "guerrero") {
    let existe = buscarGuerrero(nombre);

    if (!existe) {
      mostrarMensaje("No hay guerreros con este nombre");
    }
    if (existe.aprenderHabilidad(habilidad)) {
      mostrarMensaje(" Ha adquirido la habilidad: " + habilidad);
    } else {
      mostrarMensaje(" No puede adquiririr más habilidades.");
    }
  }
}

function olvidarHabilidades() {
  const nombre = document.getElementById("nombre").value;
  const clase = document.getElementById("clase").value;
  const habilidad = document.getElementById("habilidad").value;

  // Validar inputs
  if (!nombre || !clase || !habilidad) {
    mostrarMensaje("Por favor, completa todos los campos");
    return;
  }

  if (clase === "mago") {
    let existe = buscarMago(nombre);

    if (!existe) {
      mostrarMensaje("No hay magos con este nombre");
      return;
    }

    // Verificar si tiene la habilidad usando una función auxiliar
    if (tieneHabilidadPersonaje(existe, habilidad)) {
      existe.olvidarHabilidad(habilidad);
      mostrarMensaje(`${nombre} ha olvidado la habilidad: ${habilidad}`);
    } else {
      mostrarMensaje(`${nombre} no tiene la habilidad: ${habilidad}`);
    }
  }

  if (clase === "guerrero") {
    let existe = buscarGuerrero(nombre);

    if (!existe) {
      mostrarMensaje("No hay guerreros con este nombre");
      return;
    }

    // Verificar si tiene la habilidad usando una función auxiliar
    if (tieneHabilidadPersonaje(existe, habilidad)) {
      existe.olvidarHabilidad(habilidad);
      mostrarMensaje(`${nombre} ha olvidado la habilidad: ${habilidad}`);
    } else {
      mostrarMensaje(`${nombre} no tiene la habilidad: ${habilidad}`);
    }
  }
}

// Función auxiliar para verificar si un personaje tiene una habilidad específica
function tieneHabilidadPersonaje(personaje, nombreHabilidad) {
  if (!personaje.habilidades) return false;

  for (let i = 0; i < personaje.habilidades.length; i++) {
    // Si las habilidades son objetos, comparar por nombre
    if (
      typeof personaje.habilidades[i] === "object" &&
      personaje.habilidades[i].nombre
    ) {
      if (personaje.habilidades[i].nombre === nombreHabilidad) {
        return true;
      }
    }
    // Si las habilidades son strings simples
    else if (personaje.habilidades[i] === nombreHabilidad) {
      return true;
    }
  }
  return false;
}

function equiparObjetos() {
  const nombre = document.getElementById("nombre").value;
  const clase = document.getElementById("clase").value;
  const objetoEquipado = document.getElementById("objetoEquipado").value;

  if (clase == "mago") {
    let existe = buscarMago(nombre);

    if (!existe) {
      mostrarMensaje("No hay magos con este nombre");
      return;
    }
    // Llamar equiparObjeto() una sola vez y guardar el resultado
    if (existe.equiparObjeto(objetoEquipado)) {
      mostrarMensaje(nombre + " ha adquirido el objeto: " + objetoEquipado);
    } else {
      mostrarMensaje(nombre + " ha llegado al máximo de objetos equipados");
    }
  }

  if (clase == "guerrero") {
    let existe = buscarGuerrero(nombre);

    if (!existe) {
      mostrarMensaje("No hay guerreros con este nombre");
      return;
    }
    // Llamar equiparObjeto() una sola vez y guardar el resultado
    if (existe.equiparObjeto(objetoEquipado)) {
      mostrarMensaje(nombre + " ha adquirido el objeto: " + objetoEquipado);
    } else {
      mostrarMensaje(nombre + " ha llegado al máximo de objetos equipados");
    }
  }
}
