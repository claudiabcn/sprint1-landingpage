        function juego() {
            
let numRandom = Math.floor(Math.random() * (4 - 1)) + 1
let tirada = document.getElementById("t1").value;
let mensaje;

if ((tirada!="tijeras") && (tirada!="papel" )&& (tirada!="piedra")){
        mensaje="Entiendo que no quieres jugar."
}

else if (numRandom==1 && tirada=="tijeras"){
        mensaje="Yo tijeras y tu "+tirada+". Empate."
}
else if (numRandom==1 && tirada=="papel"){
        mensaje="Yo tijeras y tu "+tirada+". Pierdes."
}
else if (numRandom==1 && tirada=="piedra"){
        mensaje="Yo tijeras y tu "+tirada+". Ganas."
}
else if (numRandom==2 && tirada=="tijeras"){
        mensaje="Yo papel y tu "+tirada+". Ganas."
}
else if (numRandom==2 && tirada=="papel"){
        mensaje="Yo papel y tu "+tirada+". Empate."
}
else if (numRandom==2 && tirada=="piedra"){
        mensaje="Yo papel y tu "+tirada+". Pierdes."
}
else if (numRandom==3 && tirada=="tijeras"){
        mensaje="Yo piedra y tu "+tirada+". Pierdes."
}
else if (numRandom==3 && tirada=="papel"){
        mensaje="Yo piedra y tu "+tirada+". Ganas."
}
else if (numRandom==3 && tirada=="piedra"){
        mensaje="Yo piedra y tu "+tirada+". Empate."
}


document.getElementById("mostrar").innerHTML=mensaje;



        }