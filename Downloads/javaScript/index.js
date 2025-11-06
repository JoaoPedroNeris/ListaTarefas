function destacar(botao) {
    let botoes = document.querySelectorAll('.container div button');
    botoes.forEach(b => b.classList.remove('active'));
    botao.classList.add('active');
}
function submeter(){
    let nota = document.querySelector('button.active');
    if(nota){
    alert('A nota escolhida foi:' + nota.textContent)
}else{
    alert('Escolha uma nota!')
}
}