
function multiplicar(num1, num2){
    return num1*num2;
}
console.log(multiplicar(2, 10));

function calcularAreaRectangulo(lar, ach){
    return lar * ach;
}
console.log(calcularAreaRectangulo(3, 10));

function sumar1(numero){
    return numero + 1;
}
console.log(sumar1(2))

//argumentos
function argumentos(num1, num2){
    return num1 + num2;
}
console.log(argumentos(1,5));

//calificaion
function calificaion() {
    let a = parseFloat(prompt("Ingresa tu calificaion"));
    if (a <= 100 && a >= 90) {
        alert("A");
    } else if (a <= 89 && a >= 80) {
        alert("B");
    } else if (a <= 79 && a >= 70 ) {
        alert("C");
    } else {
        alert("F");
    }
}
calificaion();

//sin parametros
function mensaje() {
    document.write("mensaje");
}
mensaje();