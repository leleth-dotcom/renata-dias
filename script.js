
function showTab(tabId) {
  document.getElementById('home').style.display = tabId === 'home' ? 'block' : 'none';
  document.getElementById('form').style.display = tabId === 'form' ? 'block' : 'none';
  document.getElementById('services').style.display = tabId === 'services' ? 'block' : 'none';
}

function mostrarCampoOutro() {
  var select = document.getElementById("atendimento_proprio");
  var campoOutro = document.getElementById("campo_outro");
  campoOutro.style.display = select.value === "nao" ? "block" : "none";
}
