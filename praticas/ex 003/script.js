function identificar () {
    var n1 = Number.parseFloat(document.querySelector ('input#num1').value)
    var n2 = Number.parseFloat(document.querySelector ('input#num2').value)
    var n3 = Number.parseFloat(document.querySelector ('input#num3').value)
    var r = document.querySelector ('section#resposta')
     if (n1 < n3) {
        r.innerHTML = `O maior número é ${n3}` 
    } else if (n1 < n2) {
        r.innerHTML = `O maior número é ${n2}`
    } else if (n2 < n1) {
        r.innerHTML = `O maior número é ${n1}`
    } else if (n2 < n3) {
        r.innerHTML = `O maior número é ${n3}`
    } else if (n3 < n1) {
        r.innerHTML = `O maior número é ${n1}`
    } else if (n3 < n2){
        r.innerHTML = `O maior número é ${n2}`
    } else {
        r.innerHTML = `Todos Iguais`
    }

}
    /* outra  forma de resolver é q é muito melhor 
    var maior = n1
    if (n1 < n2 ) {
        maior = n2 
    }
    if (n1 < n3 ) {
        maior = n3
    }
    r.innerHTML = `O número maior é ${maior}`*/

// parsefloat : conta casa pós virgula
// parseint : numros inteiros