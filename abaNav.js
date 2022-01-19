let navAberto = false;
console.log('oi');
function abrirNav(){
    let nav = document.getElementById('navPrincipal');
    navAberto ? nav.style.zIndex = '-1' : nav.style.zIndex = '999';
    navAberto = !navAberto;
    console.log('oi dentro do abrir nav');
}