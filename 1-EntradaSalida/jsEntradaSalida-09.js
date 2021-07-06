/* Federico Nahuel Papini, DIV H
Ejercicio E/S 09:

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = parseInt(document.getElementById("txtIdSueldo").value); //Se puede usar el parseFloat 
	let porcentaje = sueldo * 10 /100;
	let aumento = sueldo + porcentaje;

	document.getElementById("txtIdResultado").value= aumento;

	
	
	
}
//"txtIdResultado"