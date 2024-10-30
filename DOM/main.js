function alterarImagem() {
    const img = document.getElementById('imagem');
    img.src = img.src === "https://picsum.photos/200/200?random=1" ? "https://picsum.photos/200/200?random=2" : "https://picsum.photos/200/200?random=1";
}

function alterarTitulo() {
    const titulo = document.getElementById('titulo');
    titulo.textContent = titulo.textContent === "Meu Título" ? "Novo Título" : "Meu Título";
}

function alterarParagrafo() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.textContent = paragrafo.textContent === "Lorem ipsum dolor sit amet consectetur adipiscing elit. Possimus eum, at ducimus aliquam delectus hic." ?
        "Conteúdo alterado para o parágrafo." : 
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Possimus eum, at ducimus aliquam delectus hic.";
        paragrafo.style.color = paragrafo.style.color === "lightblue"? "black" : "lightblue";
}

function tocarAudio() {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.play();
}


function toggleBotoes() {
    const BTN1 = document.getElementById('BTN1');
    const BTN2 = document.getElementById('BTN2');

    BTN1.classList.toggle('toggle');
    BTN2.classList.toggle('toggle');


    
    // Seleciona os 3 primeiros botões que alteram imagem, título e parágrafo
    //const botoes = document.querySelectorAll('.btn:not(:last-child)');

    //botoes.forEach(btn => {
       // btn.classList.toggle('toggle'); // Alterna a classe 'toggle' em cada botão
   // });
}