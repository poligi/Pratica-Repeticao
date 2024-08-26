/*
Crie um programa que peça um número de 1 a 7 e exiba o dia da
semana correspondente utilizando a estrutura condicional switch.
 */
let numero = parseInt(prompt("Digite um número de 1 a 7"))
let nomeDoDia 

switch (numero) {
    case 1:
        nomeDoDia = 'Domingo'
        break
    case 2:
        nomeDoDia = 'Segunda'
        break
    case 3:
        nomeDoDia = 'Terça'
        break
    case 4:
        nomeDoDia = 'Quarta'
        break
    case 5:
        nomeDoDia = 'Quinta'
        break
    case 6:
        nomeDoDia = 'Sexta'
        break
    case 7:
        nomeDoDia = 'Sábado'
        break
}