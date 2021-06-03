var el = document.getElementById('header');
function fixedHeader(){
    el.setAttribute('class', 'fixedstyle')
}
window.addEventListener('scroll', fixedHeader, false);