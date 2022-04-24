const inpE = document.getElementById('input')
const btnE = document.getElementById('btn')
const containerE = document.getElementById('container-list')

btnE.addEventListener('click', addToDo)

function onDelete(div){
   div.remove(div)
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

    if(!inpText.trim()){
        alert('Please enter some text');
        return
    }

    const element = document.createElement('div')
    const elementP = document.createElement('p')
    elementP.textContent = inpText
    elementP.classList.add('text')

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
    if(element.classList.toggle('green')){
        element.classList.remove('yellow')
        element.classList.add('green')
    }else{
        element.classList.remove('green');
        element.classList.add('yellow');
    }
}