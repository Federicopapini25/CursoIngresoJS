/* Papini Federico nahuel DIV H:
Ejercicio E/S 07:

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let sumaNumeros=numero1 + numero2;
	alert("La Suma de los numeros es: "+ sumaNumeros);	
	
	document.getElementById("txtIdNumeroUno").value = " ";
	document.getElementById("txtIdNumeroDos").value=" ";
}

function restar()
{
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let restaNumeros=numero1 - numero2;
	alert("La Resta de los numeros es : "+ restaNumeros);

	document.getElementById("txtIdNumeroUno").value = " ";
	document.getElementById("txtIdNumeroDos").value=" ";
	
}

function multiplicar()
{ 
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let multiplicarNumeros=numero1 * numero2;
	alert("La Multiplicacion de los numeros es: " + multiplicarNumeros);

	document.getElementById("txtIdNumeroUno").value = " ";
	document.getElementById("txtIdNumeroDos").value=" ";
}

function dividir()
{
	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	let divisionNumeros= numero1 / numero2;
	alert("La Division de los numeros es : " + divisionNumeros);

	document.getElementById("txtIdNumeroUno").value = " ";
	document.getElementById("txtIdNumeroDos").value=" ";
}

