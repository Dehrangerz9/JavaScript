function contar(){
   let Inicio = document.getElementById('Inicio').value
   let Fim = document.getElementById('Fim').value
   let Passo = document.getElementById('Passo').value
   let Res = document.getElementById('res')
   if (Inicio.length == 0 || Fim.length == 0 || Passo.length == 0 ){
      Res.innerHTML = '[ERRO] Impossivel Contar'
   } else {
      Res.innerHTML = 'Contado: '
      i = Number(Inicio)
      f = Number(Fim)
      p = Number(Passo)
      if (p <= 0){
         window.alert('Passo invalido. Considerando PASSO: 1')
         p = 1
      }
      if (i < f){
         for(i; i <= f;i += p){
            Res.innerHTML += `${i} \u{1F449} `
         }
         Res.innerHTML += `\u{1F3C1}`
      }else if(i > f){
         for(i; i >= f;i -= p){
            Res.innerHTML += `${i} \u{1F449} `
         }
         Res.innerHTML += `\u{1F3C1}`
      }else{
         Res.innerHTML = 'Não há o que contar'
      } 
   }
}