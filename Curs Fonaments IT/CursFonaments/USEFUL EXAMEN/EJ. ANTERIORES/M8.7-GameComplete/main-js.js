// main.js


//* Archivo principal del juego - Conecta las clases con la interfaz HTML
//* Solo usamos innerHTML para cambiar contenido, sin tocar estilos


//* Arrays globales que almacenan todos los datos del juego
//* Son como las "bases de datos" de nuestro juego

const personajes = [];


//* Lista de todas las habilidades disponibles en el juego
//* Cada habilidad tiene un nombre y un nivel mínimo para aprenderla

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
    new Habilidad("Resurrección", 50)
];


//* Lista de todos los objetos disponibles en el juego
//* Algunos objetos pueden ser usados por cualquier clase, otros son específicos

const objetosDisponibles = [
    
    //* Objetos que cualquier personaje puede usar
    
    new Objeto("Poción de Vida", "pocion", 1),
    new Objeto("Poción de Maná", "pocion", 1),
    new Objeto("Anillo de Protección", "armadura", 5),
    new Objeto("Botas de Velocidad", "armadura", 10),
    
    
    //* Objetos exclusivos para Guerreros
    
    new Objeto("Espada de Hierro", "arma", 1, "Guerrero"),
    new Objeto("Espada de Acero", "arma", 15, "Guerrero"),
    new Objeto("Armadura de Placas", "armadura", 20, "Guerrero"),
    new Objeto("Escudo del Guardián", "armadura", 25, "Guerrero"),
    
    
    //* Objetos exclusivos para Magos
    
    new Objeto("Varita de Aprendiz", "arma", 1, "Mago"),
    new Objeto("Bastón Arcano", "arma", 20, "Mago"),
    new Objeto("Túnica Mística", "armadura", 15, "Mago"),
    new Objeto("Orbe de Poder", "arma", 30, "Mago"),
    
    
    //* Objetos exclusivos para Arqueros
    
    new Objeto("Arco Corto", "arma", 1, "Arquero"),
    new Objeto("Arco Largo", "arma", 10, "Arquero"),
    new Objeto("Carcaj Mágico", "armadura", 15, "Arquero"),
    new Objeto("Arco Élfico", "arma", 25, "Arquero")
];


//* Función que actualiza la lista de personajes en la pantalla
//* Se ejecuta cada vez que creamos un nuevo personaje

function actualizarListaPersonajes() {
    
    //* Obtenemos los elementos HTML que vamos a modificar
    
    const lista = document.getElementById("listaPersonajes");
    const selector = document.getElementById("selectorPersonaje");
    
    
    //* Si no hay personajes creados, mostramos un mensaje
    
    if (personajes.length === 0) {
        lista.innerHTML = "<p>No hay personajes creados</p>";
        selector.innerHTML = '<option value="">Selecciona un personaje</option>';
        return;
    }
    
    
    //* Construimos el HTML para mostrar todos los personajes
    
    let htmlLista = "";
    let htmlSelector = '<option value="">Selecciona un personaje</option>';
    
    
    //* Recorremos todos los personajes
    
    for (let i = 0; i < personajes.length; i++) {
        const p = personajes[i];
        
        
        //* Añadimos cada personaje a la lista visible
        
        htmlLista += "<div><strong>" + p.toString() + "</strong></div>";
        
        
        //* Añadimos cada personaje al selector
        
        htmlSelector += '<option value="' + i + '">' + p.toString() + '</option>';
    }
    
    
    //* Actualizamos el HTML
    
    lista.innerHTML = htmlLista;
    selector.innerHTML = htmlSelector;
}


//* Función que muestra todos los detalles del personaje seleccionado
//* Esta función actualiza toda la sección de gestión

