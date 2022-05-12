const menuBtn = document.getElementById('menu-btn');
const menuE = document.getElementById('menu');


menuBtn.addEventListener('click', onClick)

function onClick(){
	menuBtn.classList.toggle('active');
	menuE.classList.toggle('active');
}

function closestMenu(){

  const menu = [...menuE.children]
  menu.forEach((div)=>{
    div.addEventListener('click', ()=>{
      menuBtn.classList.toggle('active');
      menuE.classList.toggle('active')
    })
  })
}
closestMenu()


