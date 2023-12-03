const PersonName = document.getElementById('name');
const age = Number(document.getElementById('age').value);
const wage = Number(document.getElementById('wage').value);
let sex = document.getElementById('sex');
const maritalStatus = document.getElementById('marital_status');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

/* alert('Faça o seu registro!'); */

function form() {
  if (PersonName.value.length <= 3 || !isNaN(PersonName.value)) {
    alert(
      'Revise o seu Nome, o campo deve ser prenchido apenas com letras e deve ter mais de 3 caracteres'
    );
  } else if (age < 16) {
    alert('Deve ter mais de 16 anos para fazer o seu registro!');
  } else if (wage < 0) {
    alert('O salário dever ser igual ou maior à zero!');
  } else if (maritalStatus) {

    }
  }

  switch (!sex) {
    case 'M':
    case 'm':
    case 'F':
    case 'f':
      alert(
        'O campo sexo deve ser prenchido com "M" (Para homens)ou "F" (Para mulheres)'
      );
      break;
  }
  /* result.innerHTML = '<h2>Confirme o seu cadastro</h2> <br>'
  result.innerHTML += `Olá, <p>${PersonName}</p>!`
  result.innerHTML += `<p>Idade: ${age}</p>`
  result.innerHTML += `<p>Salário: ${wage}</p>`
  result.innerHTML += `<p>Sexo: ${sex}</p>`
  result.innerHTML += `<p>Estado Cívil: ${maritalStatus}</p>` */
}

btn.addEventListener('click', form);

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
