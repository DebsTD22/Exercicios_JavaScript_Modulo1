/*
    O imc - Indice de massa corporal - é um criterio da Organização Mundial de Saude para indicar sobre
    a condição de peso de uma pessoa adulta.

    Formula do imc:
    imc = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

    imc em adultos condição:
        - Abaixo de 18.5, abaixo do peso;
        - Entre 18.5 e 25, peso normal;
        - Entre 25 e 30, acima do peso;
        - Entre 30 e 40, obeso;
        - Acima de 40 Obesidade Grave.
*/

const altura = 1.62;
const peso = 55;

const imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log(imc, 'Abaixo do peso'); //certo
} else if (imc <= 25) {
    console.log(imc, 'Peso normal'); // certo
} else if (imc <= 30) {
    console.log(imc, 'Acima do peso'); //certo
} else if (imc <= 40){
    console.log(imc, 'Obeso'); //certo
} else if (imc > 40){
    console.log(imc, 'Obesidade grave');// certo
}
