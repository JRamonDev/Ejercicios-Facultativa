/*Escribe una función que tome un número como parámetro y devuelva true si
el número es divisible por 3 y 5, o false si no lo es. */
function divisibleportresycinco(numero){
    if (numero % 3 === 0 && numero % 5 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(divisibleportresycinco(15));