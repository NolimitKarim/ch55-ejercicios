/*
Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
1. Solicitar al usuario 10 números
2. Utilizar los prompts necesarios para que el usuario ingrese los 10 números
3. Utilizar array para almacenar los números
4. Determinar el número más alto y mostrar en consola.
*/



let numbers = [];

for (let i = 1; i <= 10; i++) {
    let input = prompt(`Ingresa el número ${i}`);
    let number = Number(input);
    numbers.push(number);
}

let highestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
        highestNumber = numbers[i];
    }
}

console.log("El número más alto es: ", highestNumber);


