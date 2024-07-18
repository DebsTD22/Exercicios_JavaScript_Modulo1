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
    calcularIMC(peso, altura, nome){
        const icm = this.peso / (this.altura * this.altura);
        console.log(`Sou ${this.nome}, e meu ICM é ${icm}`);
    }
}

const José = new Pessoa('José', 70, 1.75);

José.calcularIMC();
