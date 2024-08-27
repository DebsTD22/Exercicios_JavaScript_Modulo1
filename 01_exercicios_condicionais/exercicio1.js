/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
    1- Preço do combustivel;
    2- Gasto médio de combustivel do carro p/km;
    3- Distância em Km da viagem;

Imprimir no console o valor que será gasto para realizar a viagem.*/


const combustivel = 5.58;
const mediaKm = 12;
const Km = 300;

let conbustivelKm = combustivel / mediaKm;

let combustivelTotal = Km * conbustivelKm;

console.log(combustivelTotal);