function mostrarDatos() {
      let nombre = document.getElementById("nombre").value;
      let apellido = document.getElementById("apellido").value;
      let edad = document.getElementById("edad").value;


      window.alert("Su nombre es: " + nombre);
      window.alert("Su apellido es: " + apellido);
      window.alert("Su edad es: " + edad);

      console.log(nombre)
      console.log(apellido)
      console.log(edad)

      document.getElementById("Nombremostrado").innerHTML = "Su nombre es: " + nombre;
      document.getElementById("mostrarApellido").innerHTML = "Su apellido es: " + apellido;
      document.getElementById("mostrarEdad").innerHTML = "Su edad es: " + edad;


    }