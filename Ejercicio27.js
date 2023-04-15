/*Escribe una función que tome dos números y un booleano como parámetros.
Si el booleano es verdadero, la función debe devolver la multiplicación de los
dos números; de lo contrario, debe devolver su diferencia. */
function num_bol(num1,num2,bool){
    return bool ? num1 * num2 : num1 - num2;
}
console.log (num_bol(1,2,true))
console.log (num_bol(1,2,false))