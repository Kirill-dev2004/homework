const inpE = document.getElementById("inp")
const btnE = document.getElementById("btn")
const containerE = document.getElementById("list-container")


btnE.addEventListener('click', onClick)


function onClick(){
  const inpText = inpE.value;
    if(!inpText.trim()){
        alert("Please enter text")
        return
    }
const element = document.createElement('li')
element.textContent = inpText;
containerE.append(element);
inpE.value = '';
}