// Função para encontrar o maior número em um array
function encontraMaiorNumero(array) {
    return Math.max(...array);
}

// Exemplo de uso
const numeros = [10, 35, 8, 42, 27, 99, 4];

// Chamando a função e mostrando o resultado no console
console.log(encontraMaiorNumero(numeros));