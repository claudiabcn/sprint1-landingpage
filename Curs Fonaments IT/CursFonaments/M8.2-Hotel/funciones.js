// 0.- Definir array vacio  e introducir ejemplos. Mostrarlos por consola.

const hoteles = [];

let ritz = new Hotel("ritz", 300, 3, 3000);
let hilton = new Hotel("hilton", 400, 4, 4000);
let w = new Hotel("w", 500, 5, 5000);
let carlton = new Hotel("carlton", 100, 2, 1000);
let pepita = new Hotel("pepita", 100, 2, 1000);
hoteles.push(ritz);
hoteles.push(hilton);
hoteles.push(w);
hoteles.push(carlton);
hoteles.push(pepita);

console.log(hoteles);

function crearHotel() {
  // 1.- Recoger datos
  const nombreHotel = document.getElementById("nombreAlta");
  const nombre = nombreHotel.value.toLowerCase();
  const habEl = document.getElementById("habitacionesAlta");
  const plantasEl = document.getElementById("plantasAlta");
  const supEl = document.getElementById("superficieAlta");

  // 2.- Hacer la búsqueda de hotel por nombre
  let hotel = buscarHotel(nombre);

  // 3.- En función de la búsqueda, instancio el hotel y lo añado al array hoteles
  if (hotel == null) {
    const habitaciones = parseInt(habEl.value);
    const plantas = parseInt(plantasEl.value);
    const superficie = parseInt(supEl.value);

    // const myhotel = new Hotel(nombre, habitaciones, plantas, superficie);
    hoteles.push(new Hotel(nombre, habitaciones, plantas, superficie));
    hotel = hoteles[hoteles.length - 1];
    console.log(hotel.calcularMantenimiento());
  } else {
    console.log("El hotel ya está en nuestra aplicación");
  }

  // 4.- Limpiamos los datos, después.
  document.getElementById("nombreAlta").value = "";
  document.getElementById("habitacionesAlta").value = "";
  document.getElementById("plantasAlta").value = "";
  document.getElementById("superficieAlta").value = "";
}

function buscarHotel(nombre) {
  nombre = nombre.toLowerCase();

  for (let i = 0; i < hoteles.length; i++) {
    if (hoteles[i].nombre == nombre) {
      return hoteles[i];
    }
  }

  return null;
}

function buscarHotelPosicion(nombre) {
  nombre = nombre.toLowerCase();

  for (i = 0; i < hoteles.length; i++) {
    if (hoteles[i].nombre == nombre) {
      return i;
    }
  }

  return -1;
}

function verHotel() {
  // 1.- Recoger datos
  const nombreHotel = document.getElementById("nombreVer");
  const nombre = nombreHotel.value.toLowerCase();
  // 2.- Hacer la búsqueda de hotel por nombre
  let hotel = buscarHotel(nombre);
  // 3.- En función de la búsqueda, muestro el hotel.
  if (hotel != null) {
    document.getElementById("mostrarHotel").innerHTML =
      hotel.toString() + " " + hotel.calcularMantenimiento();
  } else {
    console.log("El hotel no existe, no se puede mostrar");
  }
}

function modificarHotel() {
  // 1.- Recoger datos
  const nombre = document.getElementById("nombreMod").value.trim();
  const campo = document.getElementById("campoMod").value;
  const valor = parseInt(document.getElementById("valorMod").value, 10);
  // 2.- Hacer la búsqueda de hotel por nombre
  const hotel = buscarHotel(nombre);
  // 3.- En función de la búsqueda, modifico el hotel.
  if (hotel) {
    switch (campo) {
      case "habitaciones":
        hotel.habitaciones = valor;
        break;
      case "plantas":
        hotel.plantas = valor;
        break;
      case "superficie":
        hotel.superficie = valor;
        break;
    }
    console.log(`Hotel "${nombre}" modificado correctamente.`);
  } else {
    console.log(`El hotel "${nombre}" no existe.`);
  }

  // Limpiar campos (OPCIONAL SIEMPRE)
  document.getElementById("nombreMod").value = "";
  document.getElementById("valorMod").value = "";

  console.log(hoteles);
}

function eliminarHotel() {
  // 1.- Recoger datos
  const nombreHotel = document.getElementById("nombreBaja");
  const nombre = nombreHotel.value.toLowerCase();
  // 2.- Hacer la búsqueda de hotel por nombre, pero me devuelve la posición NO el nombre. (Abajo tengo la versión con el nombre, pero hay que usar indexOf).
  let hotel = buscarHotelPosicion(nombre);
  // 3.- En función de la búsqueda, elimino el hotel.
  if (hotel != -1) {
    hoteles.splice(i, 1);
    console.log("El hotel se ha eliminado.");
  } else {
    console.log("El hotel no existe, no se puede eliminar");
  }
  nombreHotel.value = "";
  console.log(hoteles);
}
/*
if (hotel != null) {
    let indice = hoteles.indexOf(hotel);
    hoteles.splice(indice, 1);
    console.log("El hotel se ha eliminado.");
    */

function mostrarTodos() {
  let resultado = "";
  for (const hotel of hoteles) {
    resultado +=
      hotel.toString() + "<br>" + hotel.calcularMantenimiento() + "<br>";
  }
  document.getElementById("mostrarTodos").innerHTML = resultado;
  console.log(hoteles);
}

/*  MANERA 1 mostrarTodos:
  for (let i = 0; i < hoteles.length; i++) {
    console.log(hoteles[i].toString());
    console.log(hoteles[i].calcularMantenimiento());
  }
  
  MANERA 2 mostrarTodos:
  let resultado = "";
  for (let i = 0; i < hoteles.length; i++) {
    resultado += hoteles[i].toString() + "<br>" + hoteles[i].calcularMantenimiento() + "<br>";
  }
  document.getElementById("mostrarTodos").innerHTML = resultado; 
  */
