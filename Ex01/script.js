/*
Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
 */

let grausCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"))
let grausFahrenheit = (grausCelsius * 9/5) + 32

document.write(grausCelsius + "°C equivalem a " + grausFahrenheit.toFixed(2) + "°F")


//parseFloat converte pra número decimal