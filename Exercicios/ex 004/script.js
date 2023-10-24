function Calcular() {
    var c = Number(document.querySelector ('input#txtinc').value)
    var f = Number(document.querySelector ('input#txtfim').value)
    var p = Number(document.querySelector ('input#txtpas').value)
    var res = document.querySelector ('div#res')
    res.innerHTML = ''
    if(c < f){
        // contagem crescente
        for (c ; c <= f ; c += p){
            res.innerHTML +=  ` &#x1F449 ` + c  
            
        }
        
    } else {
        // contagem regressiva
        for(c ; c >= f ; c -= p){
            res.innerHTML +=  ` &#x1F449 ` + c
        }
        
    }
    res.innerHTML += ` &#x1F3C1 `


}
