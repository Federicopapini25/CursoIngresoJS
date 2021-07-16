/*PAPINI FEDERICO NAHUEL DIV H:
TRABAJO PRACTICO NUM 5 (IF/SWITCH):

Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
  let ingresarNumero;
  let numeroSecreto;
  let intentos;

  ingresarNumero= document.getElementById("txtIdNumero").value;
  ingresarNumero = parseInt(ingresarNumero);
  numeroSecreto = Math.floor(Math.random() * 100 + 1);
  intentos = document.getElementById("txtIdIntentos").value;
  
  if(ingresarNumero == numeroSecreto)
  {
    alert("Usted es un ganador!!! Y en solo " + " intentos!");
  }
  else
  {
    if(ingresarNumero != numeroSecreto)
    {
      document.getElementById("txtIdIntentos").value =1;
    }
  }
  



	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	
	
}

//txtIdNumero Ingrese numero
//txtIdIntentos Intentos