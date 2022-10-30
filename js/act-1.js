const modalClew = document.querySelector('.modalClew-container');
const clewInsert = document.querySelector('.title-clew')
const buttonClewOk = document.getElementById('buttonClewOk');


buttonClewOk.addEventListener('click',()=>{
    modalClew.classList.remove('active');
    clewInsert.innerHTML = ''
    
})




const buttonClewFunction = (button,clew)=>{
    const buttonId = document.getElementById(`${button}`);
    buttonId.addEventListener('click',()=>{
      modalClew.classList.toggle('active');
      clewInsert.innerHTML = `${clew}`;
      buttonId.style.display = 'none'; 
    });
}

buttonClewFunction('clew-1-1', 'La respuesta tal vez se encuentre en algún lado de la página 3. <br> Tal vez eh... ');
buttonClewFunction('clew-1-2', '¿Página 4? <br> No se, no me acuerdo.');
buttonClewFunction('clew-1-3', 'Pensa en la palidez. ¿Que te sugiere ver a alguien pálido? <br> Releé la descripción y analizá que prejuicio podría generarte una persona con esas características. ¿Creerías que es feliz? ');
buttonClewFunction('clew-1-4', 'b) Esta novela la habían leído con la profesora Analía. <br> Un casamiento en cierta época dónde la unión no era por amor sino por otro motivo... <br><br>c) Repará en la página 5 <br> ¿Quién es inmisericorde? ¿Qué nos dice eso sobre el clima?"');
buttonClewFunction('clew-1-5', 'Ya no hay pista, no me acuerdo del cuento. <br>Se que podes solucionar esto por tu cuenta.');


const check = (checkButton,actId)=>{
    const inputCheck = document.getElementById(`${checkButton}`);
    const inputId = document.getElementById(`${actId}`);
    inputCheck.addEventListener('click',()=>{
        inputId.classList.toggle('check')
        console.log(inputCheck.value)
        
    })
}

check('check-1','activities-1')
check('check-2','activities-2')
check('check-3','activities-3')
check('check-4','activities-4')
check('check-5','activities-5')
