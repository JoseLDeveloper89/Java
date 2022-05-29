let a = 1;
let b = 2;
let suma = a + b;
console.log(suma);

function sumar(a, b){
    return a + b;

}
sumar(132,321);
console.log(sumar(132,321))

let costo = 500;
let porcentaje = 10;
function CalcularPorcentaje(costo,porcentaje){
    let valor = costo * porcentaje / 100;
    let suma = valor + costo;
    return suma;
}
console.log(CalcularPorcentaje(costo,porcentaje));