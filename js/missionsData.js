const att = document.getElementById('att');
const missions = document.getElementById('missions');
const extraMissions = document.getElementById('extraMissions');
const level = document.getElementById('level');

const modalContainer = document.querySelector('.modalInfo-container')
const modalInfo = document.querySelector('.modalInfo')

const okButton = document.getElementById('buttonInfoOk')



okButton.addEventListener('click',()=>{
    modalContainer.classList.remove("active");
    modalInfo.innerHTML = ''
})

att.addEventListener('click',()=>{
    modalContainer.classList.toggle("active");
    modalInfo.innerHTML= "En este apartado encontrarás una característica peculiar que has demostrado a través del camino propuesto"
})

missions.addEventListener('click',()=>{
    modalContainer.classList.toggle("active");
    modalInfo.innerHTML= "Las tareas que has realizado conforman una historia."
})

extraMissions.addEventListener('click',()=>{
    modalContainer.classList.toggle("active");
    modalInfo.innerHTML= "Aquellas actitudes tácitas que merecen su recompensa."
})


level.addEventListener('click',()=>{
    modalContainer.classList.toggle("active");
    modalInfo.innerHTML= "A través del recorrido, has ido sumando experiencias que aumentaron tu nivel de habilidad con respecto a la literatura."
})

