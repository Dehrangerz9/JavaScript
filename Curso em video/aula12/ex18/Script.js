 function tabuada(){
    let numero = document.getElementById('numero').value
    let tabuada = document.getElementById('Tabuada')
    if (numero.length == 0){
        window.alert('[ERRO] Por favor digite um valor')
    }else{
        n = Number(numero)
        tabuada.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = 0`
            tabuada.appendChild(item)
        }
    }
}