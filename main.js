//
const input = document.getElementById("textarea")
const button = document.getElementById("submit") 
const list = document.getElementById("lista")
const tasks = []


button.addEventListener('click', ()=> {
    const inputText = input.value 

    
    addTask(inputText)
})

function addTask(text){
    
    const li = document.createElement("li")
    li.innerHTML = text
    list.appendChild(li) 
}