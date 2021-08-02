/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	
	sexo = document.getElementById("txtIdSexo").value;

	while(sexo != "f" && sexo != "m")
	alert("Error, Ingrese F o M");

}//FIN DE LA FUNCIÓN