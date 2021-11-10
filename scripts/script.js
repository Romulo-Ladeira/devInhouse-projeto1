
let novaTarefa = document.getElementById("novaTarefa") 
let listaTarefas = document.getElementById("listaTarefas")
btnTarefa.addEventListener('click',event => {
    let valorNtarefa = novaTarefa.value

    listaTarefas.innerHTML += `<li><input type="checkbox" class="marcarFeito" onclick="marcar(this)">  ${valorNtarefa}  <button class="btnExcluirTarefa" onclick="excluir(this)">X</button></li>`
})

function marcar(checkbox){
    
    if(checkbox.checked === true){
        checkbox.parentElement.style.textDecoration ="line-through"
    }
    else{
        checkbox.parentElement.style.textDecoration ="none"
    }
    
    }
function excluir(btn){
    
}
