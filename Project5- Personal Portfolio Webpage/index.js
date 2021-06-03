var el = document.getElementById('heading');
function editNav() {
    el.setAttribute('class', 'fixedNav');
}
window.addEventListener('scroll', editNav, false);