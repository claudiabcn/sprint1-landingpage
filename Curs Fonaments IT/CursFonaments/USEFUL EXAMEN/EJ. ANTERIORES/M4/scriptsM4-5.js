function mostrarDatos() {
      let missatge;
      let n1 = parseInt(document.getElementById("intro1").value)
      let n2 = parseInt(document.getElementById("intro2").value)
      let s = document.getElementById("introS").value


      if (s == "+")
        missatge = n1 + n2;
      else if (s == "-")
        missatge = n1 - n2;
      else if (s == "*")
        missatge = n1 * n2;
      else if (s == "/")
        missatge = n1 / n2;
      else
        missatge = "Has introduït malament aquest operador";
      document.getElementById("mostrar").innerHTML = missatge;
    }
