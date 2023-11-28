const btnCloseMenu = document.getElementById("menu-btn-close");
const idButtonToggle = document.getElementById("id-btn-toggle");
const gg = document.getElementById('fondo-opaciti')
const menu = document.getElementById('menu');




idButtonToggle.onclick = ()=>{

  menu.classList.toggle('toggle')
  gg.classList.toggle('active-div');  

}


btnCloseMenu.onclick = ()=>{

  menu.classList.toggle('toggle')  
  gg.classList.toggle('active-div')

}

gg.onclick = ()=>{
  menu.classList.toggle('toggle')
  gg.classList.toggle('active-div')
}












