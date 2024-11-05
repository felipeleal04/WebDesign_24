const aluno = {
    nome: "Carlos",
    idade: 21,
    curso: "Engenharia",
    matricula: "20231234",
    
    // Método para exibir as informações do aluno
    mostrarInformacoes: function() {
        console.log(Nome: ${this.nome});
        console.log(Idade: ${this.idade});
        console.log(Curso: ${this.curso});
        console.log(Matrícula: ${this.matricula});
    }
};

// Chamando o método para mostrar as informações do aluno
aluno.mostrarInformacoes();