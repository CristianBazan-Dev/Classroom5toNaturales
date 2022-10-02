
const studentTitle = document.getElementById('student-name');
const studentNameUserScreen = document.getElementById('student-name-userScreen')


const title = ()=>{
   const request = localStorage.getItem("Estudiante");
   studentTitle.innerHTML = request;  
}

title();

const userScreen = ()=>{
   const request = localStorage.getItem("Estudiante");
   studentNameUserScreen.innerHTML = request;  
}

userScreen()



