/*Escribe una función que tome una cadena como parámetro y devuelva la
cadena con las palabras en orden inverso. */
function inversoPalabra(cadena){
    let palabras = cadena.split("");
    palabras.reverse();
    let resultado = palabras.join("");
    return resultado;
}
let cadena = "Hola Ramon";
let resultado = inversoPalabra(cadena);
console.log(resultado);