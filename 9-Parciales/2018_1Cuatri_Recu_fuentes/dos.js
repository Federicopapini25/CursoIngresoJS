/* PAPINI FEDERICO NAHUEL DIV H
EJERCICIO N2 REC PARCIAL 2018:
*/

function mostrar()
{
  let nombreIngresado;
  let localidadIngresada;

  nombreIngresado = document.getElementById("elNombre").value;
  localidadIngresada = document.getElementById("laLocalidad").value;
  alert("Usted se llama "+ nombreIngresado + " y vive en la localidad de " + localidadIngresada);
  document.getElementById("elNombre").value="";
  document.getElementById("laLocalidad").value="";
}
