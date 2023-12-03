const botton = document.querySelector ('input#btn');
const result = document.querySelector ('section#res');
let date = new Date

function showInfo (){    
    result.innerHTML = `<p>${date}</p>`
}

botton.addEventListener ('click', showInfo)