function verificar() {
    var n1 =Number(document.getElementById('nota1').value)
    var n2 = Number(document.getElementById('nota2').value)
    if (n1 <= 3.99 || n2 <= 3.99) {
        nota = (n1 + n2) / 2
        r.innerHTML = `A média final é ${nota}. Reprovado`
    } else {
        nota = (n1 + n2) / 2
        r.innerHTML = `A média final é ${nota}. `
        if (nota < 7){
            r.innerHTML += 'Reprovado'
        } else {
            r.innerHTML += 'Aprovado'
        }
    }
    
    
    
}

/*if (n1 <= 3.99 || n2 <= 3.99) {
        nota = (n1 + n2) / 2
        r.innerHTML = `A média final é ${nota}. Reprovado`
    } else {
        nota = (n1 + n2) / 2
        r.innerHTML = `A média final é ${nota}. `
        if (nota < 7){
            r.innerHTML += 'Reprovado'
        } else if (nota == 10) {
            r.innerHTML += 'Aprovado com Distinção'
        } else if (n1 > 10 || n2 > 10) {
            nota = ''
            alert('[ERRO] As notas devem ser menores do que 10')
            r.innerHTML = null
        } else if (n1.value.length == 0 || n2.value.length == 0){
            alert('[ERRO] Insira algum valor')
        } else {
            r.innerHTML += 'Aprovado'
        }
         
    }*/