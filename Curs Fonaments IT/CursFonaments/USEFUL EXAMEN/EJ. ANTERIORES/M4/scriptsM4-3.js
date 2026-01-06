 function mostrarDatos() {
      let titulo = document.getElementById("titulo").value;
      let paro = document.getElementById("paro").value;
      let edad = parseInt(document.getElementById("edad").value);

      if ((edad > 18 && titulo == "si") || (paro == "si")) {

        alert("Tens beca");

      } else {

        alert("No tens beca");

      }
    }