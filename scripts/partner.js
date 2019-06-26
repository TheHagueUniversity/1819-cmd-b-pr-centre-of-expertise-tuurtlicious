
window.onload = function(){
document.getElementById('verstuuraanmelding').onsubmit = function() {

var email = document.getElementById('email').value;
var tn = document.getElementById('telefoonnummer').value;
var naam = document.getElementById('naam').value;
var vraag = document.getElementById('tekstvak').value;
var wachtwoord = document.getElementById('wachtwoord').value;


if (email == '') {
    //alert('email is verplicht!');
}
else if (tn == '') {
    //alert('onderwerp is verplicht!');
}
else if (naam == '') {
  //alert('Naam is verplicht!');
}
else if (wachtwoord == '') {
  //alert('vraag is verplicht!');
}
function validateEmail(email) {
  var regex = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
if (!validateEmail(email)) {
      alert('Geen geldig emailadres')
    }
else {
  alert('Bedankt voor de vraag, u krijgt zo snel mogelijk antwoord op uw mail.')
}
}
}
//hierboven is de javascript code om het formulier op de stel vragen pagina te checken. dit word gedaan door alle gegevens op te halen, deze te checken of er iets is ingevult en daarna nog een check op de email of deze wel klopt. daarna krijg je een melding over het resultaat
