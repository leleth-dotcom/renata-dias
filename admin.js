
function verificarSenha() {
  const senha = document.getElementById('senha').value;
  if (senha === 'renata2025') {
    document.getElementById('painel').style.display = 'block';
  } else {
    alert('Senha incorreta');
  }
}
