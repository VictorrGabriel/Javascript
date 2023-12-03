const botão = document.querySelector('input#btn');
const resultado = document.querySelector('section#res');
const limpar = document.querySelector('input#limpar');
let início = 0;
function quantidadeDecliquesNoBotão() {
  do {
    início++;
    resultado.innerHTML = `<p>O contador está com  <span style="background-color: yellow;">${início}</span> cliques</p>`;
  } while (quantidadeDecliquesNoBotão === início);
}
botão.addEventListener('click', quantidadeDecliquesNoBotão);

function limparResultado() {
  início = 0;
  resultado.innerHTML = '';
}

limpar.addEventListener('click', limparResultado);
