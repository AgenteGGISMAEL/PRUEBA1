function filtrarPrimos(numeros) {
    // Función auxiliar para verificar si un número es primo
    function esPrimo(num) {
      for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num > 1;
    }
  
    // Crear un nuevo arreglo para almacenar los números primos
    var primos = [];
  
    // Iterar a través del arreglo dado
    for(let i = 0; i < numeros.length; i++) {
      // Verificar si el número actual es primo
      if(esPrimo(numeros[i])) {
        // Si el número es primo, añadirlo al arreglo de números primos
        primos.push(numeros[i]);
      }
    }
  
    // Devolver el nuevo arreglo de números primos
    return primos;
  }

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filtrarPrimos(numeros)); // [2, 3, 5, 7]

  

//Hecho por el estudiante Ismael Freire// marca de agua