AOS.init();

// variables

const mobileMenu = document.querySelector(".nav-links")
const toggle = document.querySelector(".toggle")

const cards = document.querySelectorAll(".body-section")
// const fixed = document.querySelector(".fixed")
const nav = document.getElementById("nav")
const toggleSwitch = document.querySelector(".fa-bars")
const footerText = document.querySelector(".copyright")
const links = document.querySelectorAll(".links")

// functions

//  for sending link

cards.forEach(card =>{
  card.addEventListener("click", ()=>{
  window.location.href = "https://app.skribfy.com"
  })
})



links.forEach(btn =>{
  btn.addEventListener("click", () =>{
    mobileMenu.classList.remove("list-active");
    toggleSwitch.classList.remove("fa-times-circle")
    toggleSwitch.classList.add("fa-bars")
  })
})

const date = new Date().getFullYear();

// events
footerText.innerHTML = `<p> &copy ${date} Skribfy all right reserved <br> [developed by suhail wabrodor] </p>`

toggle.addEventListener("click", ()=>{
 

  if(toggleSwitch.classList.contains("fa-bars")){
    toggleSwitch.classList.remove("fa-bars")
    toggleSwitch.classList.add("fa-times-circle")
  }else{
    toggleSwitch.classList.remove("fa-times-circle")
    toggleSwitch.classList.add("fa-bars")
  }

 
    
 mobileMenu.classList.toggle("list-active");
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