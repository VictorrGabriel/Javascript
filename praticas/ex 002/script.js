function calcular () {
    let nota1 = document.getElementById ('nota1')
    let nota2 = document.getElementById ('nota2')
    let r = document.getElementById ('resultado')
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    if (n1 > 10 || n2 > 10) {
        alert ('Os valores precisam ser menores do que 10')
    } else if (n1 < 0 || n2 < 0){
        alert (' Os valores precisam ser maiores do que 0')
    } else {
        let média = (n1 + n2) / 2
        if (média >= 7) {
            r.innerHTML = `Parabéns, foi está aprovado, média final ${média}`
            if (média == 10) {
                r.innerHTML = `Parabéns, Aprovado com distinção, média final ${média}`
            }
        } else{
            r.innerHTML = `Reprovado, média final ${média}`
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