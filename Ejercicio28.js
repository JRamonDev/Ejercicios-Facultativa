/*Escribe una función que tome tres parámetros booleanos y devuelva
verdadero si al menos uno de los tres parámetros es verdadero, de lo
contrario, debe devolver falso. */
function esVerdadero(a,b,c){
    return a ||  b || c;
}

console.log(esVerdadero(true,false,false))
console.log(esVerdadero(true,true,false))
console.log(esVerdadero(false,false,false))
console.log(esVerdadero(false,true,false))