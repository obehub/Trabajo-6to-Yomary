//let edad = parseFloat(prompt("Introduce tu edad"));

if (edad >= 18) {
    alert("Erer mayor de edad");

} else {
    alert("Eres menor de edad");
}

//let numero = parseFloat(prompt("Introduce un numero"));

if (numero < 0) {
    alert("Negativo");
} else if (numero == 0) {
    alert("Igual a cero");
} else {
    alert("Positivo");
}

//let calificacion = parseFloat(prompt("Introduce tu calificaion:"));

if (calificacion == 100 && calificacion >= 90) {
    alert("Excelente");
} else if (calificacion >= 70 && calificacion <= 89 ) {
    alert("Aprobado");
} else if (calificacion < 70) {
    alert("Reprobado");
}

//let precio = parseFloat(prompt("Introduce el precio"));

if (precio >= 100) {
    alert(precio - precio*0.2);
} else if (precio >= 50 && precio <= 99 ) {
    alert(precio - precio*0.1);
} else {
    alert("No tienes descuento");
}

//let meses = parseFloat(prompt("Ingrese el numero del mes:"));

switch (meses) {
    case 1:
        alert("Enero")
        break;

        case 2:
        alert("Febrero")
        break;

        case 3:
        alert("Marzo")
        break;

        case 4:
        alert("Abril")
        break;

        case 5:
        alert("Mayo")
        break;

        case 6:
        alert("Junio")
        break;

        case 7:
        alert("Julio")
        break;

        case 8:
        alert("Agosto")
        break;

        case 9:
        alert("Septiembre")
        break;

        case 10:
        alert("Octubre")
        break;

        case 11:
        alert("Noviembre")
        break;

        case 12:
        alert("Diciembre")
        break;

    default:
        alert("NUEVO MES")
        break;
}