
let novaTarefa = document.getElementById("novaTarefa") 
let listaTarefas = document.getElementById("listaTarefas")


btnTarefa.addEventListener('click',event => {
    let valorNtarefa = novaTarefa.value
   
    let li = document.createElement('li')
    li.innerText = valorNtarefa
    
    let button = document.createElement('button')
    button.innerText ='X'
    button.className = "btnExcluirTarefa"
    button.setAttribute("onclick", "excluir(this)")

    let checkbox = document.createElement('input') 
    checkbox.className ="marcarFeito"
    checkbox.setAttribute("onclick", "marcar(this)" )
    checkbox.setAttribute("type", "checkbox")
    
    li.appendChild(button)
    li.appendChild(checkbox)

    listaTarefas.appendChild(li)
    
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
    btn.parentElement.remove()
    
}

