const inpE = document.getElementById('input');
const errorE = document.querySelector('.error-cont');
const btnE = document.getElementById('btn')
const containerE = document.getElementById('container-list')

inpE.addEventListener('keyup', validateTodo)
inpE.addEventListener('keydown', keyboard)
btnE.disabled = true;

btnE.addEventListener('click', addToDo)

function validateTodo(event){  
    if(!event.target.value.trim()){
        errorE.innerText = '';
        btnE.disabled = true
        return
    }
    if( event.target.value.trim().length <= 2){
        errorE.innerText = 'Error, length should be > 2'
        btnE.disabled = true
        return
    }
    errorE.innerText = '';
    btnE.disabled = false
}

function onDelete(div){
   div.remove()
}

function createCross(div){
    const cross = document.createElement('span')
    cross.textContent = 'X';
    cross.classList.add('delete-todo')

    div.append(cross)
}

function keyboard(enter){
    if(enter.keyCode === 13){
        addToDo() 
        return
    }
    if(enter.shiftKey && enter.keyCode === 8){
        inpE.value = ''
    }
}



function addToDo(){
    const inpText = inpE.value;
    if(!inpText.trim()){
        alert('Enter some text')
        return
    }
    
    const element = createElement('div')
    const elementP = createElement('p')
    elementP.textContent = inpText
    elementP.classList.add('text')

    element.classList.add('div-flex')
    element.append(elementP)
    createCross(element)

    element.classList.add('yellow');

    addElement(element, containerE)

    clearValue()
}

function addElement(el, container){
    container.append(el)
}

function createElement(tag){
    return document.createElement(tag)
}

function clearValue(){
    inpE.value = ''
}

function colorsChange(element){
    element.classList.toggle('green')
}

containerE.addEventListener('click', (event) => {
    if(event.target.classList.contains('div-flex')){
        colorsChange(event.target)
    }else if(event.target.classList.contains('delete-todo')){
        onDelete(event.target.parentNode)
    }
})

