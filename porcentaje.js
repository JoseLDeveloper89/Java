let costo = 500;
let porcentaje = 10;
function CalcularPorcentaje(costo,porcentaje){
    let valor = costo * porcentaje / 100;
    let suma = valor + costo;
    return suma;
}
console.log(CalcularPorcentaje(100/25));