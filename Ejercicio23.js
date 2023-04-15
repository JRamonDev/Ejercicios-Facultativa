/*Escribe una función que tome una cadena como parámetro y devuelva la
cadena en orden inverso. Debe emplear el ciclo for. */
function cadenaInversa(cadena) {
    let resultado = ''; 
    for (let i = cadena.length - 1; i >= 0; i--) { 
      resultado += cadena[i]; 
    }
    return resultado;
  }

console.log(cadenaInversa('Hola mundo'));