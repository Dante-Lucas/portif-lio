// Função para exibir os dados do formulário na tela
function exibirDadosFormulario() {
    var dadosArmazenados = localStorage.getItem('dadosFormulario');
    if (dadosArmazenados) {
        var dadosFormulario = JSON.parse(dadosArmazenados);
        // Exibe os dados do formulário na tela
        document.getElementById('nomeEnviado').textContent = dadosFormulario.nome;
        document.getElementById('emailEnviado').textContent = dadosFormulario.email;
        document.getElementById('mensagemEnviada').textContent = dadosFormulario.mensagem;

        // Exibe a div de resultado
        document.getElementById('resultado').style.display = 'block';
    }
}

// Captura os dados do formulário quando é enviado
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os valores dos campos do formulário
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Cria um objeto para armazenar os dados do formulário
    var dadosFormulario = {
        nome: nome,
        email: email,
        mensagem: mensagem
    };

    // Armazena os dados do formulário no localStorage
    localStorage.setItem('dadosFormulario', JSON.stringify(dadosFormulario));

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';

    // Confirmação de envio
    alert('Formulário enviado com sucesso!');

    exibirDadosFormulario(); // Chama a função para exibir os dados do formulário na tela
});

// Chama a função para exibir os dados do formulário na tela quando a página é carregada
exibirDadosFormulario();
