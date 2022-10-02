const hamburger = document.querySelector(".student-name"); 
const navMenu = document.querySelector(".ul-nav"); 
const closeIcon = document.querySelector(".closeIcon-user");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    closeIcon.classList.toggle("active");
});

closeIcon.addEventListener("click",()=>{
    navMenu.classList.remove("active")
    closeIcon.classList.remove("active")
})


document.querySelectorAll(".link-nav").forEach(n=> n.
            addEventListener("click", ()=>{
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }))



