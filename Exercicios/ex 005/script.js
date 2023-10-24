function calcular () {
    let num = document.getElementById ('txttab')
    let tab = document.getElementById ('seltab')
    if (num.value.legnth == 0){
        alert('Digite um número')
    } else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML =""
        while (c <=10 ){
            let item = document.createElement ('option')
            item.text = `${n} X ${c} = ${n * c}`
            tab.appendChild(item)
            c++
        }
    }
}