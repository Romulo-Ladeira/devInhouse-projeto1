
let novaTarefa = document.getElementById("novaTarefa") 
let listaTarefas = document.getElementById("listaTarefas")
let arrayCheckbox = []
if(localStorage.getItem('marcados')!== null && localStorage.getItem('marcados')!== 'undefined')
{
   arrayCheckbox = JSON.parse(localStorage.getItem('marcados'))
}



btnTarefa.addEventListener('click',event => {
    if(novaTarefa.value === ''){
        
    }else{
    let valorNtarefa = novaTarefa.value
    let numId = localStorage.getItem('numId')
    //cria li seus elemntos filhos
    let li = document.createElement('li')
    li.innerText = valorNtarefa
   
    let button = document.createElement('button')
    button.innerHTML =` <img src="imagens/apagar_icon.ico" alt="borracha">`
    button.className = "btnExcluirTarefa"
    button.setAttribute("onclick", "excluir(this)")

    let checkbox = document.createElement('input') 
    checkbox.className ="marcarFeito"
    checkbox.setAttribute("onclick", "marcar(this)" )
    checkbox.setAttribute("type", "checkbox")
    
    //gera as id pra serem colocadas nos checkbox
    if (numId === null){
        localStorage.setItem('numId', 0)
       
    }
    else{
        novoId =  Number(localStorage.getItem('numId')) + 1
        localStorage.setItem('numId', novoId) 
    }
    checkbox.setAttribute('id',localStorage.getItem('numId') )
    li.appendChild(button)
    li.appendChild(checkbox)
    
    let objCheckbox = 
    {
        id: checkbox.id,
        Ischecked: false,   
    }

    if(localStorage.getItem('marcados')=== null|| localStorage.getItem('marcados')=== 'undefined')
    {
        arrayCheckbox.push(objCheckbox)
        listaTarefas.appendChild(li)
        salvarLista(arrayCheckbox);
    }else{
        arrayCheckbox = JSON.parse(localStorage.getItem('marcados')) 
        arrayCheckbox.push(objCheckbox)
        listaTarefas.appendChild(li)
        salvarLista(arrayCheckbox);
    }
   
    }
    
})

window.onload = function(){


    listaTarefas.innerHTML = localStorage.getItem('lista')
    marcarCarregamento()
  


}

function marcar(checkbox){
    
    if(checkbox.checked === true){
        checkbox.parentElement.style.textDecoration ="line-through"
        for(let i = 0; i < arrayCheckbox.length; i++ ){
            if (arrayCheckbox[i].id === checkbox.id){
                arrayCheckbox[i].Ischecked = true
            }
        }
        salvarLista(arrayCheckbox)
    }
    else{
        checkbox.parentElement.style.textDecoration ="none"
        for(let i = 0; i < arrayCheckbox.length; i++ ){
            if (arrayCheckbox[i].id === checkbox.id){
                arrayCheckbox[i].Ischecked = false
            }
        }
        salvarLista(arrayCheckbox)
    }
    
}
function marcarCarregamento(){
    
    for(let i=0;i < arrayCheckbox.length; i++){
        InputCheck = document.getElementById(arrayCheckbox[i].id)
        if(arrayCheckbox[i].Ischecked === true){
            InputCheck.setAttribute('checked',true)
        }
        else{
            InputCheck.removeAttribute("checked")
        }
        
        
    }
}

function excluir(btn){
    
    let checkboxFilhoLi = btn.parentElement.children[1]
    btn.parentElement.remove()
    let novoArray = []
    for(let i = 0; i < arrayCheckbox.length; i++ ){
        
       if (checkboxFilhoLi.id !== arrayCheckbox[i].id){
            novoArray.push(arrayCheckbox[i])
        }
    }
    arrayCheckbox = novoArray
    salvarLista(arrayCheckbox)
}

 function salvarLista(_array){

    lista = listaTarefas.innerHTML

    localStorage.setItem('lista', lista)

    localStorage.setItem('marcados', JSON.stringify(_array))
}



