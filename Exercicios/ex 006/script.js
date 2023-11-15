function validar() {
    let val = Number(document.getElementById ('val').value)
    let r = document.getElementById ('res')
    
    if (val === '' || isNaN(val)) { 
        r.innerHTML = 'Invalid';
    } else {
        r.innerHTML = 'Valid';
    }
}