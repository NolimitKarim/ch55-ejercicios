/**
 * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
1. Solicitar al usuario por medio de un prompt que escriba una frase o número de mínimo 2 dígitos.
2. Ajustar el texto, ajustar a minu, quitar espacios y signos de puntuación.
3. Invertir el texto para verificar si es palíndromo
4. Mostrar en consola si es o no un palíndromo.
 */


// Pedir al usuario una frase o número
let text = prompt("Escribe una frase o número de mínimo 2 dígitos ");

let transform = text
    .toLowerCase() // Convertimos en minúsculas
    .replace(/[^a-z0-9]/g, ""); // Solo deja letras y números

// Se invierte el texto
let switchUp = transform.split("").reverse().join("");

// Se realiza el análisis de la frase
if (transform === switchUp) {
    console.log("Es un palíndromo.");
} else {
    console.log("No es un palíndromo.");
}