// Definindo o objeto endereco
const endereco = {
    rua: "Avenida Paulista",
    numero: 123,
    bairro: "Bela Vista",
    cidade: "São Paulo"
};

// Loop para exibir todas as propriedades e seus valores
for (let propriedade in endereco) {
    console.log(${propriedade}: ${endereco[propriedade]});
}