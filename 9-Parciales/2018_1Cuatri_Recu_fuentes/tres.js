/* PAPINI FEDERICO NAHUEL DIV H
EJERCICIO N3 REC PARCIAL 2018:
*/

function mostrar()
{
    let precioIngresado;
    let porcentajeIngresado;
    let resultado;
    let precioFinal;

    precioIngresado = prompt("Ingrese el Precio: ");
    precioIngresado = parseFloat(precioIngresado);
    porcentajeIngresado = prompt ("Ingrese el porcentaje a aplicar: ");
    porcentajeIngresado = parseFloat(porcentajeIngresado);
    resultado = precioIngresado * porcentajeIngresado /100;
    precioFinal = precioIngresado - resultado;
    document.getElementById("elPrecioFinal").value = precioFinal;

    //elPrecioFinal 

}


