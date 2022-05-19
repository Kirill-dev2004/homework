
const inpE = document.getElementById('inp')
const btnE = document.getElementById('btn')
const url = ` https://api.github.com/users/`

btnE.addEventListener('click', findUsers)

function findUsers(){
    const allUrl = url + inpE.value
  const urls =  fetch(allUrl)
    console.log(urls);
    inpE.value = ''
}