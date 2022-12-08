function escreva(){
    let nome = document.getElementById('iNome').value
    let sobrenome = document.getElementById('iSobrenome').value
    let mail = document.getElementById('iEmail').value

    var cont = document.getElementById('exib')
    cont.innerText = `Nome: ${nome}, Sobrenome: ${sobrenome}, email: ${mail}`
}