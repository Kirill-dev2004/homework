
const inpE = document.getElementById('inp')
const btnE = document.getElementById('btn')
const contListE = document.getElementById('list-container')
const url = `https://api.github.com/users/`

btnE.addEventListener('click', findUsers)

function findUsers(){
    const allUrl = url + inpE.value
   fetch(allUrl)
  .then((r) => r.json())
  .then((r) => {
    renderList(r)
  }) 

  inpE.value = ''
}

function renderList(data){
  const avatar =  contListE.innerHTML =  `<img src='${data.avatar_url}'>`;
  const repos =  data.innerHTML = data.public_repos
  // contListE.innerHTML = `<div>${data.public_repos}</div>`;
 
    // const userAvatar = document.createElement('div')
    // const repos = document.createElement('div')
    // userAvatar.innerHTML = `<img src='${data.avatar_url}'>`;
    // repos.innerHTML = `<div>${data.public_repos}</div>`;
    // contListE.innerHTML = `<div>${data.followers}</div>`;


    // contListE.innerHTML = data.following;
    
    // contListE.append(userAvatar)
}