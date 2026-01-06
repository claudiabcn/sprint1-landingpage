class Arquero extends Personaje {
  constructor(nombre) {
    super(nombre);

    this.precision = 75;
    this.alcance = 50;
  }

  obtenerClase() {
    return "Arquero";
  }

  habilidadEspecial() {
    return "Disparo Certero - Ataque a distancia con alta precisión";
  }

  //* UPDATE: Mejora de precisión al subir de nivel
  //* Los arqueros se vuelven más precisos con la experiencia

  subirNivel() {
    //* Ejecutamos la lógica base

    const resultado = super.subirNivel();

    //* EARLY RETURN si no subió de nivel

    if (!resultado) {
      return false;
    }

    //* Bonus de arquero: mejora de precisión (máximo 95%)
    //* KISS: Incremento simple y limitado

    if (this.precision < 95) {
      this.precision++;
    }

    return true;
  }

  //* UPDATE: Bonus especial al equipar arcos
  //* DRY: Extendemos equiparObjeto sin duplicar validaciones

  equiparObjeto(objeto) {
    //* Ejecutamos la lógica base

    const resultado = super.equiparObjeto(objeto);

    //* EARLY RETURN si falló

    if (!resultado.exito) {
      return resultado;
    }

    //* Verificamos si es un arco usando indexOf
    //* KISS: Búsqueda simple en el nombre

    if (objeto.tipo === "arma" && objeto.nombre.indexOf("arco") !== -1) {
      this.alcance += 10;
      resultado.mensaje += " (Alcance +10m)";
    }

    return resultado;
  }

  //* READ: Información extendida con estadísticas de arquero

  mostrarInfo() {
    let info = super.mostrarInfo();

    //* Añadimos estadísticas específicas

    info += "\nPrecisión: " + this.precision + "%";
    info += "\nAlcance: " + this.alcance + " metros";

    return info;
  }
}
