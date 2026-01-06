
const nombres = ['Ana', 'Luis', 'Pedro', 'María', 'Carlos'];

function mostrarDatos() {
    let nam = document.getElementById("nam").value;
    let encontrado=false;

for (let i=0 ; i < nombres.length ; i++){
    if (nam == nombres[i])
         {encontrado=true
              } } 
    if (encontrado==true)
         { alert("Sí") } 
           
        else {
            alert("No existe");
        }
}