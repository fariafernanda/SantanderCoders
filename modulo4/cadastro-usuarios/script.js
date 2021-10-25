const enterButton = document.querySelector('#enterButton');
const form = document.querySelector('form');
const textInput = document.querySelector('input[type="text"]');


form.addEventListener('submit', function(event){
    event.preventDefault()
})

function createUser(username){
    const userList = document.querySelector('ul');
    const userElement = document.createElement('li');   
    userElement.textContent = username
    userList.appendChild(userElement)
    addRemoveButton(userElement)
 }


enterButton.onclick = function(){
    createUser(textInput.value)
    clearInput()
    
}

function clearInput(){
    return textInput.value = ''
}

function addRemoveButton(userElement){
    const removeButton = document.createElement('button');
    userElement.appendChild(removeButton)
    removeButton.innerText = 'Remover'
    removeButton.id = 'removeButton'
    removeButton.onclick = () => userElement.remove()
}

