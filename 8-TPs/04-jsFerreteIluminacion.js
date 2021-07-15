/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. -OK-

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra
 marca el descuento es del 30%. - OK-

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
 si es de otra marca el descuento es del 20%. -OK-

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas”
 se hace un descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del
 impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let precioFinal;
    let marca;
    































    /*
    let precioLamparas;
    let cantidadLamparasIngresadas;
    let marca;
    let precioConDescuento;
    let precioTotalLamparasIngresadas;
    let precio5lamparas;
    let precio4lamparas;
    let precio3lamparas;
    let importeFinalConDescuento;

    precioLamparas = 35;
    cantidadLamparasIngresadas = document.getElementById("txtIdCantidad").value;
    cantidadLamparasIngresadas = parseInt(cantidadLamparasIngresadas);
    marca = document.getElementById("Marca").value;
    precioConDescuento = document.getElementById("txtIdprecioDescuento").value;
    precioTotalLamparasIngresadas = precioLamparas * cantidadLamparasIngresadas;
    precioTotalLamparasIngresadas = parseInt(precioTotalLamparasIngresadas);
    precio5lamparas = precioLamparas * 5;
    precio5lamparas = parseInt(precio5lamparas);
    precio4lamparas = precioLamparas *4;
    precio4lamparas = parseInt(precio4lamparas);
    precio3lamparas = precioLamparas * 3;
    precio3lamparas = parseInt(precio3lamparas);
    /*importeFinalConDescuento = document.getElementById("txtIdprecioDescuento").value;
    importeFinalConDescuento = parseInt(importeFinalConDescuento);




    if(cantidadLamparasIngresadas > 5)
    {
        document.getElementById("txtIdprecioDescuento").value = precioTotalLamparasIngresadas- (precioTotalLamparasIngresadas*50/100);
    }


    if(cantidadLamparasIngresadas ==5 && marca == "ArgentinaLuz")
    {
        document.getElementById("txtIdprecioDescuento").value = precio5lamparas*40/100;
    }
    else 
    {
        if(cantidadLamparasIngresadas == 5 && marca !="ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value = precio5lamparas*30/100;
        }
    }

    if(cantidadLamparasIngresadas == 4 && marca =="ArgentinaLuz" || marca =="FelipeLamparas")
    {
        document.getElementById("txtIdprecioDescuento").value = precio4lamparas * 25/100;
    }
    else
    {
        if(cantidadLamparasIngresadas ==4 && marca != "ArgentinaLuz" || marca != "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value = precio4lamparas * 20/100;
        }
    }

    if(cantidadLamparasIngresadas ==3 && marca == "ArgentinaLuz")
    {
        document.getElementById("txtIdprecioDescuento").value = precio3lamparas * 15/100;
    }
    else 
    {
        if(cantidadLamparasIngresadas ==3 && marca == "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value = precio3lamparas * 10/100;
        }
    

    else
    {
        document.getElementById("txtIdprecioDescuento").value = precio3lamparas *  5/100;
    }

   if(importeFinalConDescuento >=)


    }







*/












}
 /*	let precioFinal;
    let cantidadLamparasIngresadas;
    let marcaLamparas;
    let precioConDescuento;
    let precioSegunCantidad;
    let argentinaLuz5Unidades;
    let descuentoArgentinaLuz5Unidades;
    let otrasMarcas5unidades;
    let descuentoOtrasMarcas5unidades;
    let lamparas4ArgentinaYfelipe;
    let descuento4ArgentinaYfelipe;
    let lamparas4OtrasMarcas;
    let descuento4OtrasMarcas;
    let lamparas3Argentina;
    let descuento3Argentina;

    precioFinal = 35;
    precioFinal = parseFloat(precioFinal);
    cantidadLamparasIngresadas = document.getElementById("txtIdCantidad").value;
    marcaLamparas = document.getElementById("Marca").value;
    precioConDescuento = document.getElementById("txtIdprecioDescuento").value;
    precioSegunCantidad = precioFinal * cantidadLamparasIngresadas;
    precioSegunCantidad = parseFloat(precioSegunCantidad);
    argentinaLuz5Unidades = precioFinal * 5;
    argentinaLuz5Unidades = parseFloat(argentinaLuz5Unidades);
    descuentoArgentinaLuz5Unidades = (argentinaLuz5Unidades * 40/100);
    otrasMarcas5unidades = precioFinal * 5 ;
    otrasMarcas5unidades = parseFloat(otrasMarcas5unidades);
    descuentoOtrasMarcas5unidades = otrasMarcas5unidades * 30/100;
    lamparas4ArgentinaYfelipe = precioFinal * 4;
    lamparas4ArgentinaYfelipe = parseFloat (lamparas4ArgentinaYfelipe);
    descuento4ArgentinaYfelipe = lamparas4ArgentinaYfelipe * 25/100;
    lamparas4OtrasMarcas = precioFinal*4;
    lamparas4OtrasMarcas = parseFloat(lamparas4OtrasMarcas);
    descuento4OtrasMarcas = lamparas4OtrasMarcas * 20/100;
    lamparas3Argentina = precioFinal * 3;
    lamparas3Argentina = parseFloat(lamparas3Argentina);
    descuento3Argentina = lamparas3Argentina * 15/100;


    if (cantidadLamparasIngresadas >5 )
    {
        document.getElementById("txtIdprecioDescuento").value = precioSegunCantidad - (precioSegunCantidad * 50/100 );
    }
    else {
        if(cantidadLamparasIngresadas == 5 && marcaLamparas == "ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value = descuentoArgentinaLuz5Unidades ;
        }
    
    else {
        if(cantidadLamparasIngresadas == 5 && marcaLamparas != "ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value = descuentoOtrasMarcas5unidades;
        }

    
    else {
        if(cantidadLamparasIngresadas == 4 && marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value= descuento4ArgentinaYfelipe;
        }

    else {
        if(cantidadLamparasIngresadas == 4 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas")
        {
            document.getElementById("txtIdprecioDescuento").value = descuento4OtrasMarcas;
        }
    
    else {
        if(cantidadLamparasIngresadas == 3 && marcaLamparas == "ArgentinaLuz")
        {
            document.getElementById("txtIdprecioDescuento").value = descuento3Argentina;
        }
    }
    

    }
    }
}
    }
}

txtIdCantidad
Marca
txtIdprecioDescuento

*/