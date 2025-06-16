/**
 * Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
1. Solicitar un número al usuario
2. Realizar la operación de factorial
3. Mostrar en consola el resultado
 */


let entrada = prompt("Ingresa un número entero (1 <= n):");
let n = Number(entrada);

function factorial(num) {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

let resultado = factorial(n);
console.log(`El factorial de ${n} es: ${resultado}`);