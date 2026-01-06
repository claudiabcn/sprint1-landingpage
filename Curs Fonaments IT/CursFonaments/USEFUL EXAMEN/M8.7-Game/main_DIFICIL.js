const personajes = [];

//* Lista de todas las habilidades disponibles en el juego

const habilidadesDisponibles = [
  new Habilidad("Ataque Básico", 1),
  new Habilidad("Defensa", 1),
  new Habilidad("Curación Menor", 5),
  new Habilidad("Bola de Fuego", 8),
  new Habilidad("Golpe Heroico", 10),
  new Habilidad("Escudo Mágico", 12),
  new Habilidad("Flecha Envenenada", 15),
  new Habilidad("Disparo Múltiple", 18),
  new Habilidad("Torbellino", 20),
  new Habilidad("Invisibilidad", 22),
  new Habilidad("Teleportación", 25),
  new Habilidad("Invocación Elemental", 30),
  new Habilidad("Furia Berserker", 35),
  new Habilidad("Lluvia de Meteoros", 40),
  new Habilidad("Resurrección", 50),
];

//* Objeto que almacena todos los objetos disponibles por nombre

const objetosDisponibles = {
  "Poción de Vida": new Objeto("Poción de Vida", "pocion", 1),
  "Poción de Maná": new Objeto("Poción de Maná", "pocion", 1),
  "Anillo de Protección": new Objeto("Anillo de Protección", "armadura", 5),
  "Botas de Velocidad": new Objeto("Botas de Velocidad", "armadura", 10),
  "Espada de Hierro": new Objeto("Espada de Hierro", "arma", 1, "Guerrero"),
  "Espada de Acero": new Objeto("Espada de Acero", "arma", 15, "Guerrero"),
  "Armadura de Placas": new Objeto(
    "Armadura de Placas",
    "armadura",
    20,
    "Guerrero"
  ),
  "Escudo del Guardián": new Objeto(
    "Escudo del Guardián",
    "armadura",
    25,
    "Guerrero"
  ),
  "Varita de Aprendiz": new Objeto("Varita de Aprendiz", "arma", 1, "Mago"),
  "Bastón Arcano": new Objeto("Bastón Arcano", "arma", 20, "Mago"),
  "Túnica Mística": new Objeto("Túnica Mística", "armadura", 15, "Mago"),
  "Orbe de Poder": new Objeto("Orbe de Poder", "arma", 30, "Mago"),
  "Arco Corto": new Objeto("Arco Corto", "arma", 1, "Arquero"),
  "Arco Largo": new Objeto("Arco Largo", "arma", 10, "Arquero"),
  "Carcaj Mágico": new Objeto("Carcaj Mágico", "armadura", 15, "Arquero"),
  "Arco Élfico": new Objeto("Arco Élfico", "arma", 25, "Arquero"),
};

//* Función que busca una habilidad por nombre (case-insensitive)

function buscarHabilidad(nombre) {
  const nombreBusqueda = nombre.trim().toLowerCase();

  for (let hab of habilidadesDisponibles) {
    if (hab.nombre.toLowerCase() === nombreBusqueda) {
      return hab;
    }
  }
  return null;
}

//* Función que busca un objeto por nombre (case-insensitive)

function buscarObjeto(nombre) {
  const nombreBusqueda = nombre.trim().toLowerCase();

  for (let nombreObjeto in objetosDisponibles) {
    if (nombreObjeto.toLowerCase() === nombreBusqueda) {
      return objetosDisponibles[nombreObjeto];
    }
  }
  return null;
}

function mostrarDetallePersonaje() {
  const nombreInput = document.getElementById("nombrePersonajeSeleccionado");
  const nombre = nombreInput.value.trim();
  const detalle = document.getElementById("detallePersonaje");

  //* Búsqueda case-insensitive del personaje

  const personaje = buscarPersonajePorNombre(nombre);

  if (!personaje) {
    detalle.innerHTML = "Personaje no encontrado.";
    return;
  }

  //* Construimos el HTML de la sección de detalles

  let htmlDetalle = `
Información del Personaje:
${personaje.mostrarInfo()}

Subir de Nivel:
<button onclick="subirNivel()">Subir Nivel</button>

Aprender Habilidad:
Nombre de la habilidad:
<input type="text" id="nombreHabilidadAprender" />
<button onclick="aprenderHabilidad()">Aprender</button>
Habilidades disponibles: ${habilidadesDisponibles
    .map((h) => h.nombre)
    .join(", ")}

Olvidar Habilidad:
Nombre de la habilidad:
<input type="text" id="nombreHabilidadOlvidar" />
<button onclick="olvidarHabilidad()">Olvidar</button>

Equipar Objeto:
Nombre del objeto:
<input type="text" id="nombreObjetoEquipar" />
<button onclick="equiparObjeto()">Equipar</button>
Objetos disponibles: ${Object.keys(objetosDisponibles).join(", ")}

Objetos Equipados:
`;

  if (personaje.objetosEquipados.length === 0) {
    htmlDetalle += "No hay objetos equipados";
  } else {
    for (let obj of personaje.objetosEquipados) {
      htmlDetalle += "- " + obj.toString() + "\n";
    }
  }

  detalle.innerText = htmlDetalle;
}

//* Función para subir de nivel al personaje

function subirNivel() {
  const nombreInput = document.getElementById("nombrePersonajeSeleccionado");
  const nombre = nombreInput.value.trim();

  if (!nombre) {
    alert("Debes introducir el nombre de un personaje");
    return;
  }

  const personaje = buscarPersonajePorNombre(nombre);

  if (!personaje) {
    alert("Personaje no encontrado");
    return;
  }

  if (personaje.subirNivel()) {
    alert(personaje.nombre + " ha subido al nivel " + personaje.nivel);
    mostrarDetallePersonaje();
    actualizarListaPersonajes();
  } else {
    alert(personaje.nombre + " ya está en el nivel máximo");
  }
}

