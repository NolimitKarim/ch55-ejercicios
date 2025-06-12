/**
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
1. Preguntar al usuario con un prompt cuántos segundos necesita
2. Definir los segundos que el usuario escriba como la variable de tiempo
3. Mostrar una alarma cuando haya transcurrido el tiempo.
 */


let seconds = prompt("Cuántos segundos deseas esperar para la alarma?");
let time = Number(seconds);

setTimeout(function () {
    alert("El tiempo se acabó, es exitoso");
}, time * 1000);