const modalClew = document.querySelector('.modalClew-container');
const clewInsert = document.querySelector('.title-clew')
const buttonClewOk = document.getElementById('buttonClewOk');


buttonClewOk.addEventListener('click',()=>{
    modalClew.classList.remove('active');
    clewInsert.innerHTML = ''
    
})


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
