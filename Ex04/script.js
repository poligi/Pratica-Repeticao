/*
O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor.
 */

let custoFabrica = parseInt(prompt("Qual o valor do carro que você quer comprar?"))

let impostos = 45 / 100
let distribuidor = 28 / 100
let custoFinalConsumidor = (custoFabrica * impostos) + (custoFabrica * distribuidor) + custoFabrica

document.write("Seu carro novo ficará com total de " + custoFinalConsumidor.toFixed(3) + ",00")
