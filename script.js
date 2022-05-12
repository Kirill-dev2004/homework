const menuBtn = document.getElementById('menu-btn');
const menuE = document.getElementById('menu');


menuBtn.addEventListener('click', onClick)
menuE.addEventListener('click',closestMenu)


function onClick(){
	menuBtn.classList.toggle('active');
	menuE.classList.toggle('active');
  
}

function closestMenu(){
  const menu = [...menuE.children]
  menuBtn.classList.toggle('active');
 menu.classList.toggle('active')
}


