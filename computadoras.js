var precio_pc = 11000
var cantidad =7
var fff 
if (cantidad < 5){
    fff = 0.10
}
else if (cantidad >= 5 && cantidad <10){
    fff = 0.20
}
else if (cantidad >= 10){
    fff = 0.40
}

console.log("El precio total de tu compra es: ", ((precio_pc * cantidad) - ((precio_pc * cantidad) * (fff))))

