window.onscroll=() =>{
    navbar.classList.remove("active2");
    if(window.scrollY>100){
        document.querySelector("header").classList.add("active");
    }else{
        document.querySelector("header").classList.remove("active");
    }
    
}


let navbar=document.querySelector(".navbar");

document.querySelector("#menu-bar").addEventListener("click",function(){
    navbar.classList.toggle("active2");
})
document.querySelector("#close").addEventListener("click",function(){
    navbar.classList.remove("active2");
})

let themeToggler=document.querySelector("#theme-toggler");
themeToggler.addEventListener("click",function(){
    themeToggler.classList.toggle("fa-sun");
    if(themeToggler.classList.contains("fa-sun")){
        document.querySelector("body").classList.add("active3");
    }else{
        document.querySelector("body").classList.remove("active3");
    }
})