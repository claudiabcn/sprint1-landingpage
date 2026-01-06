class Personaje {
  constructor(nombre) {
    if (!nombre || nombre.trim() === "") {
      throw new Error("El nombre del personaje es obligatorio");
    }

    this.nombre = nombre;
    this.nivel = 1;
    this.habilidades = [];
    this.habilidadesOlvidadas = [];
    this.objetosEquipados = [];
    this.maxHabilidades = 8;
    this.maxObjetos = 5;
  }

  //* Método virtual para ser sobrescrito por clases hijas
  //* DRY: Define el contrato que todas las clases hijas deben cumplir

  obtenerClase() {
    return "Personaje Base";
  }

  //* Método virtual para habilidad especial

  habilidadEspecial() {
    return "Sin habilidad especial";
  }

  subirNivel() {
    //* Verificación del límite máximo

    if (this.nivel >= 100) {
      return false;
    }

    this.nivel++;
    return true;
  }

  //* CREATE: Aprende una nueva habilidad
  //* FAIL FAST: Múltiples validaciones con retornos tempranos

  aprenderHabilidad(habilidad) {
    //* Validación 1: Parámetro válido

    if (!habilidad) {
      return {
        exito: false,
        mensaje: "Habilidad inválida",
      };
    }

    //* Validación 2: Nivel mínimo
    //* EARLY RETURN si no cumple requisitos

    if (habilidad.nivelMinimo > this.nivel) {
      return {
        exito: false,
        mensaje: "No cumples el nivel mínimo para aprender " + habilidad.nombre,
      };
    }

    //* Validación 3: Evitar duplicados
    //* Usamos for...of para buscar si ya existe

    for (let hab of this.habilidades) {
      if (hab.nombre === habilidad.nombre) {
        return {
          exito: false,
          mensaje: "Ya conoces la habilidad " + habilidad.nombre,
        };
      }
    }

    //* Validación 4: Límite de habilidades

    if (this.habilidades.length >= this.maxHabilidades) {
      return {
        exito: false,
        mensaje:
          "Has alcanzado el límite de habilidades. Debes olvidar una primero.",
      };
    }

    //* CREATE: Si todas las validaciones pasan, aprendemos la habilidad
    //* Ahora podemos usar push() que está permitido

    this.habilidades.push(habilidad);

    return {
      exito: true,
      mensaje: "Has aprendido " + habilidad.nombre,
    };
  }

  //* DELETE: Olvida una habilidad y la mueve al historial
  //* CRUD: Implementa la operación Delete del patrón

  olvidarHabilidad(nombreHabilidad) {
    //* EARLY RETURN: Validación de parámetro

    if (!nombreHabilidad) {
      return {
        exito: false,
        mensaje: "Nombre de habilidad inválido",
      };
    }

    //* Buscamos el índice de la habilidad

    let indice = -1;
    for (let i = 0; i < this.habilidades.length; i++) {
      if (this.habilidades[i].nombre === nombreHabilidad) {
        indice = i;
        // No usamos break porque está prohibido fuera de switch
        i = this.habilidades.length; // Terminamos el bucle
      }
    }

    //* EARLY RETURN si no encontramos la habilidad

    if (indice === -1) {
      return {
        exito: false,
        mensaje: "No conoces esa habilidad",
      };
    }

    //* DELETE de habilidades y CREATE en historial

    const habilidadOlvidada = this.habilidades[indice];
    this.habilidades.splice(indice, 1);
    this.habilidadesOlvidadas.push(habilidadOlvidada);

    return {
      exito: true,
      mensaje: "Has olvidado " + nombreHabilidad,
    };
  }

  //* CREATE: Equipa un objeto al personaje
  //* FAIL FAST con múltiples validaciones

  equiparObjeto(objeto) {
    //* Validación 1: Objeto válido

    if (!objeto) {
      return {
        exito: false,
        mensaje: "Objeto inválido",
      };
    }

    //* Validación 2: Requisitos del objeto
    //* DRY: Delegamos la verificación al propio objeto

    if (!objeto.puedeSerUsadoPor(this)) {
      return {
        exito: false,
        mensaje:
          "No puedes usar " + objeto.nombre + " (requisitos no cumplidos)",
      };
    }

    //* Validación 3: Límite de objetos

    if (this.objetosEquipados.length >= this.maxObjetos) {
      return {
        exito: false,
        mensaje: "Ya tienes el máximo de objetos equipados",
      };
    }

    //* CREATE: Equipamos el objeto

    this.objetosEquipados.push(objeto);

    return {
      exito: true,
      mensaje: "Has equipado " + objeto.nombre,
    };
  }

  //* READ: Muestra toda la información del personaje
  //* DRY: Un solo lugar para formatear la información completa

  mostrarInfo() {
    let info = "Nombre: " + this.nombre + "\n";
    info += "Clase: " + this.obtenerClase() + "\n";
    info += "Nivel: " + this.nivel + "\n";

    //* Sección de habilidades conocidas

    info +=
      "\nHabilidades conocidas (" +
      this.habilidades.length +
      "/" +
      this.maxHabilidades +
      "):\n";

    if (this.habilidades.length === 0) {
      info += "- Ninguna\n";
    } else {
      for (let hab of this.habilidades) {
        info += "- " + hab.toString() + "\n";
      }
    }

    //* Sección de habilidades olvidadas

    info += "\nHabilidades olvidadas:\n";

    if (this.habilidadesOlvidadas.length === 0) {
      info += "- Ninguna\n";
    } else {
      for (let hab of this.habilidadesOlvidadas) {
        info += "- " + hab.toString() + "\n";
      }
    }

    //* Sección de objetos equipados

    info +=
      "\nObjetos equipados (" +
      this.objetosEquipados.length +
      "/" +
      this.maxObjetos +
      "):\n";

    if (this.objetosEquipados.length === 0) {
      info += "- Ninguno\n";
    } else {
      for (let obj of this.objetosEquipados) {
        info += "- " + obj.toString() + "\n";
      }
    }

    info += "\nHabilidad especial: " + this.habilidadEspecial();

    return info;
  }

  //* READ: Representación resumida del personaje
  //* KISS: Solo la información esencial

  toString() {
    return (
      this.nombre + " - " + this.obtenerClase() + " (Nivel " + this.nivel + ")"
    );
  }
}
