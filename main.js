//
const input = document.getElementById("textarea")
const button = document.getElementById("submit") 
const list = document.getElementById("lista")
const tasks = []
const varasto = window.localStorage 


button.addEventListener('click', ()=> {
    const inputText = input.value 

    
    addTask(inputText)
})

function addTask(text){
    const li = document.createElement("li")
    varasto.setItem('task', text)
    li.innerHTML = text
    list.appendChild(li) 
}

function handleLocalStorage(text){
    const tasks = []
}