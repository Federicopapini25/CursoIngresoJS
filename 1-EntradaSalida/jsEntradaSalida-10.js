/* Federico Nahuel Papini, DIV H
Ejercicio E/S 10 BIS:

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let porcentaje;
	let descuento;
	let ingresoporcentaje;

	
	ingresoporcentaje=prompt("Ingrese Porcentaje a restar");
	importe= parseInt(document.getElementById("txtIdImporte").value);
	porcentaje = importe * ingresoporcentaje/100;
	descuento = importe - porcentaje;

	document.getElementById("txtIdResultado").value =descuento;



	/*
	let importe = parseInt(document.getElementById("txtIdImporte").value);
	let porcentaje = importe * 25/100;
	let descuento= importe - porcentaje;

	document.getElementById("txtIdResultado").value = descuento;
	*/
}
//txtIdResultado