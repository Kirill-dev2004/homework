const inpE = document.getElementById('input')
const btnE = document.getElementById('btn')
const containerE = document.getElementById('container-list')
const errorE = document.querySelector('.error-cont')

btnE.addEventListener('click', addToDo)
btnE.disabled = true;

inpE.addEventListener('keyup', validate)

function validate(event){
    if(!event.target.value.trim()){
        errorE.innerText = ''
        return
    }
    if(event.target.value.trim().length <= 2){
        errorE.innerText = 'Please enter more than two symbols'
        return
    }
    errorE.innerText = ''
    btnE.disabled = false
}

function onDelete(div){
   div.remove()
}

function createCross(div){
    const cross = document.createElement('p')
    cross.textContent = 'X';
    cross.classList.add('cross-style')

    div.append(cross)
    cross.addEventListener('click', () => {
        onDelete(div)
    })
}


function addToDo(){
    const inpText = inpE.value;
    const element = document.createElement('div')
    const elementP = document.createElement('p')
    elementP.textContent = inpText
    // elementP.classList.add('text')

    element.classList.add('div-flex')
    element.append(elementP)
    createCross(element)

    colorYellow(element);

    element.addEventListener('click', () => {
        colorsChange(element)
    })

    containerE.append(element);

    clearValue()
}


function clearValue(){
    inpE.value = ''
}

function colorYellow (element){
    element.classList.add('yellow');
}

function colorsChange(element){
    element.classList.toggle('green')
}