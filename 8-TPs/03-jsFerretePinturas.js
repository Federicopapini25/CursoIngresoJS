/* PAPINI FEDERICO NAHUEL DIV H:
TP FERRETERIA NUM 3:

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
  let temperaturaIngresada;
  let centigrados;

  temperaturaIngresada= document.getElementById("txtIdTemperatura").value;
  temperaturaIngresada=parseFloat(temperaturaIngresada);
  centigrados= (temperaturaIngresada-32)*5/9;
  alert(temperaturaIngresada + "Fahrenheit son " + centigrados + " centigrados.");

  document.getElementById("txtIdTemperatura").value= "";

}

function CentigradosFahrenheit () 
{
    let temperaturaIngresada;
	let fahrenheit;

    temperaturaIngresada=document.getElementById("txtIdTemperatura").value;
    temperaturaIngresada=parseFloat(temperaturaIngresada);
    fahrenheit = (temperaturaIngresada * 9/5) +32;
    alert(temperaturaIngresada + " centigrados son " + fahrenheit + " Fahrenheit.");

    document.getElementById("txtIdTemperatura").value = "";
}
