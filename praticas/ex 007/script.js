function calcular() {
  let popA = document.getElementById('popA');
  let popB = document.getElementById('popB');
  let cpopA = document.getElementById('cpopA');
  let cpopB = document.getElementById('cpopB');
  let A = Number.parseFloat(popA.value);
  let B = Number.parseFloat(popB.value);
  let cA = Number.parseFloat(cpopA.value) / 100 + 1;
  let cB = Number.parseFloat(cpopB.value) / 100 + 1;
  let r = document.getElementById('res');
  let ano = 1;
  if (A > 0 && B > 0 && cA > 0 && cB > 0) {
    while (A < B) {
      A *= (cA / 100);
      B *= (cB / 100);
      ano++;
    }
    r.innerHTML = `A população A levaria ${ano} anos para passar a população B`;
  } else {
    r.innerHTML = ' O valores precisam ser maiores do que 0';
  }
}

let A = 80000;
let B = 500000;
let iA = 3 / 100 + 1;
let iB = 1.5 / 100 + 1;
let a = 1;
while (A < B) {
  A *= iA;
  B *= iB;
  a++;
}
console.log(
  `A populaçõa do país A levou ${a} anos para passar a população do país B`
);
