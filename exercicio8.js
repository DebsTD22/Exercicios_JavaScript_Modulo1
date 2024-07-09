/* 
    Invoque uma função dentro de outra função
*/

function escrevaMeuNome(nome){
    return 'meu nome é ' + nome;
}


(function verifiqueIdade(idade){
    if (idade >= 18) {
        console.log( escrevaMeuNome('Débora') + ' sou maior de idade');
    } else {
        console.log( escrevaMeuNome('Débora') + ' sou menor de idade');
    }
})(18);
