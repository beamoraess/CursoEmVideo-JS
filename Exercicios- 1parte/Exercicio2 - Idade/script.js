function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO TENTE NOVAMENTE!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'img-crianca.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img-adultomasc.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img-adultomasc.jpeg')
            } else {
                img.setAttribute('src', 'img-idoso.jpeg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'img-criancafem.jpeg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img-adultofem.jpeg')
            } else if (idade < 50) {
                img.setAttribute('src', 'img-adultofem.jpeg')
            } else {
                img.setAttribute('src', 'img-idosa.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}