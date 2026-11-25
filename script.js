
function calcular() {
    let cm = parseFloat(document.getElementById("cm").value);

    let mm = cm * 10;
    let metros = cm / 100;
    let kilometros = cm / 100000;
    let pulgadas = cm / 2.54;

    document.getElementById("mm").innerHTML = "Milímetros: " + mm.toFixed(2) + " mm";
    document.getElementById("metros").innerHTML = "Metros: " + metros.toFixed(4) + " m";
    document.getElementById("km").innerHTML = "Kilómetros: " + kilometros.toFixed(6) + " km";
    document.getElementById("pulgadas").innerHTML = "Pulgadas: " + pulgadas.toFixed(2) + " pulg";
}