//* Función para aprender una nueva habilidad

function aprenderHabilidad() {
  const nombrePersonaje = document
    .getElementById("nombrePersonajeSeleccionado")
    .value.trim();
  const nombreHabilidad = document
    .getElementById("nombreHabilidadAprender")
    .value.trim();

  if (!nombrePersonaje) {
    alert("Debes introducir el nombre de un personaje");
    return;
  }

  if (!nombreHabilidad) {
    alert("Debes introducir el nombre de una habilidad");
    return;
  }

  const personaje = buscarPersonajePorNombre(nombrePersonaje);

  if (!personaje) {
    alert("Personaje no encontrado");
    return;
  }

  const habilidad = buscarHabilidad(nombreHabilidad);

  if (!habilidad) {
    alert(
      "Habilidad '" +
        nombreHabilidad +
        "' no existe. Verifica el nombre exacto."
    );
    //* Sugerimos habilidades similares
    const sugerencias = habilidadesDisponibles.filter(
      (h) =>
        h.nombre.toLowerCase().indexOf(nombreHabilidad.toLowerCase()) !== -1
    );
    if (sugerencias.length > 0) {
      alert(
        "¿Quisiste decir: " + sugerencias.map((h) => h.nombre).join(", ") + "?"
      );
    }
    return;
  }

  const resultado = personaje.aprenderHabilidad(habilidad);
  alert(resultado.mensaje);

  if (resultado.exito) {
    document.getElementById("nombreHabilidadAprender").value = "";
    mostrarDetallePersonaje();
  }
}

//* Función para olvidar una habilidad

function olvidarHabilidad() {
  const nombrePersonaje = document
    .getElementById("nombrePersonajeSeleccionado")
    .value.trim();
  const nombreHabilidad = document
    .getElementById("nombreHabilidadOlvidar")
    .value.trim();

  if (!nombrePersonaje) {
    alert("Debes introducir el nombre de un personaje");
    return;
  }

  if (!nombreHabilidad) {
    alert("Debes introducir el nombre de una habilidad");
    return;
  }

  const personaje = buscarPersonajePorNombre(nombrePersonaje);

  if (!personaje) {
    alert("Personaje no encontrado");
    return;
  }

  const resultado = personaje.olvidarHabilidad(nombreHabilidad);
  alert(resultado.mensaje);

  if (resultado.exito) {
    document.getElementById("nombreHabilidadOlvidar").value = "";
    mostrarDetallePersonaje();
  }
}

//* Función para equipar un objeto

function equiparObjeto() {
  const nombrePersonaje = document
    .getElementById("nombrePersonajeSeleccionado")
    .value.trim();
  const nombreObjeto = document
    .getElementById("nombreObjetoEquipar")
    .value.trim();

  if (!nombrePersonaje) {
    alert("Debes introducir el nombre de un personaje");
    return;
  }

  if (!nombreObjeto) {
    alert("Debes introducir el nombre de un objeto");
    return;
  }

  const personaje = buscarPersonajePorNombre(nombrePersonaje);

  if (!personaje) {
    alert("Personaje no encontrado");
    return;
  }

  const objeto = buscarObjeto(nombreObjeto);

  if (!objeto) {
    alert(
      "Objeto '" + nombreObjeto + "' no existe. Verifica el nombre exacto."
    );
    //* Sugerimos objetos similares
    const sugerencias = [];
    for (let nombreObj in objetosDisponibles) {
      if (nombreObj.toLowerCase().indexOf(nombreObjeto.toLowerCase()) !== -1) {
        sugerencias.push(nombreObj);
      }
    }
    if (sugerencias.length > 0) {
      alert("¿Quisiste decir: " + sugerencias.join(", ") + "?");
    }
    return;
  }

  const resultado = personaje.equiparObjeto(objeto);
  alert(resultado.mensaje);

  if (resultado.exito) {
    document.getElementById("nombreObjetoEquipar").value = "";
    mostrarDetallePersonaje();
  }
}

//* Función para crear un nuevo personaje

//* Función helper para buscar personaje por nombre (case-insensitive)

function buscarPersonajePorNombre(nombre) {
  for (let personaje of personajes) {
    if (personaje.nombre.toLowerCase() === nombre) {
      return personaje;
    }
  }
  return null;
}

function crearPersonaje() {
  const nombre = document.getElementById("nombrePersonaje").value.trim();
  const clase = document.getElementById("clasePersonaje").value.toLowerCase();

  if (!nombre) {
    alert("El nombre es obligatorio");
    return;
  }

  //* Verificamos que el nombre sea único (case-insensitive)

  if (buscarPersonajePorNombre(nombre)) {
    alert("Ya existe un personaje con ese nombre. Elige otro nombre.");
    return;
  }

  let personaje;

  switch (clase) {
    case "guerrero":
      personaje = new Guerrero(nombre);
      break;
    case "mago":
      personaje = new Mago(nombre);
      break;
    case "arquero":
      personaje = new Arquero(nombre);
      break;
    default:
      alert("Clase no válida. Usa: guerrero, mago o arquero");
      return;
  }

  personajes[nombre] = personaje;

  alert("Personaje " + nombre + " creado como " + personaje.obtenerClase());

  document.getElementById("nombrePersonaje").value = "";
  document.getElementById("clasePersonaje").value = "";

  console.log(personajes);
}
