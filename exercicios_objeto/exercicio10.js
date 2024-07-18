/* 
    Crie uma classe para representar carros.
    Os carros possuem marca, cor, gasto médio de combustível p/Km rodado.
    Crie um método que, dado a quantidade de Km e o preço do combustível, dê o valor gasto.
*/

class Carros{
    marca;
    cor;
    gastoMedio;
    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    calcularGastoDePercurso(preçoGasolina, km){
       return preçoGasolina / this.gastoMedio * km;
    }
}

const carro1 = new Carros('fiat', 'preto', 10);
const carro2 = new Carros('ford', 'cinza', 12);

console.log(carro1.calcularGastoDePercurso(6.5, 100));
