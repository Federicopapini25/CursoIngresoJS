/*1.	Para el departamento de facturación:
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

    numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultadoSuma = numero1 + numero2 + numero3;

    alert("La Suma de los numeros es : " + resultadoSuma);

    document.getElementById("txtIdPrecioUno").value = " ";
    document.getElementById("txtIdPrecioDos").value = " ";
    document.getElementById("txtIdPrecioTres").value = " ";
    
}
function Promedio () 
{
    let numero1;
    let numero2;
    let numero3;
    let promedio;

    numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio = (numero1 + numero2 + numero3) /3;

    alert("El promedio de los numeros ingresados es : " + promedio);

    document.getElementById("txtIdPrecioUno").value = " ";
    document.getElementById("txtIdPrecioDos").value = " ";
    document.getElementById("txtIdPrecioTres").value = " ";

}
function PrecioFinal () 
{
    let numero1;
    let numero2;
    let numero3;
    let sumaNumeros;
    let iva21;

    numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    sumaNumeros =numero1 + numero2 + numero3;
    iva21 = sumaNumeros * 1.21;

    alert("El precio final con el 21% IVA es: " + iva21);

    document.getElementById("txtIdPrecioUno").value = " ";
    document.getElementById("txtIdPrecioDos").value = " ";
    document.getElementById("txtIdPrecioTres").value = " ";
}

//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres