/*Escribe una función que tome dos parámetros numéricos y un parámetro
booleano. Si el tercer parámetro es verdadero, la función debe devolver el
resultado de elevar el primer parámetro a la potencia del segundo parámetro,
de lo contrario, debe devolver la raíz cuadrada del primer parámetro. */
function calculos (num1, num2, bool){
    if(bool){
        return Math.pow(num1, num2);

    }else{
        return Math.sqrt(num1);
    }
}
console.log(calculos(5,3,true))