class Guerrero extends Personaje {
  constructor(nombre) {
    super(nombre);

    this.resistenciaArmadura = 10;
  }

  //* READ: Identificación de la clase

  obtenerClase() {
    return "Guerrero";
  }

  //* READ: Habilidad especial temática del guerrero

  habilidadEspecial() {
    return "Golpe Poderoso - Daño aumentado con espadas";
  }

  //* UPDATE: Sobrescribimos equiparObjeto para añadir bonus de armadura
  //* DRY: Reutilizamos la lógica base y solo añadimos lo específico

  equiparObjeto(objeto) {
    //* Primero ejecutamos toda la lógica base

    const resultado = super.equiparObjeto(objeto);

    //* EARLY RETURN si el equipamiento falló

    if (!resultado.exito) {
      return resultado;
    }

    //* Si es una armadura, aplicamos el bonus de guerrero
    //* KISS: Lógica simple y directa

    if (objeto.tipo === "armadura") {
      this.resistenciaArmadura += 5;
      resultado.mensaje += " (Resistencia +5)";
    }

    return resultado;
  }
}
