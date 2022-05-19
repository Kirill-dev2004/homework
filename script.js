
const inpE = document.getElementById('inp')
const btnE = document.getElementById('btn')
const contListE = document.getElementById('list-container')
const templateE = document.getElementById('template')
const url = `https://api.github.com/users/`

btnE.addEventListener('click', findUsers)

function findUsers(){
    const allUrl = url + inpE.value
   fetch(allUrl)
  .then((r) => r.json())
  .then((r) => {
    renderList(r)
  })
//     .catch((e) => {   ///////тут пытался ошибку обработать и вывести, но не получилось
//       if(e){
//         contListE.innerHTML = 'error' + e
//       }
//   })
  inpE.value = ''
}

function renderList(data){
  const avatar =  `<img src='${data.avatar_url}'>`;
  const repos =  data.public_repos;
  const follower = data.followers;
  const following =  data.following;
  
  const el =  createList(avatar,repos, follower, following)
  contListE.innerHTML = el
}

function createList(avatar, repos, follower, following){
    const el =  templateE.innerHTML.replace('{{avatar}}', avatar).replace('{{repos}}',  repos).replace('{{followers}}', follower).replace('{{following}}', following)
    return el
}