/*
Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero.
 */

let numero = parseFloat(prompt("Digite um número qualquer:"))

if (numero > 0) {
    document.write('O número é positivo!')
} else if (numero < 0) {
    document.write('O número é negativo!')
 } else {
    document.write('O número é zero!')
 }


