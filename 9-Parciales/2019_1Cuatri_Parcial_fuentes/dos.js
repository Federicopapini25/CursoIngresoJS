/* Federico Nahuel Papini DIV H:
Ejercicio Parcial 2019 Num 2: */

function mostrar()
{
let parejaUno;
let parejaDos;
let peso1;
let peso2;
let sumaPeso; 
let promedio;

parejaUno = prompt("Ingrese su nombre: ");
peso1 = prompt("Ingrese su peso: ");
peso1 =parseInt(peso1);
parejaDos = prompt("Ingrese su nombre :");
peso2 = prompt("Ingrese su peso :");
peso2 =parseInt(peso2);
sumaPeso = peso1 + peso2;
promedio = (peso1 + peso2) / 2;


alert("Ustedes se llaman " + parejaUno + " y " + parejaDos + " pesan " + peso1 + " y " + peso2 + " kilos " + " que sumados son " + sumaPeso + " kilos y el promedio del peso es "+ promedio);




}
