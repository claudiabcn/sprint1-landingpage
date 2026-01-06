function mostrarDatos() {
      let missatge;
      let dia = parseInt(document.getElementById("introDia").value)
      let mes = parseInt(document.getElementById("introMes").value)
      let signo;
      if (isNaN(dia) || isNaN(mes)) {
        alert("Números introducidos no válidos")
      }
      else {
        switch (mes) {
          case 1:
            if (dia >= 1 && dia < 20)
              missatge = "Eres capricornio"
            else if (dia >= 20 && dia < 32)
              missatge = "Eres  Acuario"
            else
              alert("Error")
            break;
          case 2:
            if (dia >= 1 && dia < 19)
              missatge = "Eres  Acuario"
            else if (dia >= 19 && dia < 31)
              missatge = "Eres  Piscis"
            else
              alert("Error")
            break;
          case 3:
            if (dia >= 1 && dia < 21)
              missatge = "Eres  Piscis"
            else if (dia >= 21 && dia < 32)
              missatge = "Eres  Aries"
            else
              alert("Error")
            break;
          case 4:
            if (dia >= 1 && dia < 20)
              missatge = "Eres  aries"
            else if (dia >= 20 && dia < 31)
              missatge = "Eres  tauro"
            else
              alert("Error")
            break;
          case 5:
            if (dia >= 1 && dia < 21)
              missatge = "Eres  tauro"
            else if (dia >= 21 && dia < 32)
              missatge = "Eres  Géminis"
            else
              alert("Error")
            break;
          case 6:
            if (dia >= 1 && dia < 21)
              missatge = "Eres  Geminis"
            else if (dia >= 21 && dia < 31)
              missatge = "Eres  Cancer"
            else
              alert("Error")
            break;
          case 7:
            if (dia >= 1 && dia < 23)
              missatge = "Eres  Cancer"
            else if (dia >= 23 && dia < 32)
              missatge = "Eres  Leo"
            else
              alert("Error")
            break;
          case 8:
            if (dia >= 1 && dia < 23)
              missatge = "Eres  Leo"
            else if (dia >= 23 && dia < 32)
              missatge = "Eres  Virgo"
            else
              alert("Error")
            break;
          case 9:
            if (dia >= 1 && dia < 23)
              missatge = "Eres  Virgo"
            else if (dia >= 23 && dia < 31)
              missatge = "Eres  Libra"
            else
              alert("Error")
            break;
          case 10:
            if (dia >= 1 && dia < 23)
              missatge = "Eres  Libra"
            else if (dia >= 23 && dia < 32)
              missatge = "Eres Sagitario"
            else
              alert("Error")
            break;
          case 11:
            if (dia >= 1 && dia < 22)
              missatge = "Eres  Sagitario"
            else if (dia >= 22 && dia < 31)
              missatge = "Eres  Capricornio"
            else
              alert("Error")
            break;
          case 12:
            if (dia >= 1 && dia < 22)
              missatge = "Eres capricornio"
            else if (dia >= 22 && dia < 32)
              missatge = "Eres  Acuario"
            else
              alert("Error")
            break;

        }
      }

      document.getElementById("mostrar").innerHTML = missatge;
    }