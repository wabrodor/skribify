AOS.init();

// variables

const mobileMenu = document.querySelector(".nav-links")
const toggle = document.querySelector(".toggle")
const fixed = document.querySelector(".fixed")


// events

toggle.addEventListener("click", ()=>{
  mobileMenu.classList.toggle("list-active")
})

window.addEventListener("scroll",() =>{

// console.log(getBoundingClientReact())
})
// preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});