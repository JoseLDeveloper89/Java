 cartesiano = function() {
  var x = prompt("Ingrese el valor de x");
  var y = prompt("Ingrese el valor de y");
  var z = prompt("Ingrese el valor de z");
  var resultado = x + y + z;
  if (resultado > 0) {
    console.log("Es positivo");
    } else if (resultado < 0) {
    console.log("Es negativo");
    } else {
    console.log("Es cero");
    }
  }

