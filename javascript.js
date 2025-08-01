const sections = document.querySelectorAll("section");

document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada! Entrarei em contato em breve.");
  this.reset();
});