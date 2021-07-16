/*PAPINI FEDERICO NAHUEL DIV H:
IF EJERCICIO 07:

Al ingresar una edad menor a 18 años y un estado civil distinto
a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	let edadIngresada;
	let estadoCivil;
	
	
	
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivil = document.getElementById("estadoCivil").value;
	
	if ( edadIngresada < 18  && estadoCivil != "Soltero" )
	{
		alert("Es muy pequeño para NO ser soltero. ");
	}
	
		





}//txtIdEdad
//estadoCivil