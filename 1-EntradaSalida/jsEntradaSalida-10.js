/* Federico Nahuel Papini, DIV H
Ejercicio E/S 10:

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = parseInt(document.getElementById("txtIdImporte").value);
	let porcentaje = importe * 25/100;
	let descuento= importe - porcentaje;

	document.getElementById("txtIdResultado").value = descuento;
	
}
//txtIdResultado