function calcular_prestamo (monto, cuotas){

parseFloat = monto;
parseInt = cuotas;

let prestamo = 0;

if(monto > 0 && cuotas == 3){
    prestamo = monto + (monto * 0.15);
    return prestamo
    
}
else if(monto > 0 && cuotas == 6){
    prestamo = monto + (monto * 0.35);
    return prestamo
}
else if(monto > 0 && cuotas == 12){
    prestamo = monto + (monto * 0.70);
    return prestamo
}
else if(monto > 0 && cuotas == 1){
    return prestamo
}
}

function socio(prestamo, estado_usuario){
    if(estado_usuario == "fin"){
        let descuento = prestamo * 0.20;
    }
    else{
        return 0
    }
}

alert("gracias por elegirnos");
console.log("bienvenido");

let monto = ""

while(monto != "fin"){

    monto = prompt("ingrese el monto que desea retirar o fin para fianlizar");

    if(monto != "fin"){
    let estado_usuario = prompt("es socio: si/no");
    let cuotas = prompt("ingrese la cantidad de cuotas en la que quiere abonar:1,3,6 o 12");

    let resultado_prestamo = calcular_prestamo(monto, cuotas);
    let resultado_descuento = socio(resultado_prestamo, estado_usuario)

    console.log("pediste un total de: ", monto)
    console.log("cuotas: ", cuotas)
    console.log("devolves: ", resultado_prestamo)

    if(resultado_descuento != 0){
        console.log("al ser socio recibes un descuento del 20%, tu monto total es de: ", resultado_descuento)
    }    
    }

    
}