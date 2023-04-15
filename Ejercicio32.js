/*Dado un arreglo de números, escribe una función que devuelva la suma de
todos los números pares. Si el arreglo está vacío o no contiene números
pares, la función deberá devolver 0. */
function sumaNumerosPares(arreglo) {
    let suma = 0; 
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] % 2 === 0) {
        suma += arreglo[i]; 
    }
  
    return suma; 
  }
  
  
  console.log(sumaNumerosPares([1,2,3,4])); 
  console.log(sumaNumerosPares([1,3,5]));
  console.log(sumaNumerosPares([])); 


}