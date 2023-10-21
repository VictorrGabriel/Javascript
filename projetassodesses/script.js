function Calcular () {
    var salário = document.getElementById ('txtsal').value
    var res = document.getElementById ('res')
    var vts = document.getElementById ('radvs')
    var rvt = document.getElementById ('valet')
    var irrf = ''
    var vt = 0.06 * salário
    var salinss = '' // salário - inss
    var salnf = ''  // salário - inss && irrf
    var salnv = '' // salário - inss && vt
    var fsal = ''  // salário final (inss + irrf + vt)
    var irn = ''  // innss + irrf
    var salvt = salário -  vt
    if(salário <=  1302){
        if (vts.checked ) {
            inss = 0.075
            fsal = salvt - inss * salvt
            res.innerHTML = `Salário com descontos ${fsal} reais`
        } else {
            inss = 0.075
            fsal = salário - salário * inss
            res.innerHTML = `Salário com descontos ${fsal} reais`
        }   
            
    } else if (salário < 2571.29) {
        inss = 0.09
        if (vts.checked ) {
            
            fsal = salvt - inss * salvt
            res.innerHTML = `Salário com descontos ${fsal} reais`
        } else {
            
            fsal = salário - salário * inss
            res.innerHTML = `Salário com descontos ${fsal} reais`
        }
        if (vts.checked && salário >= 1903.99 && salário < 2826.65) {
            irrf = 0.075
            irn = (inss * salvt) + (irrf * salvt)
            fsal = salário - irn
            res.innerHTML = `Salário com descontos ${fsal} reais`
        } else if(salário >= 1903.99 && salário < 2826.65){
            irrf = 0.075
            irn = (inss * salário) + (irrf * salário)
            fsal = salário - irn
            res.innerHTML = `Salário com descontos ${fsal} reais`
        }
    }
    rvt.innerHTML = `O valor do seu Vale Transpote é ${vt}`
}
