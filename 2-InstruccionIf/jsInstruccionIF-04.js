function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 13 && edad <= 17)
	{
		alert("La persona es un adolescente ");
	}

	document.getElementById("txtIdEdad").value = " ";
}//txtIdEdad