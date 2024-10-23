// Array de objetos Alunos
const alunos = [
    { nome: "Carlos", idade: 21, curso: "Engenharia", matricula: "20231234" },
    { nome: "Ana", idade: 17, curso: "Medicina", matricula: "20231235" },
    { nome: "João", idade: 19, curso: "Direito", matricula: "20231236" },
    { nome: "Mariana", idade: 16, curso: "Matemática", matricula: "20231237" }
];

// Função para retornar alunos com idade acima de 18 anos
function alunosMaior(arrayAlunos) {
    return arrayAlunos.filter(function(aluno) {
        return aluno.idade > 18;
    });
}

// Chamando a função e mostrando o resultado no console
console.log(alunosMaior(alunos));