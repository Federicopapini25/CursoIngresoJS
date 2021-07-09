/* PAPINI FEDERICO NAHUEL DIV H:
TRABAJO PRACTICO FERRETEFACTURACION (NUM1):


1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numero1;
    let numero2;
    let numero3;
    let resultadoSuma;

    numero1 = document.getElementById("txtIdPrecioUno").value;
    numero1 = parseFloat(numero1);
    numero2 = document.getElementById("txtIdPrecioDos").value;
    numero2 = parseFloat(numero2);
    numero3 = document.getElementById("txtIdPrecioTres").value;
    numero3 = parseFloat(numero3);
    resultadoSuma = numero1 + numero2 + numero3;

    alert("La Suma de los numeros es : " + resultadoSuma);

    document.getElementById("txtIdPrecioUno").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioTres").value = "";
    
}
function Promedio () 
{
    let numero1;
    let numero2;
    let numero3;
    let promedio;

    numero1 = document.getElementById("txtIdPrecioUno").value;
    numero1 = parseFloat(numero1);
    numero2 = document.getElementById("txtIdPrecioDos").value;
    numero2 = parseFloat(numero2);
    numero3 = document.getElementById("txtIdPrecioTres").value;
    numero3 = parseFloat(numero3);
    promedio = (numero1 + numero2 + numero3) /3;

    alert("El promedio de los numeros ingresados es : " + promedio);

    document.getElementById("txtIdPrecioUno").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioTres").value = "";

}
function PrecioFinal () 
{
    let numero1;
    let numero2;
    let numero3;
    let sumaNumeros;
    let iva21;

    numero1 = document.getElementById("txtIdPrecioUno").value;
    numero1 = parseInt(numero1);
    numero2 = document.getElementById("txtIdPrecioDos").value;
    numero2 = parseInt(numero2);
    numero3 = document.getElementById("txtIdPrecioTres").value;
    numero3 = parseInt(numero3);
    sumaNumeros =numero1 + numero2 + numero3;
    iva21 = sumaNumeros * 1.21;

    alert("El precio final con el 21% IVA es: " + iva21);

    document.getElementById("txtIdPrecioUno").value = "";
    document.getElementById("txtIdPrecioDos").value = "";
    document.getElementById("txtIdPrecioTres").value = "";
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres