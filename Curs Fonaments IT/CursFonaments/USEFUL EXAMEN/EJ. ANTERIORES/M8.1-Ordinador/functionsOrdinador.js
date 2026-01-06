const ordenadores = [];
ordenadores.push(new Ordenador("Dell", "Inspire", "i7", 16, 512));
ordenadores.push(new Ordenador("Apple", "Macbook pro", "M3", 16, 1));
ordenadores.push(new Ordenador("Lenovo", "ThinkPad", "i9", 32, 1));
console.log(ordenadores);

function main() {
  for (let i = 1; i <= 2; i++) {
    let marca = prompt("Escribe la marca del pc " + i);
    let modelo = prompt("Escribe el modelo del pc " + i);
    let procesador = prompt("Escribe el procesador del pc " + i);
    let ram = parseInt(prompt("Escribe la ram del pc " + 1));
    let discoDuro = parseInt(prompt("Escribe el discoduro del pc " + 1));

    ordenadores.push(new Ordenador(marca, modelo, procesador, ram, discoDuro));
  }
  document.getElementById("mostrar").innerHTML = ordenadores;
}
function buscaMarca() {
  let marcaBuscada = prompt("Escribe la marca del pc que quieres buscar");
  let i = 0;
  let ordenador = null;
  while (i < ordenadores.length && ordenador == null) {
    if (marcaBuscada == ordenadores[i].marca) {
      ordenador = ordenadores[i];
    }
    i++;
  }
  if (ordenador != null) {
    document.getElementById("ordenadorEncontrado").innerHTML =
      ordenador.toString();
  } else {
    document.getElementById("ordenadorEncontrado").innerHTML =
      "No se han encontrado ordenadores con esta marca";
  }
}
