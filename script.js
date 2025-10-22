
function showTab(tabId) {
  document.getElementById('home').style.display = tabId === 'home' ? 'block' : 'none';
  document.getElementById('form').style.display = tabId === 'form' ? 'block' : 'none';
}
