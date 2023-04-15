/*Escribe una función que tome un número como parámetro y devuelva el cubo
de su valor si el número es negativo, o el doble del valor si no lo es. */
function cubo(numero){
    if(numero < 0 ){
        return numero ** 3;
    }
    else{
        return numero * 2;
    }
}
console.log(cubo(2));