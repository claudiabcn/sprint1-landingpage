const colegios = [];

function crearColegio() {
  const nombre = document.getElementById("nombreAlta").value;
  const alumnos = parseInt(document.getElementById("alumnosAlta").value);
  const profesores = parseInt(document.getElementById("profesoresAlta").value);
  const patio = parseInt(document.getElementById("patioAlta").value);
  let i = buscarColegio(nombre);

  if (i != -1) {
    mostrarMensaje("Este colegio ya existe");
    return;
  }
  if (i == -1) {
    const colegio = new Colegio(nombre, alumnos, profesores, patio);
    colegios.push(colegio);
    console.log(colegios);
    mostrarMensaje("Colegio creado con éxito.");
  }
  document.getElementById("nombreAlta").value = "";
  document.getElementById("alumnosAlta").value = "";
  document.getElementById("profesoresAlta").value = "";
  document.getElementById("patioAlta").value = "";
}
function mostrarMensaje(mensaje) {
  document.getElementById("mensajeMostrado").innerHTML = mensaje;
}
function buscarColegio(nombre) {
  for (i = 0; i < colegios.length; i++) {
    if (nombre.toLowerCase() == colegios[i].nombre.toLowerCase()) {
      return i;
    }
  }
  return -1;
}
function verColegio() {
  const nombre = document.getElementById("nombreVer").value;
  let i = buscarColegio(nombre);
  if (i == -1) {
    mostrarMensaje("Este colegio no existe");
    return;
  }
  if (i != -1) {
    let mensaje = colegios[i].toString();
    mostrarMensaje(mensaje);
  }
}
function modificarColegio() {
    const nombre = document.getElementById("nombreMod").value.trim();
  const campo = document.getElementById("campoMod").value;
  const valor = parseInt(document.getElementById("valorMod").value, 10);
let i = buscarColegio(nombre);
let colegio = colegios[i]

switch(colegio)
  

}

function eliminarColegio() {
  const nombre = document.getElementById("nombreBaja").value;
  let i = buscarColegio(nombre);
  if (i === -1) {
    mostrarMensaje("Este colegio no existe");
    return;
  }
  colegios.splice(i, 1);
  mostrarMensaje("Colegio eliminado");
  document.getElementById("nombreBaja").value = "";
}
function mostrarTodos() {
  let resultado = "";
  for (const colegio of colegios) {
    resultado += colegio.toString() + "<br>";
  }
  document.getElementById("mensajeMostrado").innerHTML = resultado;
}
