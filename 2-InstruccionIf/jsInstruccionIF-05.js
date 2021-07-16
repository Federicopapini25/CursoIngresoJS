/*PAPINI FEDERICO NAHUEL DIV H:
IF EJERCICIO 05: 
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad < 13 || edad > 17)
	{
		alert("La persona NO es adolescente");
	}
	document.getElementById("txtIdEdad").value = "";

}//txtIdEdad