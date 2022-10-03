let pedra = document.getElementById('pedra');
let papel = document.getElementById('papel');
let tesoura = document.getElementById('tesoura');

// Variável da condição
let jogador = 0;
let jogador1 = 1;
let jogador2 = 2;

//Escolha do jogo do player
pedra.addEventListener('click', jogoPedra);
papel.addEventListener('click', jogoPapel);
tesoura.addEventListener('click', jogoTesoura);


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
        if (computador == 0){ // Pedra
            
            document.querySelector('.span_jogador').textContent = 'Deu Empate';
            document.querySelector('#desenho--computador').textContent = 'Deu Empate';
            alert('Deu empate!');
        }
        else if(computador == 1){ // Papel
            
            document.querySelector('.span_jogador').textContent = 'Ganhador!!';
            document.querySelector('#desenho--computador').textContent = 'Perdedor!!';
            alert('Ganhou');
        }
        else { // Tesoura
            
            document.querySelector('.span_jogador').textContent = 'Perdedor!!';;
            document.querySelector('#desenho--computador').textContent = 'Ganhador!!';
            alert('Perdeu');
        }
    }
}


// Jogo do Papel
function jogoPapel(){
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

            document.querySelector('.span_jogador').textContent = 'Vendeu!!';
            document.querySelector('#desenho--computador').textContent = 'Perdeu!!';
            alert('Venceu!');
        }
        else if(computador == 1){ // Papel
            
            document.querySelector('.span_jogador').textContent = 'Deu Empate';
            document.querySelector('#desenho--computador').textContent = 'Deu Empate';
            alert('Deu empate');
        }
        else { // Tesoura
            
            document.querySelector('.span_jogador').textContent = 'Perdeu!!';
            document.querySelector('#desenho--computador').textContent = 'Venceu!!';
            alert('Perdeu');
        }
    }
};


// Jogo da Tesoura
function jogoTesoura(){
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
            
            document.querySelector('.span_jogador').textContent = 'Perdeu!!';
            document.querySelector('#desenho--computador').textContent = 'Venceu!!';
            alert('perdeu');
        }
        else if(computador == 1){ // Papel
            
            document.querySelector('.span_jogador').textContent = 'Ganhou!!';
            document.querySelector('#desenho--computador').textContent = 'Perdeu!!';
            alert('ganhou');
        }
        else { // Tesoura
            
            document.querySelector('.span_jogador').textContent = "Deu Empate";
            document.querySelector('#desenho--computador').textContent = 'Deu Empate';
            alert('deu empate');
        }
    }
};