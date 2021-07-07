/*Federico Nahuel Papini, DIV H
Ejercicio E/S 08:

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resultado;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado = dividendo % divisor;

	document.getElementById("txtIdNumeroDividendo").value=" ";
	document.getElementById("txtIdNumeroDivisor").value=" ";
	
	alert("El resto es: " + resultado);

	/*
	let dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	let divisor= parseInt(document.getElementById("txtIdNumeroDivisor").value);
	let resultado= dividendo % divisor;

		document.getElementById("txtIdNumeroDividendo").value=" ";
		document.getElementById("txtIdNumeroDivisor").value=" ";

	alert("El resto es: " + resultado);*/
}
