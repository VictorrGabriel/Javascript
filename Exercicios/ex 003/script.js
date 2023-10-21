function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    var img = document.createElement ('img')
    img.setAttribute ('id', 'foto')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifiqueos os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        res.innerHTML = `Idade calculada: ${idade} ano(s)`
        if(fsex[0].checked) {
            gênero = 'Homem'

            if (idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute ('src', 'imagens/pia.png')
            }else if (idade < 21){
                res.innerHTML += ('b')
                //jovem
                img.setAttribute ('src', 'imagens/jovemh.png')
            }else if (idade < 55 ){
                res.innerHTML += ('c')
                //Adulto
                img.setAttribute ('src', 'imagens/homem.png')
            }else {
                res.innerHTML += ('d')
                //velho
                img.setAttribute ('src', 'imagens/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute ('src', 'imagens/menina.png')
                res.innerHTML += ('a')
            }else if (idade < 21){
                res.innerHTML += ('b')
                //jovem
                img.setAttribute ('src', 'imagens/jovemm.png')
            }else if (idade < 55 ){
                res.innerHTML += ('c')
                //Adulto
                img.setAttribute ('src', 'imagens/mulher.png')
            }else {
                res.innerHTML += ('d')
                //velho
                img.setAttribute ('src', 'imagens/idosa.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s)`
        res.style.width = '300px'
        res.style.margin = 'auto'
        img.style.paddingTop = '15px'
        res.appendChild (img)

    }
}