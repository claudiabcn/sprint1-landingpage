function mostrarDatos() {
      let nombre = prompt("Nombre");
      let apellido = prompt("Apellido");
      let edad = prompt("Edad");

      let missatge

      if (edad > 18) {

        missatge=nombre+" "+apellido+" "+ "ets major de edat."

      } else {
         missatge=nombre+" "+apellido+" "+ "no ets major d'edat."

      }
      
        document.getElementById("mostrar").innerHTML = missatge;
    }