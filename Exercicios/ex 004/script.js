function Calcular() {
    var c = Number(document.querySelector ('input#txtinc').value)
    var f = Number(document.querySelector ('input#txtfim').value)
    var p = Number(document.querySelector ('input#txtpas').value)
    var res = document.querySelector ('div#res')
    res.innerHTML = ''
    for (c ; c <= f ; c += p){
        res.innerHTML += c + '  '
        
    }

}

var d = 1
var a = 2
var b = 12
for ( d ; d <= b ; d += a) {
    console.log(d)
}