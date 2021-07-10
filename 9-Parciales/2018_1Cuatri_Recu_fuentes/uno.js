/*PAPINI FEDERICO NAHUEL DIV H
EJERCICIO N1 REC PARCIAL:
*/
function mostrar()
{
    let anchoRectangulo;
    let largoRectangulo;
    let perimetroRectangulo;

    anchoRectangulo = prompt("Ingrese el Ancho del Rectangulo: ");
    anchoRectangulo = parseFloat(anchoRectangulo);
    largoRectangulo = prompt("Ingrese el Largo del Rectangulo: ");
    largoRectangulo = parseFloat(largoRectangulo);
    perimetroRectangulo = (anchoRectangulo)*2 + (largoRectangulo)*2;
    alert("El Perimetro del Rectangulo es de " + perimetroRectangulo + " mts.");


}
