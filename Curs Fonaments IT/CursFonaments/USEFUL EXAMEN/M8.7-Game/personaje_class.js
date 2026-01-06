class Personaje {
  constructor(nombre) {
    this.nombre = nombre.trim(); // Eliminamos espacios extra
    this.nivel = 1;
    this.habilidades = [];
    this.habilidadesOlvidadas = [];
    this.objetosEquipados = [];
  }

  //* Método virtual para ser sobrescrito por clases hijas

  obtenerClase() {
    return "Personaje Base";
  }

  //* Método virtual para habilidad especial

  habilidadEspecial() {
    return "Sin habilidad especial";
  }

  subirNivel() {
    const MAX_LEVEL = 10;

    if (this.nivel >= MAX_LEVEL) {
      return false;
    }

    this.nivel++;
    return true;
  }

  aprenderHabilidad(habilidad) {
    const MAX_HABILIDADES = 2;
    if (this.habilidades.length < MAX_HABILIDADES) {
      this.habilidades.push(habilidad);
      return true;
    }
    return false;
  }

  olvidarHabilidad(habilidad) {
    const index = this.habilidades.indexOf(habilidad);
    if (index > -1) {
      this.habilidadesOlvidadas.push(habilidad);
      this.habilidades.splice(index, 1);
      return true;
    }
    return false; // La habilidad no se encontró
  }

  equiparObjeto(objetoEquipado) {
    const MAX_OBJETOS = 2;
    if (this.objetosEquipados.length < MAX_OBJETOS) {
      this.objetosEquipados.push(objetoEquipado);
      return true;
    }
    return false;
  }

  toString() {
    return (
      this.nombre +
      " - " +
      this.obtenerClase() +
      " (Nivel " +
      this.nivel +
      " ). <br>" +
      "Habilidades: " +
      this.habilidades +
      "<br>" +
      "Habilidades olvidadas: " +
      this.habilidadesOlvidadas +
      "<br>" +
      "Objetos equipados: " +
      this.objetosEquipados +
      "<br>"
    );
  }
}
