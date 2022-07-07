//alert('Mi archivo está bien linkeado');

//multiplicar(a, b)
//Crear una función multiplicar que tome como argumentos dos números y devuelva la multiplicación de ellos

//multiplicar(2, 3) // 6

const a = prompt('Ingresa el primer número');
const b = prompt('Ingresa el segundo número');

const multiplicar = (a,b) => {
    return a * b;
};
console.log(multiplicar(a,b));

const resultadoDeLaMultiplicacion = multiplicar(a,b);

console.log(`El resultado de la multiplicación de ${a} x ${b}   es:  ${resultadoDeLaMultiplicacion}`);

alert(`El resultado de la multiplicación de ${a} x ${b}es: ${resultadoDeLaMultiplicacion}`);

