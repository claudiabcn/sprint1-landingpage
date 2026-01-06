function operar() {
    let n1 = document.getElementById('n1').valueAsNumber;
    let n2 = document.getElementById('n2').valueAsNumber;
    let n3 = document.getElementById('n3').valueAsNumber;
    let area = n1 * n2 * n3;
    const PAINT = 12;
    let mensaje;

    alert("Necesitarás pintar: " + area + " metros cuadrados de pared");

    alert("Necesitarás comprar: " + (area / PAINT) + " litros de pintura");

    mensaje = "Compra " + (area / PAINT) + " litros de pintura."

    document.getElementById("mostrar").innerHTML=mensaje;

}
