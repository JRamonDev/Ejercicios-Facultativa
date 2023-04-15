/*Escribe una función que tome una cadena como parámetro y devuelva true
si la cadena es un palíndromo, es decir, si se lee igual de adelante hacia atrás
que de atrás hacia adelante. */
function palindromo(cadena) {

    var resultado = "La palabra \""+cadena+"\" \n";
  
    var cadena = cadena.toLowerCase();
  

    var letrasespacios = cadena.split("")
    var cadenasinespacios = "";
    for(i in letrasespacios) {
      if(letrasespacios[i] != " ") {
        cadenasinespacios += letrasespacios[i];
      }
    }
  
    var letras = cadenasinespacios.split("");
    var letrasReves = cadenasinespacios.split("").reverse();
  
    var iguales = true;
    for(i in letras) {
      if(letras[i] == letrasReves[i]) {

      }
      else {
        iguales = false;
      }
    }
  
    if(iguales) {
      resultado += " es un palíndromo";
    }
    else {
      resultado += " no es un palíndromo";
    }
  
    return resultado;
  }
  console.log(palindromo("Ana"));
  console.log(palindromo("roma"));
