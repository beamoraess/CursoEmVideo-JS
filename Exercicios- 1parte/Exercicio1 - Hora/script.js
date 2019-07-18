var msg = document.getElementById('msg')
var imagem = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

function carregar(){
if(hora >= 0 && hora < 12){
    imagem.src = 'img/img-manha.jpg'
    document.body.style.background = 'yellow'
    
} else if(hora >= 12 && hora < 18){
    imagem.src = 'img/img-tarde.jpg'
    document.body.style.background = 'orange'
    
} else {
    imagem.src = 'img/img-noite.jpeg'
    document.body.style.background = 'black'
    
}
}