/*Escribe una función que tome una cadena de texto como parámetro y
devuelva true si la cadena contiene la letra "a", o false si no la contiene. */
function buscarLetraA(texto){
    console.log('¿El siguiente texto contiene la letra "a"? \n' + texto);
    return texto.includes('a') || texto.includes('A')
}
console.log(buscarLetraA('Hola'));
console.log(buscarLetraA('Hello'));