const nameListE = document.getElementById('list-container-name')
const surnameListE = document.getElementById('list-container-surname')
const numberListE = document.getElementById('list-container-number')
const inpNameE = document.getElementById('name')
const inpSurnameE = document.getElementById('surname')
const inpNumberE = document.getElementById('number')
const btnE = document.getElementById('btn')


function createLine(section){
    const divLine = document.createElement('div')
    divLine.classList.add('line')
    section.append(divLine)
}

function addElement(div, elem){
    const p = document.createElement('p');
    p.textContent = elem;
    div.append(p);
    createLine(div)

}

function nameList(){
 const inpNameText = inpNameE.value;
 if(!inpNameText.trim()){
     alert('Enter your name')
     return
 }
 addElement(nameListE, inpNameText)
 inpNameE.value = '';
}

function surnameList(){
    const inpSurnameText = inpSurnameE.value;
    if(!inpSurnameText.trim()){
        alert('Enter your surname')
        return
    }
    addElement(surnameListE, inpSurnameText)
    inpSurnameE.value = '';
}

function numberList(){
    const inpNumberText = inpNumberE.value;
    if(!inpNumberText.trim()){
        alert('Enter your number')
        return
    }
    addElement(numberListE, inpNumberText)
    inpNumberE.value = '';
}

btnE.addEventListener('click', () => {
    nameList();
    surnameList();
    numberList();
})