function mostrarDetallePersonaje() {
    
    //* Obtenemos qué personaje está seleccionado
    
    const selector = document.getElementById("selectorPersonaje");
    const indice = Number(selector.value);
    const detalle = document.getElementById("detallePersonaje");
    
    
    //* Si no hay ningún personaje seleccionado, mostramos mensaje
    
    if (selector.value === "" || isNaN(indice)) {
        detalle.innerHTML = '<p style="text-align: center; padding: 20px;">Selecciona un personaje para ver sus detalles y opciones de gestión</p>';
        return;
    }
    
    
    //* Obtenemos el personaje del array
    
    const personaje = personajes[indice];
    
    
    //* Verificamos que el personaje existe
    
    if (!personaje) {
        detalle.innerHTML = '<p style="color: red;">Error: Personaje no encontrado</p>';
        return;
    }
    
    
    //* Construimos todo el HTML de la sección de detalles
    //* Incluimos TODA la estructura porque la reemplazamos completa
    
    let htmlDetalle = `
        <h3>Información del Personaje</h3>
        <div id="infoPersonaje"><pre>${personaje.mostrarInfo()}</pre></div>
        
        <h4>Subir de Nivel</h4>
        <button onclick="subirNivel()">Subir Nivel</button>
        
        <h4>Aprender Habilidad</h4>
        <select id="habilidadDisponible">
            <option value="">Selecciona una habilidad</option>`;
    
    
    //* Añadimos las habilidades disponibles para aprender
    
    for (let hab of habilidadesDisponibles) {
        
        //* Verificamos si ya conoce esta habilidad
        
        let yaConocida = false;
        
        for (let habConocida of personaje.habilidades) {
            if (habConocida.nombre === hab.nombre) {
                yaConocida = true;
                habConocida = personaje.habilidades[personaje.habilidades.length - 1];
            }
        }
        
        
        //* Solo mostramos las que no conoce
        
        if (!yaConocida) {
            let textoOpcion = hab.toString();
            
            if (hab.nivelMinimo > personaje.nivel) {
                textoOpcion += " (Requiere nivel " + hab.nivelMinimo + ")";
            }
            
            htmlDetalle += '<option value="' + hab.nombre + '">' + textoOpcion + '</option>';
        }
    }
    
    htmlDetalle += `
        </select>
        <button onclick="aprenderHabilidad()">Aprender</button>
        
        <h4>Olvidar Habilidad</h4>
        <select id="habilidadAprendida">
            <option value="">Selecciona una habilidad</option>`;
    
    
    //* Añadimos las habilidades que puede olvidar
    
    for (let hab of personaje.habilidades) {
        htmlDetalle += '<option value="' + hab.nombre + '">' + hab.toString() + '</option>';
    }
    
    htmlDetalle += `
        </select>
        <button onclick="olvidarHabilidad()">Olvidar</button>
        
        <h4>Equipar Objeto</h4>
        <select id="objetoDisponible">
            <option value="">Selecciona un objeto</option>`;
    
    
    //* Añadimos los objetos disponibles
    
    for (let i = 0; i < objetosDisponibles.length; i++) {
        const obj = objetosDisponibles[i];
        let textoOpcion = obj.toString();
        
        if (!obj.puedeSerUsadoPor(personaje)) {
            textoOpcion += " (No cumples requisitos)";
        }
        
        htmlDetalle += '<option value="' + i + '">' + textoOpcion + '</option>';
    }
    
    htmlDetalle += `
        </select>
        <button onclick="equiparObjeto()">Equipar</button>
        
        <h4>Objetos Equipados</h4>
        <div id="objetosEquipados">`;
    
    
    //* Añadimos los objetos equipados
    
    if (personaje.objetosEquipados.length === 0) {
        htmlDetalle += "<p>No hay objetos equipados</p>";
    } else {
        htmlDetalle += "<ul>";
        
        for (let obj of personaje.objetosEquipados) {
            htmlDetalle += "<li>" + obj.toString() + "</li>";
        }
        
        htmlDetalle += "</ul>";
    }
    
    htmlDetalle += "</div>";
    
    
    //* Actualizamos todo el contenido de una vez
    
    detalle.innerHTML = htmlDetalle;
}


//* Función para subir de nivel al personaje
//* Se ejecuta cuando el usuario hace clic en el botón "Subir Nivel"

function subirNivel() {
    
    //* Obtenemos el personaje seleccionado
    
    const selector = document.getElementById("selectorPersonaje");
    const indice = Number(selector.value);
    
    
    //* Si no hay personaje seleccionado, no hacemos nada
    
    if (selector.value === "" || isNaN(indice)) {
        return;
    }
    
    const personaje = personajes[indice];
    
    
    //* Verificamos que el personaje existe
    
    if (!personaje) {
        return;
    }
    
    
    //* Intentamos subir de nivel
    
    if (personaje.subirNivel()) {
        alert(personaje.nombre + " ha subido al nivel " + personaje.nivel);
        
        //* Actualizamos toda la sección de detalles
        
        mostrarDetallePersonaje();
    } else {
        alert(personaje.nombre + " ya está en el nivel máximo");
    }
}


//* Función para aprender una nueva habilidad

