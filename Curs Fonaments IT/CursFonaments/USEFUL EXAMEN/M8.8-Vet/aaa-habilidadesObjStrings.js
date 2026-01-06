function oblidarCapacitat() {
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
  if (existeixixCapacitat(existeix, capacitat)) {
    existeix.oblidarCapacitat(capacitat);
    mostrarMissatge(`${nombre} ha oblidat la capacitat: ${capacitat}`);
  } else {
    mostrarMissatge(`${nombre} no té la capacitat: ${capacitat}`);
  }
}

// Función auxiliar para verificar si un existeix tiene una capacitat específica
//Para habilidades como objetos:

function tieneHabilidadObjeto(personaje, nombreHabilidad) {
  if (!personaje.habilidades) return false;

  for (let i = 0; i < personaje.habilidades.length; i++) {
    if (personaje.habilidades[i].nombre === nombreHabilidad) {
      return true;
    }
  }
  return false;
}
//Para habilidades como strings:
//javascript
function tieneHabilidadString(personaje, nombreHabilidad) {
  if (!personaje.habilidades) return false;

  for (let i = 0; i < personaje.habilidades.length; i++) {
    if (personaje.habilidades[i] === nombreHabilidad) {
      return true;
    }
  }
  return false;
}
