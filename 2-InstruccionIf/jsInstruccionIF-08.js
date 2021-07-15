/*PAPINI FEDERICO NAHUEL DIV H
IF EJERCICIO N°08:

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	let edadIngresada;
	let estadoCivil;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y NO es menor.");
	}

	else{
			if(edadIngresada < 18 && estadoCivil == "Soltero")
			{
			alert("Es menor y Soltero");
			}
		}

	document.getElementById("txtIdEdad").value= "";
	document.getElementById("estadoCivil").value="";

}

//estadoCivil
// txtIdEdad