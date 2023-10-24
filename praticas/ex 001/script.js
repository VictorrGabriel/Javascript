function Identificador(){
    var letra = document.getElementById("ident").value;
    letra = letra.toLowerCase();

    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u')
  alert("Vogal");
 else     
     alert("Consoante");
}
