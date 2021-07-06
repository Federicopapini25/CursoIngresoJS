/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let sumaNumeros;

	numero1=document.getElementById("txtIdNumeroUno").value;
	numero2=document.getElementById("txtIdNumeroDos").value;

	sumaNumeros=numero1+numero2;
	alert("La suma de los numeros es: " + sumaNumeros);
	
}

