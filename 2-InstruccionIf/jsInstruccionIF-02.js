/*PAPINI FEDERICO NAHUEL DIV H
IF EJERCICIO 02:
*/
function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;
	edad= parseInt(edad);

	if(edad >= 18)
	{
		alert("La persona es mayor de edad");
	}

	document.getElementById("txtIdEdad").value = " ";
}//txtIdEdad