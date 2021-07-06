/*Federico Papini DIV H
Ejercicio E/S 06:

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1; //inicializo variable numero 1
	let numero2; //inicializo var num  2
	let sumaNumeros; //inicializo variable suma de ambos numeros

	numero1=parseInt(document.getElementById("txtIdNumeroUno").value); 
	//declaro a la variable numero1 (con parseInt convierto a entero) y despues "tomo" el id html donde despues yo coloco el valor que quiera sumar

	numero2=parseInt(document.getElementById("txtIdNumeroDos").value);

	sumaNumeros=numero1+numero2; //declaro la variable sumaNumeros "sumando" var 1 y 2
	alert("La suma de los numeros es: " + sumaNumeros); //creo la alerta con el resultado
	
}

