class Mago extends Personaje {
  constructor(nombre) {
    super(nombre);

    //* Propiedades únicas del mago
    //* KISS: Solo añadimos lo esencial para diferenciar la clase

    this.mana = 100;
    this.bonusHechizos = 2;

    //* UPDATE: Los magos pueden aprender más habilidades

    this.maxHabilidades = 10;
  }

  obtenerClase() {
    return "Mago";
  }

  habilidadEspecial() {
    return "Lluvia de Fuego - Ataque mágico de área";
  }

  //* UPDATE: Los magos ganan maná al subir de nivel
  //* DRY: Extendemos la funcionalidad base sin duplicarla

  subirNivel() {
    //* Ejecutamos la lógica base

    const resultado = super.subirNivel();

    //* EARLY RETURN si no subió de nivel

    if (!resultado) {
      return false;
    }

    //* Bonus de mago: aumentar maná

    this.mana += 20;
    return true;
  }

  //* READ: Información extendida incluyendo maná
  //* DRY: Reutilizamos mostrarInfo() base y añadimos lo específico

  mostrarInfo() {
    //* Obtenemos la información base

    let info = super.mostrarInfo();

    //* Añadimos información específica del mago

    info += "\nManá: " + this.mana;

    return info;
  }
}
