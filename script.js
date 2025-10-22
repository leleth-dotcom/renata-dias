
function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    if (tabId === 'home') {
        document.querySelector('img').classList.add('slide-in-left');
        document.querySelector('.text').classList.add('slide-in-right');
    }
}
window.onload = () => showTab('home');
