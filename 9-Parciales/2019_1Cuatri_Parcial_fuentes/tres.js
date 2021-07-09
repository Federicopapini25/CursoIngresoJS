/*Federico Nahuel Papini DIV H
Ejercicio Parcial 2019 Num 3: */

function mostrar()
{
    let precio;
    let porcentajeIngresado;
    let porcentajeFinal;
    let precioFinal;

    precio = prompt("Ingrese el precio: ");
    porcentajeIngresado =prompt ("Ingrese el porcentaje de Descuento: ");
    precio = parseFloat(precio);
    porcentajeIngresado =parseFloat(porcentajeIngresado);
    porcentajeFinal = precio * porcentajeIngresado/100;
    precioFinal = precio - porcentajeFinal;



    document.getElementById("elPrecioFinal").value = precioFinal;



}
