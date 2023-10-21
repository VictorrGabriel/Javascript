function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById ('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if (hora >= 0 && hora < 12){
        //msg.innerHTML += ('Bom dia!')
        img.src = '<p>imagens/manhã.png</p>'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18 ){
        //msg.innerHTML +=('<p>Bom Tarde!</p>')
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#ed8962'
    }else {
        //msg.innerHTML +=('<p>Bom Noite!</p>')
        img.src = 'imagens/noite.png'
        document.body.style.background = '##515154'
    }
}


