function validar() {
    let nome = prompt('qual os eu nome?')
    if (nome.length > 3) {
        
    } else {
        while (nome.length <= 3){
            alert('O campo nome precisar ter mais do que 3 caracteres')
            nome = prompt('qual os eu nome?')
        }
    }
    let idade = parseInt(prompt('qual a sua idade?'))
    if (idade >= 0 && idade <= 150 ) {
    } else {
        while (idade < 0 || idade > 150){
            alert('A idade precisa estar entre 0 e 150 anos')
            idade = parseInt(prompt('qual a sua idade?'))
        }
    }
   // let salário = Number(prompt('qual o seu salário?'))
    let sexo = prompt('qual o seu sexo?')
    sexo.toLocaleLowerCase
    //let estciv = prompt('Qual o seu estado civil?')
    
    
    if (sexo == 'f' || sexo == 'm') {
        if(sexo == 'f') {
            alert ('Você é mulher')
        }
        if(sexo == 'm'){
            alert ('Você é homem')
        }
    } else if (sexo != 'f' || sexo != 'm') {
        while (sexo != 'f' || sexo != 'm'){
            alert('F ou M')
            sexo = prompt('qual o seu sexo?')
        }
        alert(`Obrigado, ${nome}`)
    }
}



/*function validar() {
    let form = [document.getElementById ('nome'), document.getElementById ('idade'), document.getElementById ('salário'), document.getElementById ('sexo'), document.getElementById ('estciv')]
    let r = document.getElementById ('res')

    if (form[0].value.length == 0 || form[1].value.length == 0 || form[2].value.length == 0 || form[0].value.length == 0 || form[3].value.length == 0 || form[4].value.length == 0) {
        r.innerHTML = '<p>Todos os campos precisam ser prenchidos !</p> '
    } else if (form[0].value.length  <=  3){
        r.innerHTML = ' <p>O campo nome precisa tem mais de 3 caracteres</p> '
    } else if {
        r.innerHTML = 'Okey'
    }

} */