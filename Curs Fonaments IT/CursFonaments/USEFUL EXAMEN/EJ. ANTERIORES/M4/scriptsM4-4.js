 function mostrarDatos() {
      let missatge;
      var mes=parseInt(document.getElementById("introMes").value)
      
          switch (mes) {
            case 1:
            missatge="Gener té 31 dies";
            break;
                case 2:
            missatge="Febrer té 28 dies";
            break;
                case 3:
            missatge="Març té 31 dies";
            break;
                case 4:
            missatge="Abril té 30 dies";
                  case 5:
            missatge="Maig té 31 dies";
            break;
                case 6:
            missatge="Juny té 30 dies";
            break;
                case 7:
            missatge="Juliol té 31 dies";
            break;
                case 8:
            missatge="Agost té 31 dies";
            break;
                     case 9:
            missatge="Setembre té 30 dies";
            break;
                case 10:
            missatge="Octubre té 31 dies";
            break;
                case 11:
            missatge="Novembre té 30 dies";
            break;
                case 12:
            missatge="Desembre té 31 dies";
            break;
                default:
            missatge="Error";
            break;

         }
 
        document.getElementById("mostrar").innerHTML = missatge;
}
 