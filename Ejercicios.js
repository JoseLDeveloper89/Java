/*
Listado de ejercicios JavaScript:
- Desarrollar un programa que permita identificar si un numero entero es par o impar.
- Elaborar un programa que permita calcular la edad de una persona según el año de nacimiento y el año actual.
- Elaborar un programa que permita identificar si un número es primo o no.

- Desarrolle un programa que permita a través de funciones, desarrollar la suma, resta, multiplicación y división de dos números enteros.
- En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
    dependerá del número de computadoras que compre.
    Si las computadoras son menos de cinco se les dará un 10% de descuento sobre el total de la compra;
    si el número de computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de descuento;
    y si son 10 o más se les da un 40% de descuento.
    El precio de cada computadora es de $11,000.
    Preguntar al usuario cuantas computadoras va a comprar y mostrar un console.log el valor a pagar.
- Un negocio de banquetes tiene la siguiente politica para definir el cobro por sus servicios:
    a) Los primeros 30 platillos se cobran a L. 150 c/u
    b) Por los siguientes 31 hasta 50 platillos se cobran a L. 125 c/u
    c) Los platillos que van desde el 51 hasta el 200 se cobran a L. 100 c/u
    d) Los platillos desde el numero 201 en delante se cobran a L. 75 c/u
****Hacer un programa que muestre cuanto debe pagar un cliente dependiendo del numero de platillos que este desea ordenar.
- Elaborar un programa que permita identificar si un numero entero es perfecto o no.
- Elaborar un programa que permita calcular el factorial de un numero entero.
*/

//Ejercicio 1 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 48
var num = 123;
if(num%2 == 0){
    console.log("El numero es par crack")

}else{
    console.log("El numero no es par")
}

//Ejercicio 2
var aa =2022;
var an =2003;
var edad = aa - an;
if (edad >=18) {
    console.log("Es mayor de edad")

}else{
    console.log("Es menor de edad")
}

//Ejercicio 3


//Ejercicio 4
//Sumar
let a = 1;
let b = 2;
let suma = a + b;
console.log(suma);

function sumar(a, b){
    return a + b;

}
sumar(132,321);
console.log(sumar(132,321))

//Restar
let c = 2;
let d = 2;
let resta = c - d;
function restar(c, d){
    return c - d;
}
restar(130,80);
console.log(restar(130,30))

//Multiplicar
let e = 2;
let f = 2;
let Multiplicar = e * f;
function Multiplica(e, f){
    return e * f;
}
Multiplica(130,80);
console.log(Multiplica(130,30))

//Dividir
let g;
let h;
let Dividir = g / h;
function Divide(g, h){
    return g / h;
}
Divide(130,80);
console.log(Divide(130,30))