function aprenderHabilidad() {
    
    //* Obtenemos el personaje y la habilidad seleccionados
    
    const selector = document.getElementById("selectorPersonaje");
    const indice = Number(selector.value);
    const nombreHabilidad = document.getElementById("habilidadDisponible").value;
    
    
    //* Verificamos que hay personaje y habilidad seleccionados
    
    if (selector.value === "" || isNaN(indice) || nombreHabilidad === "") {
        return;
    }
    
    const personaje = personajes[indice];
    
    if (!personaje) {
        return;
    }
    
    
    //* Buscamos el objeto Habilidad completo
    
    let habilidad = null;
    
    for (let hab of habilidadesDisponibles) {
        if (hab.nombre === nombreHabilidad) {
            habilidad = hab;
            hab = habilidadesDisponibles[habilidadesDisponibles.length - 1];
        }
    }
    
    
    //* Si no encontramos la habilidad, algo está mal
    
    if (!habilidad) {
        return;
    }
    
    
    //* Intentamos aprender la habilidad
    
    const resultado = personaje.aprenderHabilidad(habilidad);
    alert(resultado.mensaje);
    
    
    //* Actualizamos toda la sección
    
    mostrarDetallePersonaje();
}


//* Función para olvidar una habilidad

function olvidarHabilidad() {
    
    //* Obtenemos el personaje y la habilidad seleccionados
    
    const selector = document.getElementById("selectorPersonaje");
    const indice = Number(selector.value);
    const nombreHabilidad = document.getElementById("habilidadAprendida").value;
    
    
    //* Verificaciones básicas
    
    if (selector.value === "" || isNaN(indice) || nombreHabilidad === "") {
        return;
    }
    
    const personaje = personajes[indice];
    
    if (!personaje) {
        return;
    }
    
    
    //* Intentamos olvidar la habilidad
    
    const resultado = personaje.olvidarHabilidad(nombreHabilidad);
    alert(resultado.mensaje);
    
    
    //* Actualizamos toda la sección
    
    mostrarDetallePersonaje();
}


//* Función para equipar un objeto

function equiparObjeto() {
    
    //* Obtenemos el personaje y el objeto seleccionados
    
    const selector = document.getElementById("selectorPersonaje");
    const indicePersonaje = Number(selector.value);
    const indiceObjeto = Number(document.getElementById("objetoDisponible").value);
    
    
    //* Verificaciones de personaje
    
    if (selector.value === "" || isNaN(indicePersonaje)) {
        return;
    }
    
    
    //* Verificaciones de objeto
    
    if (document.getElementById("objetoDisponible").value === "" || isNaN(indiceObjeto)) {
        return;
    }
    
    
    //* Obtenemos el personaje y el objeto
    
    const personaje = personajes[indicePersonaje];
    const objeto = objetosDisponibles[indiceObjeto];
    
    
    //* Verificamos que ambos existen
    
    if (!personaje || !objeto) {
        return;
    }
    
    
    //* Intentamos equipar el objeto
    
    const resultado = personaje.equiparObjeto(objeto);
    alert(resultado.mensaje);
    
    
    //* Actualizamos toda la sección
    
    mostrarDetallePersonaje();
}


//* Función para crear un nuevo personaje

function crearPersonaje(e) {
    
    //* Evitamos que la página se recargue
    
    e.preventDefault();
    
    
    //* Obtenemos los datos del formulario
    
    const nombre = document.getElementById("nombrePersonaje").value.trim();
    const clase = document.getElementById("clasePersonaje").value;
    
    
    //* Verificamos que el nombre no esté vacío
    
    if (!nombre) {
        alert("El nombre es obligatorio");
        return;
    }
    
    
    //* Creamos el personaje según la clase elegida
    
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
            alert("Clase no válida");
            return;
    }
    
    
    //* Añadimos el personaje al array
    
    personajes.push(personaje);
    
    
    //* Confirmamos al usuario
    
    alert("Personaje " + nombre + " creado como " + clase);
    
    
    //* Limpiamos el formulario
    
    document.getElementById("nombrePersonaje").value = "";
    
    
    //* Actualizamos la lista de personajes
    
    actualizarListaPersonajes();
}


//* CONFIGURACIÓN INICIAL
//* Este código se ejecuta cuando se carga la página


//* Conectamos el formulario con la función crearPersonaje
document.getElementById("formPersonaje").onsubmit = crearPersonaje;


//* Conectamos el selector con la función mostrarDetallePersonaje
document.getElementById("selectorPersonaje").onchange = mostrarDetallePersonaje;


//* Mostramos la lista inicial (vacía)
actualizarListaPersonajes();


//* Mostramos mensaje inicial en la sección de detalles
document.getElementById("detallePersonaje").innerHTML = '<p style="text-align: center; padding: 20px;">Crea un personaje y selecciónalo para comenzar a gestionarlo</p>';