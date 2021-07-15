/*PAPINI FEDERICO NAHUEL DIV H:
IF EJERCICIO 07: */
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