var hora_atual = new Date()
var hora = hora_atual.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (6 <= hora < 12){
    console.log('Bom dia')
}else if (hora < 18){
    console.log('Boa tarde')
}else if (hora < 24){
    console.log('Boa noite')
}