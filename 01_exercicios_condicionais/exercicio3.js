/* 
    1- Faça um algoritomo que dado as 3 notas tiradas por um aluno em um semestre da faculdade,
     calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

    Media = (nota 1 + nota 2 + nota 3) / 3;

    Classificação: 
        - Media menor que 5, reprovação;
        - Media entre 5 e 7, recuperação;
        - Media acima de 7, passou de semestre.
*/

const primeiroSemestre = 4;
const segundoSemestre = 4;
const terceiroSemestre = 9;

const media = (primeiroSemestre + segundoSemestre + terceiroSemestre) / 3;

if (media < 5) {
    console.log(media,'Reprovado');
}else if (media <= 7) {
    console.log(media, 'Recuperação');
}else if (media >= 7){
    console.log(media, 'Aprovado');
}
