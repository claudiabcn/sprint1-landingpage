function mostrarDatos() {

      let edad = document.getElementById("edad").valueAsNumber;

      if (edad <= 5) {

        document.getElementById("mostrarEdad").innerHTML = "Preescolar ";
      } else if (edad <= 11) {

        document.getElementById("mostrarEdad").innerHTML = "Primaria ";
      } else if (edad <= 15) {

        document.getElementById("mostrarEdad").innerHTML = "ESO ";
      } else if (edad <= 17) {

        document.getElementById("mostrarEdad").innerHTML = "Batxillerat ";
      } else if (edad <=  120) {

        document.getElementById("mostrarEdad").innerHTML = "FP o Universitat ";
              } else if (edad >= 120) {

        document.getElementById("mostrarEdad").innerHTML = "Edat massa elevada ";
      }
    }