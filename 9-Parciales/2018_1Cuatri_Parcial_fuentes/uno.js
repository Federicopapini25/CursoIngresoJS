/*PAPINI FEDERICO NAHUEL DIV H
EJERCICIO PARCIAL 2018 N°1

Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por 
alert.
*/
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;


    ancho=prompt("Ingresar Ancho del rectangulo: ");
    ancho=parseFloat(ancho);
    largo=prompt("Ingresar las medidas del Largo del rectangulo: ");
    largo=parseFloat(largo);
    perimetro= (ancho + largo)*2;

    alert("El perimetro del rectangulo es: " + perimetro);
    
}
