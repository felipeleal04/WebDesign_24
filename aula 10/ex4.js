function Numerosimpares(vetor) {
    return vetor.filtro(function (numero) {
        return numero % 2 !== 0;
    });
}

let numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(Numerosimpares(numeros));
