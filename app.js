AOS.init();

// variables

const mobileMenu = document.querySelector(".nav-links")
const toggle = document.querySelector(".toggle")
// const fixed = document.querySelector(".fixed")
const nav = document.getElementById("nav")


// events

toggle.addEventListener("click", ()=>{
  mobileMenu.classList.toggle("list-active")
})

window.addEventListener("scroll",() =>{

const height = window.pageYOffset
const navHeight = nav.getBoundingClientRect().height
if(height > navHeight){
nav.classList.add("fixed");
}
else{
  nav.classList.remove("fixed")
}
})
// preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});