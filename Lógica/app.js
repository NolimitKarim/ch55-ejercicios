/*
User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
1. username, edad y lista de películas favoritas
2. Utilizar los prompt necesarios para que el usuario ingrese su información.
3. Utilizar array para almacenar las películas del usuario.
4. Mostrar en consola la información del usuario donde cada película debe tener un mensaje como este: 'The film {film} is one of my favorites'.
*/



let counter = 0;
const username = prompt("Hola, ingresa tu nombre de usuario");
const age = prompt("Ingresa tu edad: ");
const favoriteMovies = [];

// Vamos a pedir 5 películas primero.
alert("A continuación te vamos a pedir tus 5 películas favoritas")
for (let i = 1; i <= 5; i++) {
    //los strings detro de `` se conocen como string literal,
    //concatenar variables y texto de una forma más sencilla y legible.
    favoriteMovies.push(prompt(`Ingresa la película número ${i}`)); //Equivalente a "Ingresa la película número " + i + " :
}
console.log(`Hola, soy ${username}, tengo ${age} años y mis películas favoritas son: `);

while (counter < favoriteMovies.length) {
    console.log(`Mi película favorita número ${counter + 1} es: ${favoriteMovies[counter]}`);
    counter++;
}