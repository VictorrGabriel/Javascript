function trocar() {
    var num1 = document.getElementById ('val1')
    var num2 = document.getElementById ('val2')
    var n1 = Number(num1.value)
    var n2 = Number(num2.value)
    var r = document.getElementById ('resultado')
    if (n1 == n1) {
        alert (`O primeriro valor era ${n1} e agora é ${n1 = n2}` )
    }
    if (n2 == n2) {
        n1 = Number(num1.value)
        alert (`O primeriro valor era ${n2} e agora é ${n2 = n1} `)
    }

}  

// outra maneira de fazer é fazendo tudo dentro do alert 

if (n1 == n1) {
    console.log ('antes ' + n1)
    n1 = n2
    console.log ('depois ' + n1) 
    
} 
if ( n2 == n2){
    console.log ('Antes ' + n2)
    n2 = n1 
    console.log ('Depois ' + n2)
}