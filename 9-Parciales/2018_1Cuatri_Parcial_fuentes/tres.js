/* PAPINI FEDERICO NAHUEL DIV H:
PARCIAL 2018 EJERCICIO 3:
*/

function mostrar()
{
    let precioIngresado;
    let porcentajeIngresado;
    let resultado;
    let p
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
