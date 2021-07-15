/*PAPINI FEDERICO NAHUEL DIV H:
TRABAJO PRACTICO FERRETECONSTRUCCION EJ N°2:

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Perimetro de un rectangulo: (lado1+lado2)*2
    let largo;
    let ancho;
    let perimetro;

    largo = document.getElementById("txtIdLargo").value ;
    largo=parseFloat(largo);
    ancho = document.getElementById("txtIdAncho").value;
    ancho = parseFloat(ancho);
    perimetro = ((largo*2) + (ancho*2))*3;
    alert("Se necesita comprar " + perimetro + " metros de alambre.")

    document.getElementById("txtIdLargo").value = "";
    document.getElementById("txtIdAncho").value ="";
}
function Circulo () 
{
    //circunferencia de un circulo: diametro*3,14. 
    //diametro de un circulo: radio * 2.
	let radio;
    let diametro;
    let circunferencia;
    let alambre;

    radio= document.getElementById("txtIdRadio").value;
    radio= parseInt(radio);
    diametro= radio * 2;
    diametro=parseInt(diametro);
    circunferencia= diametro * Math.PI.toFixed(2);
    alambre= circunferencia * 3;
    alert("Se necesita comprar: "+ alambre +" mts.");

    document.getElementById("txtIdRadio").value ="";

}
    //txtIdRadio

function Materiales () 
{
    //superficie de rectangulo : base * altura
	let cementoPorMetro;
    let calPorMetro;
    let largoDelTerreno;
    let anchoDelTerreno;
    let superficieDelTerreno;

    largoDelTerreno= document.getElementById("txtIdLargo").value;
    largoDelTerreno=parseInt(largoDelTerreno);
    anchoDelTerreno= document.getElementById("txtIdAncho").value;
    anchoDelTerreno=parseInt(anchoDelTerreno);
    superficieDelTerreno= largoDelTerreno * anchoDelTerreno;
    cementoPorMetro= 2 * superficieDelTerreno;
    calPorMetro=3 * superficieDelTerreno;
    alert("Para un terreno de "+ superficieDelTerreno + " mts de superficie se precisan "+ cementoPorMetro + " bolsas de Cemento y " + calPorMetro + " bolsas de Cal." );
    

} 