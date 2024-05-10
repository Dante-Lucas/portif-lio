var list = []

document.getElementById('enviar').addEventListener('click', function() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    list.unshift({'name': name, 'email': email, 'mensagem': mensagem});
    alert('Enviado com sucesso!!');
    saveJSON();
});

function saveJSON() {
    var json = JSON.stringify(list);
    console.log(json);
}
