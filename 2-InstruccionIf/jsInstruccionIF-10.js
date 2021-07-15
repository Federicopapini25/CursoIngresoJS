/*PAPINI FEDERICO NAHUEL DIV H:
EJERCICIO IF NUM°10:

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let nota;
	nota = Math.floor(Math.random()*10)+1;

	if(nota > 8 && nota < 11)
		{
			alert("Excelente! Tu nota es: " + nota);
		}

	else {
			if(nota >3)
			{
			alert("Aprobó, tu nota es: " + nota);
			}
			
		
	else 
	{
		alert("Vamos, la proxima se puede! Tu nota es: " + nota);
	}
		}
}