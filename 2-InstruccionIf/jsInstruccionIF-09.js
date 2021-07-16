/*PAPINI FEDERICO NAHUEL DIV H:
IF EJERCICIO N°09:

Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{	
	let numero;

	numero = Math.floor(Math.random()*10+1);
	alert("El numero Random es : " + numero) ;
	
}//Math.random() siempre devuelve un número menor que 1.
//Math.random()usado con Math.floor()se puede usar para devolver números enteros aleatorios.