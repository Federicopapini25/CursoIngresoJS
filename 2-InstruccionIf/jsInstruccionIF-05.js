/*PAPINI FEDERICO NAHUEL DIV H:
IF EJERCICIO 05: 
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