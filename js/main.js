var list = []
function envio(list){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    list.unshift({'name':name,'email':email,'mensagem':mensagem});
    alert('Enviado com sucesso!!');
    saveJSON(list);
}
function saveJSON(list){
    json = JSON.stringify(list);
    console.log(json);
}