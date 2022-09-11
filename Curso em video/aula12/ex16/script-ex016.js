function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >=0 && idade =< 10){
               img.setAttribute('src','Imagens/foto-bebe-m.png')
            }else if (idade < 21){
                img.setAttribute('src','Imagens/foto-jovem-m.png')
            }else if (idade < 50){
                img.setAttribute('src','Imagens/foto-adulto-m.png')
            }else{
                img.setAttribute('src','Imagens/foto-idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Feminino'
            if (idade >=0 && idade < 10){
                img.setAttribute('src','Imagens/foto-bebe-f.png')
             }else if (idade < 21){
                 img.setAttribute('src','Imagens/foto-jovem-f.png')
             }else if (idade < 50){
                 img.setAttribute('src','Imagens/foto-adulto-f.png')
             }else{
                 img.setAttribute('src','Imagens/foto-idoso-f.png')
             }
        }
        res.innerHTML = `Detectamos uma pessoa do sexo ${genero} com ${idade} anos <br>`
        res.appendChild(img)
    }
}