/* 
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor de seu IMC.
    Instancie uma pessoa chamada José que tenha 70Kg e 1,75 de altura, e peça para ele dizer o valor de seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC(){
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC(){
        const imc = this. calcularIMC(); 
        if (imc < 18.5) {
            return (imc, 'abaixo do peso'); 
        } else if (imc <= 25) {
            return (imc, 'normal'); 
        } else if (imc <= 30) {
            return (imc, 'acima do peso'); 
        } else if (imc <= 40){
            return (imc, 'obeso'); 
        } else if (imc > 40){
            return (imc, 'obesidade grave');
        }
    }
}

const José = new Pessoa('José', 70, 1.75);
const Pedro = new Pessoa('Pedro', 80, 1.60);

console.log(`Sou ${José.nome}, meu ICM é ${José.calcularIMC()}, e estou ${José.classificarIMC()}`);

console.log(`Sou ${Pedro.nome}, meu ICM é ${Pedro.calcularIMC()}, e estou ${Pedro.classificarIMC()}`);