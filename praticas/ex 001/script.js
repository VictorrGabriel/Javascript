function Identificador() {
  let letra = document.getElementById('ident').value;
  letra = letra.toLowerCase();
  let r = document.getElementById('res');

  if (
    letra === 'a' ||
    letra === 'e' ||
    letra === 'i' ||
    letra === 'o' ||
    letra === 'u'
  ) {
    r.innerHTML = 'Vogal';
  } else if (letra.length === 0 || letra.length > 1) {
    r.innerHTML = 'Insira <strong>uma</strong> letra';
  } else if (isNumber(letra)){
    r.innerHTML = 'Digite apenas letras'
  }
  else {
    r.innerHTML = 'Consuante';
  }
}

function isNumber(l) {
  if (
    l === '0' ||
    l === '1' ||
    l === '2' ||
    l === '3' ||
    l === '4' ||
    l === '5' ||
    l === '6' ||
    l === '7' ||
    l === '8' ||
    l === '9'
  ) {
    return true;
  } else {
    return false;
  }
}
