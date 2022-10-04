let pedra = document.getElementById('pedra');
let papel = document.getElementById('papel');
let tesoura = document.getElementById('tesoura');
let exibicaoJogador = document.querySelector('desenho--jogador');
let exibicaoComputador = document.querySelector('desenho--computador');

// Variável da condição
let jogador = 0;
let jogador1 = 1;
let jogador2 = 2;

//Escolha do jogo do player
pedra.addEventListener('click', jogoPedra);
papel.addEventListener('click', jogoPapel);
tesoura.addEventListener('click', jogoTesoura);
resultado.getElementById('resultado');



// Jogo da Pedra
function jogoPedra(){
    // Lista dos itens
    const opcoes = new Array(
        'Pedra',
        'Papel',
        'Tesoura'
    );

    // Lógica do jogo
    const computador = Math.floor(Math.random() * 3);

    if(jogador == 0) { // Pedra
        document.getElementById('desenho--jogador').src='imagens/pedra.png';
        if (computador == 0){ // Pedra
            document.getElementById('resultado').textContent = 'Empate';
            document.getElementById('desenho--computador').src='imagens/pedra.png';
            mostraGanhouBranco();
        }
        else if(computador == 1){ // Papel 
            document.getElementById('resultado').textContent = 'Computador';
            document.getElementById('desenho--computador').src='imagens/papel.png';
            mostraGanhou();
        }
        else { // Tesoura
            document.getElementById('resultado').textContent = 'Jogador';
            document.getElementById('desenho--computador').src='imagens/tesoura.png';
            mostraGanhou();
        }
    }
}


// Jogo do Papel
function jogoPapel(){
    document.getElementById('desenho--jogador').src='imagens/papel.png';
    // Lista dos itens
    const opcoes = new Array(
        'Pedra',
        'Papel',
        'Tesoura'
    );

    // Lógica do jogo
    const computador = Math.floor(Math.random() * 3);

    if(jogador1 == 1) { // Papel
        if (computador == 0){ // Pedra
            document.getElementById('resultado').textContent = 'Jogador';
            document.getElementById('desenho--computador').src='imagens/pedra.png';
            mostraGanhou();
        }
        else if(computador == 1){ // Papel
            document.getElementById('resultado').textContent = 'Empate';
            document.getElementById('desenho--computador').src='imagens/papel.png'
            mostraGanhouBranco();            
        }
        else { // Tesoura
            document.getElementById('resultado').textContent = 'Computador';
            document.getElementById('desenho--computador').src='imagens/tesoura.png';
            mostraGanhou();
        }
    }
};


// Jogo da Tesoura
function jogoTesoura(){
    document.getElementById('desenho--jogador').src='imagens/tesoura.png';
    // Lista dos itens
    const opcoes = new Array(
        'Pedra',
        'Papel',
        'Tesoura'
    );

    // Lógica do jogo
    const computador = Math.floor(Math.random() * 3);

    if(jogador2 == 2) { // Tesoura
        if (computador == 0){ // Pedra
            
            document.getElementById('resultado').textContent = 'Computador';
            document.getElementById('desenho--computador').src='imagens/pedra.png';
            mostraGanhou();
        }
        else if(computador == 1){ // Papel
            
            document.getElementById('resultado').textContent = 'Jogador';
            document.getElementById('desenho--computador').src='imagens/papel.png';
            mostraGanhou();
        }
        else { // Tesoura
            
            document.getElementById('resultado').textContent = "Empate";
            document.getElementById('desenho--computador').src='imagens/tesoura.png';
            mostraGanhouBranco();
        }
    }
};

//Funcoes para mostrar ou não a palavra ganhou
function mostraGanhou (){
    document.getElementById('ganhou').textContent = "Ganhou!!!";
};
function mostraGanhouBranco (){
    document.getElementById('ganhou').textContent = "";
};