
function aux() {
let n1 = parseInt(document.getElementById("intro1").value)
let n2 = parseInt(document.getElementById("intro2").value)
return [n1,n2]
}

function suma() {
 let [n1,n2] = aux()
 let missatge = n1 + n2;
  document.getElementById("mostrar").innerHTML = missatge;
}

function resta() {
  let [n1,n2] = aux()
  let missatge = n1 - n2;
  document.getElementById("mostrar").innerHTML = missatge;
}
function multiplica() {
  let [n1,n2] = aux()
  let missatge = n1 * n2;
  document.getElementById("mostrar").innerHTML = missatge;
}
function divideix() {
  let [n1,n2] = aux()
  let missatge = n1 / n2;
  document.getElementById("mostrar").innerHTML = missatge;
}



