var salário = 2500
var irrf = ''
var vt = 0.06 * salário
var salinss = '' // salário - inss
var salnf = ''  // salário - inss && irrf
var salnv = '' // salário - inss && vt
var fsal = ''  // salário final (inss + irrf + vt)
var irn = ''  // innss + irrf
var salvt = vt - salário 
if (salário <= 1302) {
    inss = 0.075
    salnv =  inss * salvt - salvt
    console.log(`Salário com descontos ${salnv} reais`)
 
} else if (salário < 2571.29 ) {
    inss = 0.09
    salnv =  inss * salvt - salvt
    console.log(`Salário com descontos ${salnv} reais`)
     if(salário >= 1903.99 && salário < 2826.65){
        irrf = 0.075
        irn = (inss * salvt) + (irrf * salvt)
        fsal = irn - salvt
        console.log (`O salário com todos os descontos ficou ${fsal} reais`)
    }
} else if (salário < 3856.94) {
    inss = 0.012
    salnv =  inss * salvt - salvt
    console.log(`Salário com descontos ${salnv} reais`)
    if (salário <  3751.05 ) {
        irrf = 0.15
        irn = (inss * salvt) + (irrf * salvt)
        fsal = irn - salvt
        console.log (`O salário com todos os descontos ficou ${fsal} reais`)
    }
} else {
    inss = 0.014
    salnv =  inss * salvt - salvt
    console.log(`Salário com descontos ${salnv} reais`)
    if (salário < 4664.68) {
        irrf = 0.225
        irn = (inss * salvt) + (irrf * salvt)
        fsal = irn - salvt
        console.log (`O salário com todos os descontos ficou ${fsal} reais`)
    }else {
        irrf = 0.275
        irn = (inss * salvt) + (irrf * salvt)
        fsal = irn - salvt
        console.log (`O salário com todos os descontos ficou ${fsal} reais`)
    }
}
