// PASSO 1: pegar os elementos HTML do botões
const botoesCarrossel = window.document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// PASSO 2: identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // PASSO 3: desmarcar o botão selecionado anteriormente
        const botaoSelecionado = document.querySelector('.selec');
        botaoSelecionado.classList.remove('selec');
        // PASSO 4: marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selec');
        //PASSO 5: esconder a imgem de fundo ativa
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        // PASSO 6: fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})