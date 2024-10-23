// Definindo o objeto produto
const produto = {
    nome: "Celular",
    preco: 1500,
    quantidade: 3,

    // Método para calcular o total (preço * quantidade)
    calcularTotal: function() {
        return this.preco * this.quantidade;
    }
};

// Chamando o método e mostrando o resultado no console
console.log(O total é: R$ ${produto.calcularTotal()});