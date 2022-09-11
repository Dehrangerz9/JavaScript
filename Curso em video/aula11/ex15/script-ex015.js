function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12){
        img.src = 'Manha.png'
        msg.innerHTML = `Bom dia, agora são ${hora} horas`
        document.body.style.backgroundColor = '#e2cd9f'
    }else if (hora >=12 && hora < 18){
        img.src = 'Tarde.png'
        msg.innerHTML = `Boa Tarde, agora são ${hora} horas`
        document.body.style.backgroundColor = '#b9846f'
    }else{
        img.src = 'Noite.png'
        msg.innerHTML = `Boa Noite, agora são ${hora} horas`
        document.body.style.backgroundColor = '#515154'
    }
}