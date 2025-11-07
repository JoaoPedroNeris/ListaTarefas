let tarefas = sessionStorage.getItem("tarefas") && sessionStorage.getItem("tarefas").split(",") || [];

function listarTarefas() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
    for(let i = 0; i < tarefas.length; i++){
        lista.innerHTML += `<li>${tarefas[i]} <box-icon onclick="apagarTarefa(${i})" type='solid' name='trash'></box-icon></li>`;
    }
}
listarTarefas();

function criarTarefa() {
    let titulo = document.querySelector("#titulo");

    if (titulo.value != "") {
        tarefas.push(titulo.value);
        titulo.value = "";
        sessionStorage.setItem("tarefas", tarefas);
        listarTarefas();
    } else {
        alert("Digite um titulo");
    }
    titulo.focus();
}

function detectarEnter(tecla) {
    if (tecla == 13) {
        criarTarefa();
    }
}
function apagarTarefa(posicao)
{tarefas.splice(posicao, 1);
    sessionStorage.setItem('tarefas', tarefas);
    listarTarefas()
    }