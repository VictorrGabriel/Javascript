function Identificador() {
  var letra = document.getElementById("ident").value;
  letra = letra.toLowerCase();
  var r = document.getElementById ('res')

  if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
  r.innerHTML = ("Vogal")
  } else {
    r.innerHTML = ("Consuante")
  }
}
